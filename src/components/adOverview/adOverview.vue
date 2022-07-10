<template>
<v-app>
  <app-bar></app-bar>
  <v-row class="my-10">
    <v-col cols="3" class="mr-5 mt-9">
      <contact-info :info="adInfo.sender"/>
      <v-btn :to="'/company/'+adInfo.sender.company.id" color="blue" rounded class="btn">
        <v-icon>mdi-factory</v-icon>
        <span> مشاهده پروفایل شرکت</span>
      </v-btn>
      <v-dialog
          transition="dialog-bottom-transition"
          max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="#ffeb3b" rounded class="btn"
                 v-bind="attrs"
                 v-on="on">
            <v-icon>mdi-note-edit</v-icon>
            <span> ارسال درخواست همکاری</span>
          </v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
                color="#002F50"
                dark
            >ارسال درخواست همکاری</v-toolbar>
            <v-card-text>
              <v-form>
                <v-textarea
                    v-model="message"
                    label="پیام"
                    outlined
                    class="mt-5"
                    rows="10">
                </v-textarea>
              </v-form>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                  text
                  @click="dialog.value = false"
              >انصراف</v-btn>
              <v-btn
                  color="#002F50"
                  style="color: white"
                  @click="()=>{submit(); dialog.value = false}"
              >ارسال</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
    <v-col cols="8">
      <v-row>
        <title-card
            :title="adInfo.title"
            :category="categoryName(adInfo.category_id)"
        ></title-card>
      </v-row>
      <v-row>
        <description-card
            :description="adInfo.description"
        ></description-card>
      </v-row>
    </v-col>
  </v-row>
  <homepage-footer />
</v-app>
</template>

<script>

import appBar from "../homepage/AppBar";
import contactInfo from "./contactInfo";
import titleCard from "./titleCard";
import descriptionCard from "./descriptionCard";
import homepageFooter from "../homepage/HomepageFooter";

export default {
  components: {
    appBar,
    contactInfo,
    titleCard,
    descriptionCard,
    homepageFooter
  },
  name: "adOverview",
  data: ()=>{
    return {
      adInfo:'',
      categories:'',
      message: ''
    }
  },
  methods:{
    async ad(id=this.$route.params.id){
      var axios = require('axios');
      var FormData = require('form-data');
      var data = new FormData();
      data.append('id', id);

      var config = {
        method: 'post',
        url: 'http://localhost:8000/api/ad/search',
        headers: {
          'Accept': 'application/json',
        },
        data : data
      };
      let that = this;
      await axios(config)
          .then(function (response) {
            that.adInfo=response.data
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
        url: 'http://localhost:8000/api/categories',
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
    },
    async submit(){
      if (!this.$cookies.get('user') || !this.$cookies.get('user').role==='company'){
        console.log(this.$cookies.get('user'));
        this.$toast.error('برای انجام این کار باید حساب شرکتی داشته باشید!')
      }
      var axios = require('axios');
      var FormData = require('form-data');
      var data = new FormData();
      data.append('ad_id', this.$route.params.id);
      data.append('company_id', this.$cookies.get('user').company.id);
      data.append('message', this.message);

      var config = {
        method: 'post',
        url: 'http://localhost:8000/api/request/add',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer '+this.$cookies.get('token'),
        },
        data : data
      };
      let that = this;
      axios(config)
          .then(function () {
            that.$toast.success('درخواست با موفقیت ارسال شد!')
          })
          .catch(function () {
            that.$toast.error('مشکلی در ارسال رخ داد! مطمئن شوید با حساب یک شرکت وارد سایت شده اید.')
          });
    }
  },
  async beforeRouteUpdate(to){
    await this.ad(to.params.id)
  },
  async beforeMount() {
    await this.categoryFinder()
    await this.ad()
  }
}
</script>

<style scoped>
.btn{
  width: 100%;
  margin-top: 1rem;
}
</style>