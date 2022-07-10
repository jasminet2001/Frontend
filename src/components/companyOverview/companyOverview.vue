<template>
<v-app>
  <app-bar></app-bar>
  <v-sheet class="py-10 px-15">
    <v-row>
      <header-component
          :company-name="companyInfo.name"
          :company-category="categoryName(companyInfo.category_id)"
      />
    </v-row>
    <v-row>
      <v-col cols="12" md="4" lg="3" xl="3" class="ma-0">
        <summary-side-bar
            :name="companyInfo.name"
            :email="companyInfo.email"
            :owner="companyInfo.user_id.name"
            :phone="companyInfo.phone"
            :website="companyInfo.website"
        />
      </v-col>
      <v-spacer />
      <v-col cols="12" md="8" lg="9" xl="9">
        <description-component class="mb-4"/>
        <comments-component />
      </v-col>
    </v-row>
  </v-sheet>
  <homepage-footer />
</v-app>
</template>

<script>

import appBar from "../homepage/AppBar";
import summarySideBar from "./summarySideBar"
import headerComponent from "./headerComponent"
import descriptionComponent from "./descriptionComponent"
import homepageFooter from "../homepage/HomepageFooter";
import CommentsComponent from "@/components/companyOverview/commentsComponent";

export default {
  components: {
    CommentsComponent,
    appBar,
    summarySideBar,
    headerComponent,
    descriptionComponent,
    homepageFooter
  },
  data () {
    return {
      companyInfo: '',
      categories: '',
      infoForSummary: [

      ]
    }
  },
  methods:{
    async company(id=this.$route.params.id){
      var axios = require('axios');
      var FormData = require('form-data');
      var data = new FormData();
      data.append('id', id);

      var config = {
        method: 'post',
        url: this.$store.state.host + 'company/search',
        headers: {
          'Accept': 'application/json',
        },
        data : data
      };
      let that = this;
      await axios(config)
          .then(function (response) {
            that.companyInfo=response.data
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    categoryFinder(){
      var axios = require('axios');
      var FormData = require('form-data');
      var data = new FormData();
      var config = {
        method: 'get',
        url: this.$store.state.host + 'categories',
        headers: {
          'Accept': 'application/json',
        },
        data : data
      };
      let that = this;
      axios(config)
          .then(function (response) {
            that.categories=response.data.categories;
            that.categories.unshift({id:'',name:'همه'});
          })
    },
    categoryName(id){
      for (let i=0;i<this.categories.length;i++){
        if (this.categories[i].id===id){
          return this.categories[i].name;
        }
      }
    }
  },
  async beforeRouteUpdate(to){
    await this.company(to.params.id)
  },
  async beforeMount() {
    await this.categoryFinder()
    await this.company()
  }
}
</script>

<style scoped>
.btn{
  width: 100%;
  margin-top: 1rem;
}
</style>
