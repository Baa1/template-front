<template>
  <UserCard 
    :login="user.login" 
    :password="user.password"
  />
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import UserCard from '@/components/cards/UserCard.vue'
export default {
  components: {
    UserCard
  },
  computed: {
    ...mapGetters('users', [
      'user'
    ])
  },
  methods: {
    ...mapActions('users', [
      'getUserById'
    ])
  },
  async mounted() {
    await this.getUserById(this.$route.params.id)
  }
}
</script>