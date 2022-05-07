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
              <v-col>
                <v-btn
                    elevation="2"
                    rounded
                >غذایی</v-btn>
              </v-col>

              <v-col>
                <v-btn
                    elevation="2"
                    rounded
                >هاور</v-btn>
              </v-col>
              <v-col>
                <v-btn
                    elevation="2"
                    rounded
                >برودتی</v-btn>
              </v-col>
              <v-col>
                <v-btn
                    elevation="2"
                    rounded
                >پیچ و مهره</v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn
                    elevation="2"
                    rounded
                >غذایی</v-btn>
              </v-col>

              <v-col>
                <v-btn
                    elevation="2"
                    rounded
                >هاور</v-btn>
              </v-col>
              <v-col>
                <v-btn
                    elevation="2"
                    rounded
                >برودتی</v-btn>
              </v-col>
              <v-col>
                <v-btn
                    elevation="2"
                    rounded
                >پیچ و مهره</v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn
                    elevation="2"
                    rounded
                >غذایی</v-btn>
              </v-col>

              <v-col>
                <v-btn
                    elevation="2"
                    rounded
                >هاور</v-btn>
              </v-col>
              <v-col>
                <v-btn
                    elevation="2"
                    rounded
                >برودتی</v-btn>
              </v-col>
              <v-col>
                <v-btn
                    elevation="2"
                    rounded
                >پیچ و مهره</v-btn>
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
    }
  },
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
