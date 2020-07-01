<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
    >
      <v-card>
        <v-card-text>
          <h1>Test page</h1>
          <nuxt-link to="/">go to home</nuxt-link>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    auth: true
  }
</script>
