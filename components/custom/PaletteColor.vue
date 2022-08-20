<template>
  <v-col>
    <v-sheet :color="color" width="100" height="100"></v-sheet>
    <p>{{name}}</p>
    <p>{{color}}</p>
  </v-col>
</template>
<script>
export default {
  props: ['name', 'color']
}
</script>