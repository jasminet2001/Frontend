<template>
  <v-app>
    <v-sheet>
      <v-sheet color="transparent" class="pa-4">
        <div class="pa-4">
          <v-row class="mb-5">
            <strong class="mx-16">دید کلی</strong>
          </v-row>

          <v-row class="mx-16">
            <v-spacer />
              <v-col cols="12" sm="6" md="3" lg="3" xl="2">
                <TopDisplayRowCardVue :item="{ Title: 'بازدید از آگهی های شما', Info: '۶۴'}" />
              </v-col>
              <v-col cols="12" sm="6" md="3" lg="3" xl="2">
                <TopDisplayRowCardVue :item="{ Title: 'آگهی های شما', Info: this.adsList.length}" />
              </v-col>
              <v-col cols="12" sm="6" md="3" lg="3" xl="2">
                <TopDisplayRowCardVue :item="{ Title: 'آگهی های مرتبط', Info: '4'}" />
              </v-col>
              <v-col cols="12" sm="6" md="3" lg="3" xl="2">
                <TopDisplayRowCardVue :item="{ Title: 'کل آگهی ها', Info: '۳۲۵'}" />
              </v-col>
            <v-spacer />
          </v-row>
        </div>
      </v-sheet>
      <AdsContainerVue :ads-list="adsList" class="mx-16"/>
      <v-sheet v-if="this.$vuetify.breakpoint.mdAndUp" class="pa-8 mx-16">
        <v-row>
          <v-col class="v-col" cols="6">
            <DashboardChecklistVue />
          </v-col>
          <v-col class="v-col" cols="6">
            <UnansweredTicketsVue />
          </v-col>
        </v-row>
      </v-sheet>
      <div v-else>
        <DashboardChecklistVue class="mb-3"/>
        <UnansweredTicketsVue />
      </div>
    </v-sheet>
  </v-app>
</template>

<script>
import TopDisplayRowCardVue from "./TopDisplayRowCard.vue";
import AdsContainerVue from "./AdsContainer.vue";
import DashboardChecklistVue from "./DashboardChecklist.vue";
import UnansweredTicketsVue from "./UnansweredTickets.vue";

export default {
  components: {
    UnansweredTicketsVue, AdsContainerVue, TopDisplayRowCardVue,
    DashboardChecklistVue
  },
  onMounted() {
    this.$vuetify.rtl = true;
  },
  data () {
    return {
      adsList: [
      ],
    }
  },
  methods: {
    async adFinder(){
      var axios = require('axios');
      var FormData = require('form-data');
      var data = new FormData();
      data.append('sender', this.$cookies.get('user').id);

      var config = {
        method: 'post',
        url: this.$store.state.host + 'ad/search',
        headers: {
          'Accept': 'application/json',
        },
        data : data
      };
      let that = this;
      axios(config)
          .then(function (response) {
            that.adsList=(response.data.data)
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  },
  beforeMount() {
    this.adFinder()
  }
}
</script>

<style scoped>

</style>
