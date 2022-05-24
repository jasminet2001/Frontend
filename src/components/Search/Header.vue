<template>
  <v-container class="main-div" fluid>
    <section class="py-15 py-sm-0">
      <v-row class="title">
        <v-col>
          <h1>صنعت یاب</h1>
        </v-col>
      </v-row>
      <v-row class="description d-sm-none">
        <v-col>
          <h2>جست و جوگر پیشرفته صنعت</h2>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script>
export default({
  name: 'TopHeader',
  data(){
    return{

    }
  },
})
</script>

<style scoped>
.main-div{
  background-image: url("../../assets/top-pic.jpg") !important;
  background-size: cover;
  background-position: center;
  height: 50vh;
  padding: 10%;
  color: white;
  text-align: center;
}
.title{
  margin-bottom: 2%;
}
.description{
  margin: 0 auto;
}
</style>
