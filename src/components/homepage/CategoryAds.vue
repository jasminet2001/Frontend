<template>
  <div v-if="this.$vuetify.breakpoint.mdAndUp" class="pa-4 ma-4">
    <span class="title-desktop">دسته بندی</span>
    <p class="category-text">خدمات</p>

    <v-row align-content="center">
      <v-col cols="3">
        <img height="100%" src="../../assets/adone.jpg"/>
      </v-col >
        <v-col class="mr-6 ml-6" cols="5">
          <!-- container for buttons -->
          <div>
            <v-row class="flex-wrap">
            <v-col
              cols="3"
              class="my-4"
              v-for="(cat, key) in items" :key="key"
            >
              <v-btn
              width="100%"
              elevation="24"
              rounded
              x-large
              :to="'/search?category='+cat.id"
              style="background-image: linear-gradient( 135deg, #97ABFF 10%, #123597 100%);"
              >{{cat.name}}</v-btn>
            </v-col>
            <v-col
              cols="3"
              class="my-4"
              v-for="(cat, key) in items" :key="key"
            >
              <v-btn
              elevation="24"
              rounded
              x-large
              :to="'/search?category='+cat.id"
              style="background-image: linear-gradient( 135deg, #97ABFF 10%, #123597 100%);"
              >{{cat.name}}</v-btn>
            </v-col>
            <v-col
              cols="3"
              class="my-4"
              v-for="(cat, key) in items" :key="key"
            >
              <v-btn
              elevation="24"
              rounded
              x-large
              :to="'/search?category='+cat.id"
              style="background-image: linear-gradient( 135deg, #97ABFF 10%, #123597 100%);"
              >{{cat.name}}</v-btn>
            </v-col>
            <v-col
              cols="3"
              class="my-4"
              v-for="(cat, key) in items" :key="key"
            >
              <v-btn
              elevation="24"
              rounded
              x-large
              :to="'/search?category='+cat.id"
              style="background-image: linear-gradient( 135deg, #97ABFF 10%, #123597 100%);"
              >{{cat.name}}</v-btn>
            </v-col>
            </v-row>
          </div>
        </v-col>
      <v-col cols="3">
        <img height="100%" src="../../assets/adtwo.jpg"/>
      </v-col>
    </v-row>

  </div>

  <div v-else>
    <span class="title-res">دسته بندی</span>
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
    fetchData() {
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
      var catSaver=data=>this.saver(data);
      axios(config)
          .then(function (response) {
            catSaver(response.data);
          })
    },
    saver(data){
      this.items = data.categories;
    }
  },
  mounted() {
    this.fetchData();
  },
};
</script>
<style scoped>
.title-desktop{
  border-bottom: 4px solid #000930;
  text-align: center;
  font-size: 1.5em;
  display: table;
  margin: 0 auto;
}
.title-res{
  border-bottom: 4px solid #000930;
  text-align: center;
  font-size: 1.5em;
  display: table;
  margin: 0 auto;
  margin-top: 1em;
}
.category-text{
  font-size: 2em;
  text-align: center;
  margin: 1em;
}

/* CSS */
.button-50 {
  height: 50px;
  appearance: button;
  background-color: #000;
  background-image: none;
  border: 1px solid #000;
  border-radius: 4px;
  box-shadow: #fff 4px 4px 0 0,#000 4px 4px 0 1px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: ITCAvantGardeStd-Bk,Arial,sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0 5px 10px 0;
  overflow: visible;
  padding: 12px 40px;
  text-align: center;
  text-transform: none;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}

.button-50:focus {
  text-decoration: none;
}

.button-50:hover {
  text-decoration: none;
}

.button-50:active {
  box-shadow: rgba(0, 0, 0, .125) 0 3px 5px inset;
  outline: 0;
}

.button-50:not([disabled]):active {
  box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  .button-50 {
    padding: 12px 50px;
  }
}
</style>

