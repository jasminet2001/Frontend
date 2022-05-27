<template>
  <v-container v-if="this.$vuetify.breakpoint.mdAndUp" class="main-div" fluid>
    <v-row class="title">
      <v-col>
        <h1>صنعت یاب</h1>
      </v-col>
    </v-row>
    <v-row class="description">
      <v-col>
        <h2>جست و جوگر پیشرفته صنعت</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
            placeholder="جست و جوی خدمات، شرکت ها و آگهی ها"
            solo
            rounded
            prepend-inner-icon="mdi-magnify"
            @keydown.enter="search"
        ></v-text-field>
      </v-col>
    </v-row>
    <!-- style="width: 80%; margin: 0 auto" -->
  </v-container>

  <v-container v-else class="main-div" fluid>
    <v-row class="title-m">
      <v-col>
        <h1>صنعت یاب</h1>
      </v-col>
    </v-row>
    <v-row class="description">
      <v-col>
        <h2>جست و جوگر پیشرفته صنعت</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
            placeholder="جست و جوی خدمات، شرکت ها و آگهی ها"
            solo
            rounded
            prepend-inner-icon="mdi-magnify"
            @keydown.enter="search"
        ></v-text-field>
      </v-col>
    </v-row>
    <!-- style="width: 80%; margin: 0 auto" -->
  </v-container>

</template>

<script>
export default({
  methods: {
    search(event){
      this.$router.push('search?text=' + event.target.value)
    }
  },
})
</script>

<style scoped>
.main-div{
  background-image: url("../../assets/top-pic.jpg") !important;
  background-size: cover;
  height: 90vh;
  padding: 10%;
  color: white;
  text-align: center;
}
.title{
  margin-bottom: 2%;
}
.title-m{
  margin: 30% 0 2% 0;
}
.search-m{
  margin-top: 30%;
}
.description{
  margin: 6%;
}
</style>
