<template>
  <v-app>
    <v-main>
      <signup-component v-if="showSignup" />
      <login-component v-if="showLogin" />
      <ads-list v-if="showAds"/>
    </v-main>
  </v-app>
</template>

<script>
import LoginComponent from "@/components/login/LoginComponent";
import SignupComponent from "@/components/signup/SignupComponent";
import AdsList from "@/components/profile/AdsList";
export default {
  components: {
    AdsList,
    SignupComponent,
    LoginComponent
  },
  data () {
    return {
      showSignup: false,
      showLogin: true,
      showAds: false
    }
  }
}
</script>
<style>
@import "assets/main.css";
</style>
