export const state = () => ({
  list: [],
  labels: {},
  options: {},
  pagination: {},
  filters: {}
})

export const mutations = {
  setStartContent(state, response) {
    if (typeof response.options !== 'undefined') {
      state.options = response.options
    }
  },
  setList(state, data) {
    state.list = data
  },
  setLabels(state, data) {
    state.labels = data
  },
  setPagination(state, data) {
    state.pagination = data
  },
  clearList(state) {
    state.list = []
    state.labels = {}
    state.filters = {}
  },
  onChangeFilter(state, filters){
    state.filters = filters
  },
  onClearFilter(state){
    state.filters = {}
  }
}

export const actions = {
  async getStartContent({state, commit}) {
    if (Object.keys(state.options).length === 0) {
      await this.$axios.$post('/users')
        .then((response) => {
          commit('setStartContent', response.data)
        });
    }
  },
  getContents({state, commit}, option) {
    option = {reload: false, page: 1, ...option}
    if (state.pagination.offset > 0 || option.page === 1) {
      option.reload = true
    }
    return new Promise((resolve, reject) => {
      if (state.list.length === 0 || option.reload) {
        this.$axios.$post('/users/list',{
          filters: state.filters,
          page: option.page
        })
          .then(response => {
            if (typeof response.data.list !== 'undefined') {
              commit('setList',response.data.list)
            }
            if (typeof response.data.labels !== 'undefined') {
              commit('setLabels',response.data.labels)
            }
            if (typeof response.data.pagination !== 'undefined') {
              commit('setPagination',response.data.pagination)
            }
            resolve({
              list: state.list,
              labels: state.labels,
              pagination: state.pagination
            })
          })
      } else {
        resolve({
          list: state.list,
          labels: state.labels,
          pagination: state.pagination
        })
      }
    })
  },
  getContentsById({state, commit}, id) {
    return new Promise((resolve, reject) => {
      this.$axios.$post(`/users/update/${id}`)
        .then(response => {
          if (response.success) {
            resolve(response.data)
          } else {
            reject()
          }
        })
    })
  },
  setContents({state, commit}, option) {
    option = {id: null, form: {}, ...option}
    return new Promise((resolve, reject) => {
      let url = option.id ? `/users/update/${option.id}` : `/users/create`
      this.$axios.$post(url,{form: option.form})
        .then((res) => {
          if (res.success) {
            commit('clearList')
            resolve()
          } else {
            reject()
          }
        });
    })
  },
  deleteContents({state, commit}, arr) {
    return new Promise((resolve, reject) => {
      this.$axios.$post('/users/delete',{id: arr})
        .then(response => {
          resolve()
        })
    })
  },
  setRkpUser({state, commit}, option) {
    option = {id: null, form: {}, ...option}
    return new Promise((resolve, reject) => {
      let url = option.id ? `/users/rkp-set/${option.id}` : `/users/rkp-set`
      this.$axios.$post(url,{form: option.form})
        .then((res) => {
          if (res.success) {
            resolve()
          } else {
            reject()
          }
        });
    })
  },
  getRkpUserById({state, commit}, user_id) {
    return new Promise((resolve, reject) => {
      this.$axios.$post(`/users/rkp-get/${user_id}`)
        .then(response => {
          if (response.success) {
            resolve(response.data)
          } else {
            reject()
          }
        })
    })
  },
  deleteRkpUser({state, commit}, user_id) {
    return new Promise((resolve, reject) => {
      this.$axios.$post(`/users/rkp-delete`, {id: user_id})
        .then(response => {
          if (response.success) {
            resolve()
          } else {
            reject()
          }
        })
    })
  },
  searchUserForSelect({state, commit}, option) {
    option = {name: '', ...option}
    return new Promise((resolve, reject) => {
      this.$axios.$post('/users/search',option)
        .then(response => {
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export const getters = {
  getOptions: state => state.options,
  getDefaultValue: state => type => {
    if (typeof state.options.default !== 'undefined' && typeof state.options.default[type] !== 'undefined') {
      return state.options.default[type]
    }
    return null
  }
}
