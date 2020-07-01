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
              User iD: {{ user.id }} <br>
              User name: {{ user.name }} <br>
              User Email: {{ user.email }} <br>
              Username: {{ user.username }} <br>
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
    auth: true,
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
      titlePage: 'Добро пожаловать на про версию нашего сайта.'
    }),
    methods: {
      goTo () {
        alert('Поздравляем, вы в полной версии сайта.')
      }
    }
  }
</script>

<style src='@/assets/style.css'>

</style>
