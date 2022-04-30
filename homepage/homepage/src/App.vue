<template>
  <v-app style="background-color: white">
    <AppBar />
    <search-bar />
  </v-app>

</template>

<script>
import SearchBar from '@/components/Search-bar';
import AppBar from '@/components/appbar.vue';

export default {
  name: 'App',

  components: {
    AppBar,
    SearchBar
  },

  data: () => ({
    image: "@/assets/top-pic.jpg",
  }),
};
</script>

