<template>
  <v-app>
    <v-sheet fill-height color="transparent" class="pa-10">
      <v-row class="mb-5" align="center">
        <strong class="mx-16">درخواست های ارسالی به شرکت ها</strong>
      </v-row>
      <v-row
        class="mx-6"
        align="center"
        :dense="this.$vuetify.breakpoint.smAndDown"
      >
        <v-col
          v-for="(ad, index) in sentReqs"
          :key="index"
          cols="12"
          md="6"
          lg="4"
          xl="3"
        >
          <SentCard :ad="ad" />
        </v-col>
      </v-row>
    </v-sheet>
  </v-app>
</template>

<script>
import SentCard from "./SentCard.vue";
export default {
  components: { SentCard },
  data() {
    return {
      sentReqs: [],
    };
  },
  methods: {
    async sentReq() {
      var axios = require("axios");
      var config = {
        method: "get",
        url:
          this.$store.state.host +
          "Request/GetByCompany/" +
          this.$cookies.get("user").company.id,
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + this.$cookies.get("token"),
        },
      };
      let that = this;
      await axios(config).then(function (response) {
        // console.log(response.data);
        that.sentReqs = response.data;
      });
    },
  },
  beforeMount() {
    this.sentReq();
  },
};
</script>
