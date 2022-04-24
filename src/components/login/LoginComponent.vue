<template>
  <v-app style="background-color: #353B51;">
    <v-container v-if="this.$vuetify.breakpoint.mdAndUp" fill-height justify="center" color="transparent">
      <v-row justify="center" align="center">
        <v-col cols="6">
          <login-pic />
        </v-col>

        <v-spacer />

        <v-col cols="5" style="margin-top:4em">
          <login-card />
        </v-col>
      </v-row>

    </v-container>
    <v-container v-else class="pa-2" color="transparent" fill-height justify="center">
      <v-card color="transparent" class="text-center" elevation="0" style="margin: 0 auto" width="60vw" min-width="350px">
        <v-card-title style="color: white; font-size: 2em" class="justify-center align-center font-weight-bold mb-3">
          ورود
        </v-card-title>
        <hr style="height: 3px; background-color: white; width: 50%; margin: 0 auto"  class="mb-3"/>
        <v-card-text>
          <login-card :is-mobile="true"/>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import LoginPic from "@/components/login/LoginPic";
import LoginCard from "@/components/login/LoginCard";

export default {
  components: {
    LoginCard,
    LoginPic
  },
  data () {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: 'رمز عبور',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
      },
    }
  }
}
</script>

<style scoped>

</style>
