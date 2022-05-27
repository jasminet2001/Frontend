<template>
  <!-- desktop -->
  <v-app style="background-color: #353B51;">
    <v-container v-if="this.$vuetify.breakpoint.mdAndUp" fill-height justify="center" color="transparent">
      <v-row justify="center" align="center">
        <v-col cols="5" style="margin-top:1em">
          <signup-card />
        </v-col>

        <v-spacer/>

        <v-col cols="6">
          <signup-pic />
        </v-col>
      </v-row>
    </v-container>

    <!-- responsive -->
    <v-container v-else class="pa-2" color="transparent" fill-height justify="center">
      <v-card color="transparent" class="text-center" elevation="0" style="margin: 0 auto" width="60vw" min-width="350px">
        <v-card-title style="color: white; font-size: 2em" class="justify-center align-center font-weight-bold mb-3">
          ثبت نام
        </v-card-title>
        <hr style="height: 3px; background-color: white; width: 50%; margin: 0 auto"  class="mb-3"/>
        <v-card-text>
          <signup-card :is-mobile="true"/>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import SignupPic from "@/components/signup/SignupPic";
import SignupCard from "@/components/signup/SignupCard";
export default {
  components: {
    SignupCard,
    SignupPic
  },
  data () {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: '',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
      },
    }
  },
}
</script>

<style scoped>
v-app{
  background-color: #000824c8;
}
</style>
