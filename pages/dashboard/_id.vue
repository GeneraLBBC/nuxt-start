<template>
  <div class="block2">
    <h1>Id page</h1>
    <hr>
    <h2>{{ user.userId }}</h2>
    <h2>{{ user.title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'id',
  async asyncData({$axios, error, params}) {
    const user = await $axios.$get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    .then(user => {
      return {user}
    })
    .catch(err => {
      error(err)
    })
  },
  data: () => ({
    // 
  })
}
</script>

<style src="@/assets/style2.css"></style>