<template>
    <v-app style="background-color: #f4f4f4">
      <app-bar />
      <search-bar />
      <category-ads />
      <costumers-slide-group />
      <register-company />
      <homepage-footer />
    </v-app>
</template>

<script>
import SearchBar from './SearchBar';
import AppBar from './AppBar.vue';
import HomepageFooter from "./HomepageFooter";
import CostumersSlideGroup from "./CostumersSlideGroup";
import RegisterCompany from "./RegisterCompany";
import CategoryAds from "./CategoryAds";

export default {
  name: "HomepageComponent",
  onMounted() {
    this.$vuetify.rtl = false
  },
  components: {
    RegisterCompany,
    CostumersSlideGroup,
    AppBar,
    SearchBar,
    HomepageFooter,
    CategoryAds,
  },
}
</script>

<style scoped>

</style>