<template>
  <div class="block2">
    <h1>{{ pageTitile }}</h1>
    <hr>
    <h2>{{ user.name }}</h2>
    <h2>{{ user.email }}</h2>
  </div>
</template>

<script>
export default {
  name: 'id',
  async asyncData({$axios, error, params}) {
    try {
      const user = await $axios.$get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      return {user}
    } catch(e) {
      error(e)
    }
    
    // const user = await $axios.$get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    // .then(user => {
    //   return {user}
    // })
    // .catch(err => {
    //   error(err)
    // })
  },
  data: () => ({
    pageTitile: 'This id page'
  })
}
</script>

<style src="@/assets/style2.css"></style>