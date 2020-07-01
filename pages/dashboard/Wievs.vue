<template>
  <v-app class="usersStyle">
    <v-container fluid>
      <h1>{{ titlePage }}</h1>
      <hr>
      <v-flex>

        <ul>
          <li
            v-for="user in users"
            :key="user"
          >
            <a @click="goTo">
              User name: {{ user.name }} <br>
              User Email: {{ user.email }} <br>
              <hr>
            </a>
          </li>
        </ul>

      </v-flex>
      <nuxt/>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    name: 'users',
    auth: false,
    async asyncData({$axios, error, params}) {
      return $axios.$get('https://jsonplaceholder.typicode.com/users')
        .then(users => {
          return {
            users
          }
        })
        .catch(err => {
          error(err)
        })
    },
    data: () => ({
      titlePage: 'Добро пожаловать на наш сайт'
    }),
    methods: {
      goTo () {
        alert('Зарегистрируйтесь, чтобы получить доступ к полной версии сайта.')
      }
    }
  }
</script>

<style src='@/assets/style.css'>

</style>
