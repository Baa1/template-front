<template>
  <v-app>
    <Header/>
    <v-main>
      <Nuxt />  
    </v-main>
  </v-app>
</template>
<script> 
import Header from '@/components/navs/Header.vue'
export default {
  name: 'DefaultLayout',
  components: {
    Header
  }
}
</script>
