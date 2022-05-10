<template>
  <router-view></router-view>
<!--  <v-app v-if="homepage"-->
<!--         style="background-color: white">-->
<!--    <app-bar />-->
<!--    <search-bar />-->
<!--    <top-carousel />-->
<!--    <category-ads />-->
<!--    <costumers-slide-group />-->
<!--    <register-company />-->
<!--    <homepage-footer />-->
<!--  </v-app>-->
<!--  <login-component v-else-if="login"/>-->
<!--  <signup-component v-else/>-->

</template>

<script>
// import SearchBar from './components/homepage/SearchBar';
// import AppBar from './components/homepage/AppBar.vue';
// import TopCarousel from './components/homepage/TopCarousel.vue';
// import HomepageFooter from "@/components/homepage/HomepageFooter";
// import CostumersSlideGroup from "@/components/homepage/CostumersSlideGroup";
// import RegisterCompany from "@/components/homepage/RegisterCompany";
// import CategoryAds from "@/components/homepage/CategoryAds";
// import LoginComponent from './components/login/LoginComponent.vue';
// import SignupComponent from './components/signup/SignupComponent.vue';

export default {
  name: 'App',
  components: {
    // RegisterCompany,
    // CostumersSlideGroup,
    // AppBar,
    // SearchBar,
    // TopCarousel,
    // HomepageFooter,
    // CategoryAds,
    // LoginComponent,
    // SignupComponent
  },
  data(){
    return{
      login: false,
      homepage: true,
    }
  },
};
</script>