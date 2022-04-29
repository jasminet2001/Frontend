<template>
  <!-- why doesnt it take up the whole space? -->
  <v-container fluid>
    <v-layout row>
      <v-flex>
        <navbar-menu/>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex
      style="
      background: url('@/assets/top-pic.jpg') no-repeat center fixed !important; 
      background-size: cover;">
      </v-flex>
      <v-flex>
        
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
import navbarMenu from './components/navbar-menu.vue';


export default {
  components: { navbarMenu },
  name: 'App',


  data: () => ({
    image: "@/assets/top-pic.jpg",
  }),
};
</script>

