<template>
  <login-component v-if="isAuthenticated"/>
  <signup-component v-else />
</template>

<script>
import LoginComponent from "@/components/login/LoginComponent";
import SignupComponent from "@/components/signup/SignupComponent";
export default {
  components: {
    SignupComponent,
    LoginComponent
  },
  data () {
    return {
      isAuthenticated: true
    }
  }
}
</script>
<style>
@import "assets/main.css";
</style>
