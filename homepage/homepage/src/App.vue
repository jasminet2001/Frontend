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
    <v-row fluid>
      <v-col right><navbar-menu/></v-col>
    </v-row>
    <v-row>
      <v-col><search-bar/></v-col>
    </v-row>
  </v-main>

</template>

<script>
import SearchBar from "@/components/Search-bar";
import NavbarMenu from '@/components/navbar-menu.vue';

export default {
  name: 'App',

  components: {
    SearchBar, 
    NavbarMenu
  },

  data: () => ({
    image: "@/assets/top-pic.jpg",
  }),
};
</script>

