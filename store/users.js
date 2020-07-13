export const state = () => ({
  myTitle: 'This is Users module title',
  list: []
})

export const mutations = {
  setUsersList(state, list) {
    state.list = list
  },
  addUser(state, list) {
    state.list.push(list)
  }
}

export const actions = {
  async updateUsersList({commit, state}) {
    if (state.list.length === 0) {
      await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
        .then(users => {
          commit('setUsersList', users)
        })
    }
  }
}

export const getters = {
  getUsersList: state => state.list,
  getUsersById: state => id => {
    return state.list.find(x => x.id == id)
  }
}
