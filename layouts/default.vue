<template>
  <v-app>
    <v-app-bar
      app
      absolute
      color="primary"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>My App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="logout">
        LOGOUT
      </v-btn>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab nuxt :to="{name: 'dashboard'}">DASHBOARD</v-tab>
          <v-tab nuxt :to="{name: 'test'}">TEST</v-tab>
          <v-tab nuxt :to="{name: 'users'}">Users</v-tab>
          <v-tab nuxt :to="{name: 'wievs'}">Wievs</v-tab>
          <v-tab nuxt :to="{name: 'auth_login'}">LOGIN</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'default',
    auth: true,
    methods: {
      logout(){
        this.$auth.logout()
          .then(() => {
            this.$router.push({ name: 'auth_login' })
          })
      }
    }
  }
</script>

<style '@/assets/style.css'></style>
