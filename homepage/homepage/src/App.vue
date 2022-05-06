<template>
  <v-app style="background-color: white">
    <AppBar />
    <search-bar />
    <carousel/>
    <category-ads/>
  </v-app>

</template>

<script>
import SearchBar from '@/components/Search-bar';
import AppBar from '@/components/appbar.vue';
import Carousel from './components/carousel.vue';
import CategoryAds from './components/category-ads.vue';

export default {
  name: 'App',

  components: {
    AppBar,
    SearchBar,
    Carousel,
    CategoryAds
  },

  data: () => ({
    image: "@/assets/top-pic.jpg",
  }),
};
</script>

