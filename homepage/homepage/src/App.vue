<template>
  <!-- why doesnt it take up the whole space? -->
<!--  <v-container fluid>-->
<!--    <v-layout row>-->
<!--      <v-flex>-->
<!--        <navbar-menu/>-->
<!--      </v-flex>-->
<!--    </v-layout>-->
<!--  </v-container>-->
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

