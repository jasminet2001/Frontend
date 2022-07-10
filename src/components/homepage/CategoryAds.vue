<template>
  <div v-if="this.$vuetify.breakpoint.mdAndUp" class="pa-4 ma-4">
    <span class="title-desktop">دسته بندی</span>
    <p class="category-text">خدمات</p>

    <v-row class="justify-center mx-auto">
      <v-col cols="3">
        <img height="100%" width="100%" src="../../assets/adone.jpg"/>
      </v-col >
      <v-col class="mt-16 pt-16" cols="5">
          <!-- container for buttons -->
              <v-row class="align-content-space-around"
                     v-for="(row, key) in items" :key="key"
              >
                <v-col
                    v-for="(cat, key) in row" :key="key"
                >
                  <v-btn
                    class="cat-btn"
                    width="100%"
                    elevation="24"
                    rounded
                    x-large
                    :to="'/search?category='+cat.id"
                  >{{cat.name}}</v-btn>
                </v-col>
              </v-row>
            </v-col>
      <v-col cols="3">
        <img height="100%" width="100%" src="../../assets/adtwo.jpg"/>
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
      items: [],
    }
  },
  methods: {
    fetchData() {
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
            let temp = [];
            for (let i=0; i<Object.keys(response.data.categories).length; i++){
              if (i%3==0){
                if (temp!=[]){
                  that.items.unshift(temp)
                }
                temp=[];
              }
              console.log('temp', temp)
              console.log('items', that.items)
              temp.unshift(response.data.categories[i])
            }
            console.log(that.items)
          })
    },
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

.cat-btn{
  font-size: 3rem;
  height: 7rem !important;
}
@media (min-width: 768px) {
  .button-50 {
    padding: 12px 50px;
  }
}
</style>

