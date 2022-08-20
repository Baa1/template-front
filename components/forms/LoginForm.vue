<template>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark>
      <v-toolbar-title>Войти в систему</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
          <v-text-field
            v-model="login"
            name="email"
            label="E-mail"
            type="text"
          ></v-text-field>
          <v-text-field
            v-model="password"
            name="password"
            label="Пароль"
            type="password"
          ></v-text-field>
          {{ this.token }}
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click.prevent="onSubmit()">Войти</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      login: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters('auth', ['token'])
  },
  methods: {
    ...mapActions('auth', ['signIn']),
    async onSubmit() {
      await this.signIn({ login: this.login, password: this.password })
    }
  }
}
</script>
