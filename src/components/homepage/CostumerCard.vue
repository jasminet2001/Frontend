<template>
  <v-card
    color="transparent"
    elevation="1"
    rounded
    height="150px"
    width="150px"
    class="ma-4 pa-1"
  >
    <v-card-title class="my-1 pa-1">
      <img :src="item.pic" :alt="item.title" />
    </v-card-title>
    <v-card-text align="center" class="pa-3">
      {{ item.title }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped>
@import '../../assets/styles/homepage/customercard.css';
</style>
