<template>
  <v-row>
    <v-col lg="12">
      <h1 style="text-align: center">{{ pageTitle }}</h1>
      <v-btn @click="setUsersList([])">Clear list</v-btn>
      <v-btn @click="updateUsersList">Update list</v-btn>
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
  import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex'
  export default {
    name: 'users',
    async fetch({store}){
      await store.dispatch('users/updateUsersList')
    },
    computed: {
      ...mapState('users',{
        pageTitle: 'myTitle',
        users: 'list'
      })
    },
    methods: {
      ...mapMutations('users',[
        'setUsersList'
      ]),
      ...mapActions('users',[
        'updateUsersList'
      ])
    }
  }
</script>

<style src="@/assets/style2.css"></style>
