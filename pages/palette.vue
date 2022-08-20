<template>
  <v-container>
    <v-row justify="space-around">
      <PaletteColor v-for="(item, i) in items" :key="i" :color="item.color" :name="item.name"/>
    </v-row>
    <TestForm/>
  </v-container>
</template>
<script>
import PaletteColor from '@/components/custom/PaletteColor.vue'
import TestForm from '@/components/forms/TestForm.vue'
export default {
  components: {
    PaletteColor,
    TestForm
  },
  data: () => ({
    items: [
      {
        name: 'Основной цвет',
        color: '#D93062'
      },
      {
        name: 'Дополнительный цвет',
        color: '#F029C8'
      },
      {
        name: 'Акцентный цвет',
        color: '#C627E6'
      },
    ]
  })
}
</script>