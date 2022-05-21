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
            @search="search"
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
              image="https://www.carnila-nuts.com/templates/yootheme/cache/Mihan-company-01bad7ab.png"
          ></ResultCard>
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
          <ResultCard
              v-for="item in [1,2,3,4,5]"
              v-bind:key="item"
              category="لبنیات"
              name="ساخت سردخانه"
              description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
              image="https://iftati.com/wp-content/uploads/2021/03/%DA%A9%D8%A7%D9%84%D9%87.png"
          >{{ item }}</ResultCard>
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
    }
  },
  methods:{
    search(query){
      // this.isLoading=true
      console.log(query)
      this.company(query)
    },
    async company(query){
      var axios = require('axios');
      var FormData = require('form-data');
      var data = new FormData();
      if(query.category)data.append('category', query.category);
      if(query.text)data.append('text', query.text);

      var config = {
        method: 'post',
        url: 'http://localhost:8000/api/company/search',
        headers: {
          'Accept': 'application/json',
        },
        data : data
      };
      let that = this

      await axios(config)
          .then(function (response) {
            that.companies = response.data
            console.log(that.companies)
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
    }
  },
  beforeMount(){
    this.categoryFinder();
  }
}
</script>

<style scoped>

</style>