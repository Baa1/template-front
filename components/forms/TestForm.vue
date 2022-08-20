<template>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark>
      <v-toolbar-title>Тестовая форма</v-toolbar-title>
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
          <v-text-field
            v-model="password"
            name="password"
            label="Повторите пароль"
            type="password"
          ></v-text-field>
          <v-checkbox color="primary" label="Принимаю условия использлвания" v-model="accept">
          </v-checkbox>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="accent" v-if="accept == true">Войти</v-btn>
      <v-btn color="primary" :disabled="!accept">Зарегистрироваться</v-btn>
      <v-btn color="secondary">Назад</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      login: '',
      password: '',
      accept: false
    }
  }
}
</script>