<template>
  <v-container>
    <v-list two-line subheader>
      <v-list-item v-for="user in users" :key="user.id">
        <v-list-item-title><NuxtLink :to="`/test/${user.id}`">{{user.login}}</NuxtLink></v-list-item-title>
        <v-list-item-subtitle>{{user.password}}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
    <v-data-table
      :headers="headers"
      :items="users"
      class="elevation-1"
    >
    </v-data-table>
    <UserCard 
      v-for="user in users" 
      :key="user.id" 
      :login="user.login" 
      :password="user.password"
    />
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import UserCard from '@/components/cards/UserCard.vue'
export default {
  components: {
    UserCard
  },
  data: () => ({
    headers: [
      {
        text: 'ID',
        value: 'id',
      },
      {
        text: 'Логин',
        value: 'login',
      },
      {
        text: 'Пароль',
        value: 'password',
      },
    ]
  }),
  computed: {
    ...mapGetters('users', [
      'users'
    ])
  },
  methods: {
    ...mapActions('users', [
      'getUsers'
    ])
  },
  async mounted() {
    await this.getUsers()
  }
}
</script>