<template>
  <v-app>
    <v-sheet fill-height color="transparent" class="pa-10">
      <v-row class="mb-5" align="center">
        <strong class="mx-16">آگهی های مرتبط</strong>
      </v-row>
      <!-- justify="center" -->
      <v-row
        class="mx-6"
        align="center"
        :dense="this.$vuetify.breakpoint.smAndDown"
      >
        <v-col
          v-for="(ad, index) in relatedReqs"
          :key="index"
          cols="12"
          md="6"
          lg="4"
          xl="3"
        >
          <company-ad-card :ad="ad" />
        </v-col>
      </v-row>
    </v-sheet>
  </v-app>
</template>

<script>
import CompanyAdCard from "./CompanyAdCard.vue";
export default {
  components: {CompanyAdCard},
  data() {
    return {
      relatedReqs: [],
    };
  },
  methods: {
    async showAds() {
      var axios = require("axios");
      var config = {
        method: "post",
        url: this.$store.state.host + "ad/search",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + this.$cookies.get("token"),
          data: { category: this.$cookies.get("user").category },
        },
      };
      let that = this;
      await axios(config).then(function (response) {
        console.log(response.data);
        that.relatedReqs = response.data;
      });
    },
  },
  async beforeMount(){
    await this.showAds();
  }
};
</script>
