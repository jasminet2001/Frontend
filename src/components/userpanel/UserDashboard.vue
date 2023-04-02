<template>
  <v-app>
    <v-sheet>
      <v-sheet color="transparent" class="pa-4">
        <div class="pa-4">
          <v-row class="mb-5">
            <strong style="font-size: 1.5em">دید کلی</strong>
          </v-row>
          <hr class="my-3"/>
          <v-row>
            <v-spacer />
              <v-col cols="12" sm="6" md="4" lg="4" xl="2">
                <top-display-row :item="{ Title: 'بازدید از آگهی های شما', Info: '۶۴'}" />
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="4" xl="2">
                <top-display-row :item="{ Title: 'آگهی های شما', Info: this.adsList.length}" />
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="4" xl="2">
                <top-display-row :item="{ Title: 'کل آگهی ها', Info: '۳۲۵'}" />
              </v-col>
            <v-spacer />
          </v-row>
        </div>
      </v-sheet>
      <ads-container :ads-list="adsList" />
      <v-sheet v-if="this.$vuetify.breakpoint.mdAndUp" class="pa-8">
        <v-row>
          <v-col cols="6">
            <dashboard-checklist />
          </v-col>
          <v-col cols="6">
            <unanswered-tickets />
          </v-col>
        </v-row>
      </v-sheet>
      <div v-else>
        <dashboard-checklist class="mb-3"/>
        <UnansweredTickets />
      </div>
    </v-sheet>
  </v-app>
</template>

<script>
import TopDisplayRow from "@/components/userpanel/TopDisplayRowCard";
import AdsContainer from "@/components/userpanel/AdsContainer";
import DashboardChecklist from "@/components/userpanel/DashboardChecklist";
import UnansweredTickets from "@/components/userpanel/UnansweredTickets";


export default {
  components: { UnansweredTickets, AdsContainer, TopDisplayRow, DashboardChecklist },
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
