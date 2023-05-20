<template>
  <v-app>
    <v-sheet fill-height color="transparent" class="pa-10">
      <v-row class="mb-5 mx-16" align="center">
        <strong style="font-size: 1.5em">آگهی های من</strong>
      </v-row>
      <!-- <hr class="my-3"/> -->
      <v-row justify="center" align="center" :dense="this.$vuetify.breakpoint.smAndDown">
        <v-col
            v-for="(ad, index) in starredAds"
            :key="index"
            cols="12"
            md="6"
            lg="4"
            xl="3">
          <ad-card :ad="ad" @togglestar="toggleStarred(index)"/>
        </v-col>
      </v-row>
    </v-sheet>
  </v-app>
</template>

<script>
import AdCard from "@/components/companyPanel/CompanyAdCard.vue";
export default {
  components: {AdCard},
  data () {
    return {
      adList:[],
      pic:"",
      title: "",
      description: "",
      category: "",
    }
  },
  computed: {
    starredAds () {
      return this.adList.filter((x) => x.isStarred)
    }
  },
  methods: {
    toggleStarred(index) {
      this.adList[index].isStarred = !this.adList[index].isStarred
    },
    async showBookmarks() {
      var axios = require('axios');
      var config = {
        method: 'get',
        url: this.$store.state.host + 'user/bookmarks',
        headers: {
          'Authorization': 'Bearer '+ this.$cookies.get('token'),
          'Accept': 'application/json',
        },
      };
      let that = this;
      await axios(config)
          .then(function (response) {
            that.adList = response.data;
          })
    },
  },
  created(){
    this.showBookmarks();
  }
}
</script>

<style scoped>

</style>
