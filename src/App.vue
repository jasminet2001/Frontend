<template>
  <v-app style="background-color: white">
    <app-bar />
    <search-bar />
    <top-carousel />
    <category-ads />
    <costumers-slide-group />
    <register-company />
    <homepage-footer />
  </v-app>

</template>

<script>
import SearchBar from './components/homepage/SearchBar';
import AppBar from './components/homepage/AppBar.vue';
import TopCarousel from './components/homepage/TopCarousel.vue';
import HomepageFooter from "@/components/homepage/HomepageFooter";
import CostumersSlideGroup from "@/components/homepage/CostumersSlideGroup";
import RegisterCompany from "@/components/homepage/RegisterCompany";
import CategoryAds from "@/components/homepage/CategoryAds";

export default {
  name: 'App',
  components: {
    RegisterCompany,
    CostumersSlideGroup,
    AppBar,
    SearchBar,
    TopCarousel,
    HomepageFooter,
    CategoryAds
  },
};
</script>
