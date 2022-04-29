<template>
    <div class="main-div">
        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-text-field
            label="Search"
            solo
            rounded
            style="width: 80%; margin: 0 auto"
          ></v-text-field>
    </div>
</template>

<style scoped>
.main-div{
  background-image: url("../assets/top-pic.jpg") !important;
  background-size: cover;
  height: 626px;
}
</style>
