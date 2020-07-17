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

            <v-dialog v-model="dialog"  max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="green darken-1"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  Add posts
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">Add a Post</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-form
                      ref="form"
                      v-model="valid"
                      :lazy-validation="lazy"
                    >
                      <v-col cols="12">
                        <v-text-field label="ID" type="number" required></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field label="Title*" type="text" required></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-textarea
                          outlined
                          name="input-7-4"
                          label="Enter the text."
                          
                        ></v-textarea>
                      </v-col>
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
    pageTitile: 'This id page',
    dialog: false,
  }),
  methods: {
    reset () {
      this.$refs.form.reset()
    },
    onSubmit() {
      
    }
  }
}
</script>

<style src="@/assets/style2.css"></style>
