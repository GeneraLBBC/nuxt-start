<template>
  <v-layout
    justify-center
    align-center
  >
    <v-flex
      lg4
    >
      <v-card>
        <v-card-text>
          <v-form
            ref="form"
            v-model="form"
            lazy-validation
          >
            <v-text-field
              v-model="formFields.phone"
              :rules="formRules.phone"
              label="Phone"
              :disabled="formDisabled"
              placeholder="+998 97 229 24 99"
            ></v-text-field>
            <v-text-field
              v-model="formFields.password"
              :rules="formRules.password"
              type="password"
              label="Password"
              :disabled="formDisabled"
              placeholder="***********"
            ></v-text-field>
            <v-btn
              @click="login"
              :disabled="formDisabled"
            >LOGIN</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'login',
    layout: 'auth',
    data(){
      return {
        form: null,
        formFields: {
          phone: '',
          password: ''
        },
        formDisabled: false,
        formRules: {
          phone: [
            v => !!v || 'Phone is required',
          ],
          password: [
            v => !!v || 'Password is required',
          ]
        }
      }
    },
    methods: {
      login(){
        if (this.$refs.form.validate()) {
          this.formDisabled = true
          this.$axios.$post('/auth/sign-in', this.formFields)
            .then(res => {
              if (res.success) {
                this.$auth.setUserToken(res.data.token)
                  .then(() => {
                    this.$router.push({ name: 'dashboard' })
                  })
                  .catch((err) => console.log('ebanniy v rot ',err))
              } else {
                this.formDisabled = false
              }
            })
        }
      }
    }
  }
</script>
