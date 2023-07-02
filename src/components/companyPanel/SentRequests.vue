<template>
  <v-app>
    <v-sheet fill-height color="transparent" class="pa-10">
      <v-row class="mb-5" align="center">
        <strong class="mx-16">درخواست های ارسالی به شرکت ها</strong>
      </v-row>
      <!-- <hr class="my-3"/> -->
      <v-row
        justify="center"
        class="mx-6"
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
          <CompanyAdCardVue :ad="ad" />
        </v-col>
      </v-row>
    </v-sheet>
  </v-app>
</template>

<script>
import CompanyAdCardVue from "./StarredAdCard.vue";
export default {
  components: { CompanyAdCardVue },
  data() {
    return {
      sentReqs: [],
      Title: "",
      Description: "",
      Status:"",
    };
  },
  methods:{
    async sentReq(){
      var axios = require('axios');
      var config = {
        method: 'get',
        url: this.$store.state.host + 'ad/searchByReceiver',
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
            that.sentReqs = response.data;
          }
        )
    }
  },
  created(){
    this.sentReqs();
  }
};
</script>
