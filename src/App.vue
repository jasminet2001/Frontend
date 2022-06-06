<template>
  <v-main>
    <router-view></router-view>
  </v-main>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    console.log('this is lorem text from store :')
    console.log(this.$store.state.loremText)
  }
};
</script>

<style>
@import "assets/main.css";
</style>
