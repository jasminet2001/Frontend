<template>
  <v-app>
    <v-sheet fill-height color="transparent" class="pa-10">
      <v-row class="mb-5" align="center">
        <strong class="mx-16">درخواست های دریافت شده</strong>
      </v-row>
      <!-- <hr class="my-3" /> -->
      <v-row
        class="mx-16"
        justify="center"
        align="center"
        :dense="this.$vuetify.breakpoint.smAndDown"
      >
        <v-col
          v-for="(ad, index) in adList"
          :key="index"
          cols="12"
          md="6"
          lg="4"
          xl="3"
        >
          <CompanyReq :ad="ad" />
        </v-col>
      </v-row>
    </v-sheet>
  </v-app>
</template>

<script>
import CompanyReq from "./CompanyReqCard.vue";

export default {
  components: { CompanyReq },
  data() {
    return {
      recievedReqs: [],
      Title: "",
      Description: "",
      Status:"",
    };
  },
  methods:{
    async recievedReq(){
      var axios = require('axios');
      var config = {
        method: 'get',
        url: this.$store.state.host + 'Request/GetByUser',
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
            that.recievedReqs = response.data;
          }
        )
    }
  },
  created(){
    this.recievedReq();
  }
};
</script>
