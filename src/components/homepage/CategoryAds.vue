<template>
  <div v-if="isMobile()">
    <p class="title">دسته بندی</p>
    <p class="category-text">خدمات</p>
    <div class="pa-2">
      <v-row>
        <v-col class="mr-6 ml-6">
          <v-combobox
              clearable
              v-model="select"
              :items="items"></v-combobox>
        </v-col>
      </v-row>
    </div>

  </div>

  <div v-else class="pa-4 ma-4">
    <p class="title">دسته بندی</p>
    <p class="category-text">خدمات</p>
    <div class="pa-2">
      <v-row>
        <v-col>
          <img src="../../assets/adone.jpg"/>
        </v-col>
        <v-col class="mr-6 ml-6">
          <!-- container for buttons -->
          <div>
            <v-row>
              <v-col  v-for="(cat, key) in items" :key="key">
                <v-btn
                    elevation="2"
                    rounded
                >{{cat.name}}</v-btn>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col>
          <img src="../../assets/adtwo.jpg"/>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      select: ['دسته بندی'],
      items: [
        'غذایی',
        'برودتی',
        'پیچ و مهره',
        'لبنیات',
      ],
    }
  },
  methods: {
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      }
      else {
        return false
      }
    },
    fetchData() {
      var axios = require('axios');
      var FormData = require('form-data');
      var data = new FormData();
      console.log('hey');
      var config = {
        method: 'get',
        url: 'http://localhost:8000/api/categories',
        headers: {
          'Accept': 'application/json',
        },
        data : data
      };
      var catSaver=data=>this.saver(data);
      axios(config)
          .then(function (response) {
            catSaver(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    saver(data){
      this.items = data.categories;
      console.log(this.items);
    }
  },
  mounted() {
    this.fetchData();
  },
  watch:{
    items: function(){
      console.log(this.items)
    }
  }
};
</script>
<style scoped>
.title{
  border-bottom: 2px solid #000930;
  text-align: center;
  font-size: 4em;
  margin-right: 30em;
  margin-left: 30em;
}
.category-text{
  font-size: 4em;
  text-align: center;
}
</style>
