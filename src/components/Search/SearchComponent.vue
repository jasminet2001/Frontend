<template>
  <v-app>
    <app-bar></app-bar>
    <top-header></top-header>
    <v-row class="mx-auto mb-15" style="width: 90%">
      <v-col md="4" sm="12" xs="12" class="pt-15">
        <filter-card
            class="py-10 px-5"
            style="position: sticky; top: 20%; z-index: 1;"
            :categories="categories"
            @search="(query)=>{this.query=query; searchBtn(this.query); }"
            @searchType="sectioner"
        >
        </filter-card>
      </v-col>
      <v-col class="ma-auto" md="8" sm="11" xs="12" >
        <section v-if="type==='company'|| type==='both'">
          <v-overlay :value="isLoading">
            <v-progress-circular
                indeterminate
                size="94"
                color="indigo darken-2"
                width="12"
            ></v-progress-circular>
          </v-overlay>
          <h3 class="mt-13">شرکت ها</h3>
          <v-divider class="mb-10"></v-divider>
          <div v-if="companies.length > 0">
          <ResultCard
              v-for="c in companies"
              v-bind:key="c.id"
              :category="categoryName(c.category_id)"
              :name="c.name"
              :description="c.description"
              :image="c.logo"
          ></ResultCard>
            <div class="text-center">
              <v-pagination
                  v-model="companyPage"
                  @input="search"
                  :length="companyLength"
                  total-visible="8"
              ></v-pagination>
            </div>
          </div>
          <div v-else>
            <v-alert
                type="info"
                :value="true"
                class="ma-0 text-h5"
            >
              نتیجه ای یافت نشد
            </v-alert>
          </div>
        </section>
        <section v-if="type==='both'|| type==='ad'">
          <h3 class="mt-13">آگهی ها</h3>
          <v-divider class="mb-10"></v-divider>
          <div v-if="ads.length > 0">
            <ResultCard
                v-for="a in ads"
                v-bind:key="a.id"
                :category="categoryName(a.category_id)"
                :name="a.title"
                :description="a.description"
                :image="a.sender.isCompany?a.sender.company.logo:a.sender.avatar"
            ></ResultCard>
            <div class="text-center">
              <v-pagination
                  v-model="adPage"
                  @input="search"
                  :length="adLength"
                  total-visible="8"
              ></v-pagination>
            </div>
          </div>
          <div v-else>
            <v-alert
                type="info"
                :value="true"
                class="ma-0 text-h5"
            >
              نتیجه ای یافت نشد
            </v-alert>
          </div>
        </section>
      </v-col>
    </v-row>
    <homepage-footer></homepage-footer>
  </v-app>

</template>

<script>
import AppBar from "../homepage/AppBar";
import HomepageFooter from "../homepage/HomepageFooter";
import ResultCard from "./ResultCard";
import FilterCard from "./FilterCard";
import TopHeader from "./Header";

export default {
  name: "SearchComponent",
  components: {
    AppBar,
    HomepageFooter,
    ResultCard,
    FilterCard,
    TopHeader
  },
  data(){
    return{
      type:'both',
      categories:'',
      isLoading: '',
      companies: '',
      ads: '',
      companyPage: 1,
      adPage: 1,
      companyLength: '',
      adLength: '',
      query: '',
    }
  },
  methods:{
    search() {
      console.log('hey');
      this.isLoading=true
      if (this.type=='company' || this.type=='both')
        this.company(this.query, this.companyPage)
      if (this.type=='ad' || this.type=='both')
        this.ad(this.query, this.adPage)
    },
    async company(query, page=1) {
      var axios = require('axios');
      var FormData = require('form-data');
      var data = new FormData();
      if(query.category)data.append('category', query.category);
      if(query.text)data.append('text', query.text);

      var config = {
        method: 'post',
        url: 'http://localhost:8000/api/company/search?page='+page,
        headers: {
          'Accept': 'application/json',
        },
        data : data
      };
      let that = this

      await axios(config)
          .then(function (response) {
            that.companies = response.data.data
            that.companyLength = response.data.last_page
            that.isLoading=false
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    sectioner(type){
      this.type = type;
    },
    async categoryFinder(){
      var axios = require('axios');
      var FormData = require('form-data');
      var data = new FormData();
      var config = {
        method: 'get',
        url: 'http://localhost:8000/api/categories',
        headers: {
          'Accept': 'application/json',
        },
        data : data
      };
      let that= this;
      await axios(config)
          .then(function (response) {
            that.categories=(response.data.categories);
            let temp ={
              id:'',
              name:'همه'
            }
            that.categories.unshift(temp)
          })
    },
    categoryName(id){
      for(var i=0;i<this.categories.length;i++){
        if(this.categories[i].id==id)return this.categories[i].name
      }
    },
    async ad(query, page=1) {
      var axios = require('axios');
      var FormData = require('form-data');
      var data = new FormData();
      if(query.category)data.append('category', query.category);
      if(query.text)data.append('text', query.text);
      var config = {
        method: 'post',
        url: 'http://localhost:8000/api/ad/search?page='+page,
        headers: {
          'Accept': 'application/json',
        },
        data : data
      };
      let that = this
      await axios(config)
          .then(function (response) {
            that.ads = response.data.data
            that.adLength = response.data.last_page
            that.isLoading=false
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    searchBtn() {
      this.companyPage = 1;
      this.adPage = 1;
      this.search();
    }
  },
  async mounted(){
    await this.categoryFinder();
    let query = {text: this.$route.query.text, category: this.$route.query.category}
    this.search(query)
  },
}
</script>

<style scoped>

</style>