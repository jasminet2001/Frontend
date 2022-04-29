<template>

    <v-container class="main-div" fluid>
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
          placeholder="جست و جوی خدمات، خدمات و آگهی ها"
          solo
          rounded
          prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        </v-col>
      </v-row>
            <!-- style="width: 80%; margin: 0 auto" -->
    </v-container>
</template>

<style scoped>
.main-div{
  background-image: url("../assets/top-pic.jpg") !important;
  background-size: cover;
  height: 90vh;
  padding: 10%;
  color: white;
  text-align: center;
}
.title{
  margin-bottom: 2%;
}
.description{
  margin: 6%;
}
</style>
