<template>
  <v-app app>
    <h1>{{ pageTitle }}</h1>
    <hr>
    <v-container fluid>
      <div class="block">
        <ol>
          <li
            v-for="user in users"
            :key="user"
          >
            <a @click="goTo(user)">
              {{ user.name }} <br>
              {{ user.email }} <br>
              <hr>
            </a>
          </li>
        </ol>
      </div>

      <div class="block2">
        <!-- <ol>
          <li
            v-for="post in posts"
            :key="post"
          >
            <a @click="goTo(post)">
              {{ post.userId }} <br>
              {{ post.title }} <br>
              <hr>
            </a>
          </li>
        </ol> -->
        <nuxt/>
      </div>
    </v-container>
    
  </v-app>
</template>

<script>
export default {
  name: 'users',
  async asyncData({$axios, error, params}) {
    let users = await $axios.$get('https://jsonplaceholder.typicode.com/users')
    let posts = await $axios.$get('https://jsonplaceholder.typicode.com/posts?userId=1')
    
    return {
      users,
      posts
    }
  },
  
  data: () => ({
    pageTitle: 'Users page'
  }),
  methods: {
    goTo (user) {
      this.$router.push('/users/' + user.id)
    }
  }
}
</script>

<style src="@/assets/style2.css"></style>
