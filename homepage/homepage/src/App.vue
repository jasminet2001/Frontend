<template>
  <!-- why doesnt it take up the whole space? -->
<!--  <v-container fluid>-->
<!--    <v-layout row>-->
<!--      <v-flex>-->
<!--        <navbar-menu/>-->
<!--      </v-flex>-->
<!--    </v-layout>-->
<!--  </v-container>-->
  <v-main>
    <search-bar />
  </v-main>

</template>

<script>
import SearchBar from "@/components/Search-bar";


export default {
  components: {SearchBar},
  name: 'App',


  data: () => ({
    image: "@/assets/top-pic.jpg",
  }),
};
</script>

