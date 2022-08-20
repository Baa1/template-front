<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <LoginForm/>
    </v-flex>
  </v-layout>
</template>

<script>
import LoginForm from '~/components/forms/LoginForm.vue'
export default {
  layout: 'auth',
  components: {
    LoginForm
  }
}
</script>
