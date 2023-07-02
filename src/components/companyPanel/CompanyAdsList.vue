<template>
  <v-app>
    <v-sheet fill-height color="transparent" class="pa-10">
      <v-row class="mb-5 mx-16" align="center">
        <strong>آگهی های من</strong>
      </v-row>

      <v-row justify="center" align="center" :dense="this.$vuetify.breakpoint.smAndDown">
        <v-col
            v-for="(ad, index) in adList"
            :key="index"
            cols="12"
            md="6"
            lg="4"
            xl="3">
          <CompanyAdCardVue :ad="ad" />
        </v-col>
      </v-row>
    </v-sheet>
  </v-app>
</template>

<script>

import CompanyAdCardVue from "./CompanyAdCard.vue";
export default {
  components: {CompanyAdCardVue},
  data () {
    return {
      adList: [],
      pic:"",
      name: "",
      description: "",
      category: "",
    }
  },
  methods:{
    async showAds(){
      var axios = require('axios');
      var config = {
        method: 'get',
        url: this.$store.state.host + 'ad/show'+this.$cookies.get('user'),
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer '+this.$cookies.get('token'),
        },
      };
      let that = this;
      await axios(config)
        .then(
          function (response) {
            // console.log(response.data);
            that.adList = response.data;
          }
        )
    }
  },
  created(){
    this.showAds();
  }
}
</script>

<style scoped>

</style>
