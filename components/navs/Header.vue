<template>
  <v-app-bar color="primary" absolute app>
    <v-toolbar-title class="white--text">Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <template v-slot:extension>
      <v-tabs align-with-title color="green">
        <v-tab to="/" exact>Главная страница</v-tab>
        <v-tab to="/palette">Палитра</v-tab>
        <v-tab to="/test">Тест</v-tab>
      </v-tabs>
    </template>

    <v-btn icon to="/login">
        <v-icon>mdi-login</v-icon>
    </v-btn>
  </v-app-bar>
</template>