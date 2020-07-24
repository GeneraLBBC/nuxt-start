<template>
  <v-row>
    <v-col lg="12">
      <h1 style="text-align: center">{{ pageTitle }}</h1>
    </v-col>
    <v-col lg="6">
      <v-card elevation="5">
        <v-card-text>
          <h1>{{ user.name }}</h1>
          <h3>{{ user.email }}</h3>
          <h3>{{ user.phone }}</h3>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col lg="6">
      <v-list three-line elevation="5">
        <v-subheader>
          <h1>
            {{ `${user.name} posts` }}
          </h1>
          <v-row justify="center">
            <v-btn
              color="green darken-1"
              dark
              @click="dialog = true"
            >
              Add posts
            </v-btn>
          </v-row>

        </v-subheader>
        <v-divider></v-divider>
        <template v-for="item in posts">
          <v-list-item
            :key="item.id"
            @click=""
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.id }}. {{ item.title }}</v-list-item-title>
              <v-list-item-subtitle>
                {{ item.body }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
        </template>
      </v-list>
    </v-col>

    <!-- DIALOGS -->
    <v-dialog v-model="dialog"  max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Add a Post</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form
              ref="postForm"
              v-model="postForm"
              lazy-validation
            >
              <v-row>
                <v-col lg="12">
                  <v-text-field
                    v-model="formFields.title"
                    label="Title"
                    :rules="[formRules.required]"
                  ></v-text-field>
                </v-col>
                <v-col lg="12">
                  <v-text-field
                    v-model="formFields.body"
                    label="Text"
                    :rules="[formRules.required]"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn dark color="error" class="mr-4" @click="reset">
            Reset Form
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn dark color="red" @click="dialog = false">Close</v-btn>
          <v-btn dark color="green" @click="onSubmit">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'id',
  async asyncData({$axios, error, params}) {
    try {
      let user = await $axios.$get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      let posts = await $axios.$get(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`)
      return {user, posts}
    } catch(e) {
      error(e)
    }
  },
  data: () => ({
    pageTitle: 'This id page',
    dialog: false,
    postForm: null,
    formFields: {
      title: '',
      body: '',
      userId: null
    },
    formRules: {
      required: value => !!value || "Это поле обязательно к заполнению"
    }
  }),
  methods: {
    reset () {
      this.$refs.postForm.reset()
    },
    onSubmit() {
      if (this.$refs.postForm.validate()) {
        this.formFields.userId = this.user.id
        this.$axios.$post('https://jsonplaceholder.typicode.com/posts', this.formFields)
          .then(res => {
            this.posts.unshift(res.data)
            this.$refs.postForm.reset()
            this.dialog = false
          })
      }
    }
  }
}
</script>

<style src="@/assets/style2.css"></style>
