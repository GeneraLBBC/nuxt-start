<template>
  <div class="ifInfo">
    <h1>{{ user.name }}</h1>
    <hr>
    <h3>{{ user.email }}</h3>
    <v-btn class="vBtn" to="/users" dark color="primary">Back to lists</v-btn>
    <nuxt/>
  </div>
</template>

<script>
  export default {
    validate({params}) {
      return /^\d+$/.test(params.id)
    },
    async asyncData({$axios, error, params}) {
      let users = [];
      await $axios.$get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        .then(res => {
          users = res
        })
        .catch(err => {
          error({statusCode: 500})
        })
      return {users}
    },
    data: () => ({
      //
    })
  }
</script>

<style '@/assets/style.css'>

</style>





