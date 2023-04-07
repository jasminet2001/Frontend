<template>
<section class="my-16 py-5">

  <v-card elevation="10" :class="'mb-14 pb-5 pt-16'+(right?'pr-10 pl-3':'pr-3 pl-10')" shaped id="card">
    <v-card class="circle" :style="(right?'right':'left')+': -3.5rem'" elevation="24">
      <v-row class="justify-center">
        <v-icon color="white" size="40" >{{icon}}</v-icon>
      </v-row>
      <v-row class="justify-center">
        <h5>{{title}}</h5>
      </v-row>
    </v-card>
    <p>{{text}}</p>
  </v-card>
</section>
</template>

<script>
export default {
  name: "aboutCard",
  props: {
    title:String ,
    icon: String,
    text:String,
    right:Boolean
  }
}
</script>

<style scoped>
.circle{
  position: absolute;
  /*right: -3.5rem;*/
  top: -3.5rem;
  border-radius: 100% !important;
  background: #3b0bf9;
  color: white;
  height: 7rem;
  width: 7rem;
  padding-top: 2rem;
  font-size: 1.5rem;
}
#card{
  color: white;
  background-image: url("../../assets/about-us.svg");
  background-repeat: repeat;
  background-position: center;
  padding: 4em;
}

</style>
