export default function ({ $axios, redirect }) {
  // https://app.dilikpulatov.com/api/auth/sign-in


  $axios.onRequest(config => {
    config.headers.common['X-IDevKey'] = 'blablakey'
    config.headers.common['X-IDevLanguage'] = 'ru'
  })

  $axios.onError(error => {
    /*const code = parseInt(error.response && error.response.status)
    if (code){
      if (code === 401) {
        app.$auth.logout()
          .then(() => {
            window.location.reload(true)
            // redirect(store.state.auth.loginUrl)
          })
          .catch((err) => {
            throw err
          })
      } else if (code === 403) {
        redirect('/')
      } else {
        redirect({name: "error", query: {code: code}})
      }
    } else {
      redirect({name: "error", query: {code: 404}})
    }*/
  })

  $axios.onResponse(response => {
    if (typeof response.data.messages !== 'undefined') {
      for (let i in response.data.messages) {
        let item = response.data.messages[i]
        alert(`${item.type.toUpperCase()}: ${item.text}`)
      }
    }
  })
  // onError(err)
  // onRequestError(err)
  // onResponseError(err)

}
