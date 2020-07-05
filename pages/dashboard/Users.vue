<template>
  <v-row>
    <v-col lg="12">
      <h1 style="text-align: center">{{ pageTitle }}</h1>
    </v-col>
    <v-col lg="6" offset-lg="3">
      <v-list three-line elevation="5">
        <v-list-item
          v-for="item in users"
          :key="item.username"
          nuxt
          :to="{name: 'user_view', params:{id: item.id}}"
        >
          <v-list-item-avatar>
            <v-img :src="`https://randomuser.me/api/portraits/men/${item.id}.jpg`"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ `${item.name} (${item.username})` }}</v-list-item-title>
            <v-list-item-subtitle>
              E-mail: {{ item.email }}<br/>
              Phone: {{ item.phone }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'users',
  async asyncData({$axios, error, params}) {
    let users = await $axios.$get('https://jsonplaceholder.typicode.com/users')
    return {
      users
    }
  },
  data: () => ({
    pageTitle: 'Users page'
  }),
}
</script>

<style src="@/assets/style2.css"></style>
