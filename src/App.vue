<template>

  <v-app v-if="homepage"
         style="background-color: white">
    <app-bar />
    <search-bar />
    <top-carousel />
    <category-ads />
    <costumers-slide-group />
    <register-company />
    <homepage-footer />
    <sidebar-navigation />
  </v-app>
  <login-component v-else-if="login"/>
  <signup-component v-else-if="signup"/>
  <v-app v-else-if="userpanel">
    <sidebar-navigation v-if="this.$vuetify.breakpoint.mdAndUp" />
    <user-dashboard />
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
import LoginComponent from './components/login/LoginComponent.vue';
import SignupComponent from './components/signup/SignupComponent.vue';
import UserDashboard from "@/components/userpanel/UserDashboard";
import SidebarNavigation from "@/components/userpanel/SidebarNavigation";

export default {
  name: 'App',
  components: {
    SidebarNavigation,
    UserDashboard,
    RegisterCompany,
    CostumersSlideGroup,
    AppBar,
    SearchBar,
    TopCarousel,
    HomepageFooter,
    CategoryAds,
    LoginComponent,
    SignupComponent
  },
  data(){
    return{
      login: false,
      homepage: false,
      signup: false,
      userpanel: true
    }
  },
};
</script>
