<template>
  <v-app>
    <app-bar></app-bar>
    <top-header></top-header>
    <v-row class="mx-auto mb-15" style="width: 90%">
      <v-col cols="12" md="4" class="pt-15">
        <filter-card
            class="py-10 px-5"
            style="position: sticky; top: 20%; z-index: 1;"
            :categories="categories"
            @search="(x)=> {this.query=x; this.companyPage=1; search(x)}"
        >
        </filter-card>
      </v-col>
      <v-col class="ma-auto" md="8" sm="11" xs="12" >
        <section>
          <v-overlay :value="isLoading">
            <v-progress-circular
                indeterminate
                size="94"
                color="indigo darken-2"
                width="12"
            ></v-progress-circular>
          </v-overlay>
          <h3 class="mt-12">شرکت ها</h3>
          <v-divider class="mb-10"></v-divider>
          <div v-if="result.length > 0">
            <v-row class="pb-5">
              <v-col cols="12" sm="6" md="4" lg="3" class="my-3"
                v-for="(item,index) in result"
                :key="index"
              >
                <search-card
                  :category="categoryName(item.category_id)"
                  :name="item.name"
                  :description="item.description"
                  :id="item.id"
                  :views="item.ViewCount"
              ></search-card>
              </v-col>
            </v-row>
            <div class="text-center">
              <v-pagination
                  v-model="companyPage"
                  @input="search(query)"
                  :length="resultLength">
              </v-pagination>
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
import FilterCard from "./FilterCard";
import TopHeader from "./Header";
import searchCard from "./card";

export default {
  name: "SearchComponent",
  components: {
    searchCard,
    AppBar,
    HomepageFooter,
    FilterCard,
    TopHeader
  },
  data(){
    return{
      type: '',
      categories:'',
      isLoading: '',
      result: '',
      resultLength: '',
      companyPage: 1,
      query: '',
    }
  },
  methods: {
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
    search(data){
      this.isLoading = true;
      this.query=data;
			this.company(this.companyPage);
			this.isLoading = false;
    },
    async company(page){
      var axios = require('axios');
      var FormData = require('form-data');
      var data = new FormData();
      if (this.query.c)data.append('category', this.query.c);
      if (this.query.q)data.append('text', this.query.q);

      var config = {
        method: 'post',
        url: this.$store.state.host + 'company/search?page='+page,
        headers: {
          'Accept': 'application/json',
        },
        data : data
      };
      let that = this;
      await axios(config)
          .then(function (response) {
            that.result = response.data.data;
            that.resultLength = response.data.last_page;
            that.isLoading = false;
          })
          .catch(function (error) {
            console.log(error);
						that.isLoading = false;
          });
    },
    categoryName(id){
      for (let i=0;i<this.categories.length;i++){
        if (this.categories[i].id===id){
          return this.categories[i].name;
        }
      }
    }
  },
  beforeMount() {
    this.categoryFinder();
    this.search(this.$route.query);
  },
  watch: {
    type(){
      this.companyPage=1;
      this.search(this.query);
    }
  }
}
</script>

<style scoped>

</style>
