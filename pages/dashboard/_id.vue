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
          <pre>{{ user }}</pre>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col lg="6">
      <v-list three-line elevation="5">
        <v-subheader><h1>{{ `${user.name} posts` }}</h1></v-subheader>
        <v-divider></v-divider>
        <template v-for="item in posts">
          <v-list-item
            :key="item.id"
            @click=""
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.id }}: {{ item.title }}</v-list-item-title>
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
    pageTitile: 'This id page'
  })
}
</script>

<style src="@/assets/style2.css"></style>
