<template>
<section class="my-16 py-5">

  <v-card elevation="10" :class="'mb-14 pb-5 pt-16 '+(right?'pr-10 pl-3':'pr-3 pl-10')" shaped style="background: #9FA2B4;">
    <v-card class="circle" :style="(right?'right':'left')+': -3.5rem'" elevation="24">
      <v-row class="justify-center">
        <v-icon size="40">{{icon}}</v-icon>
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
  background: #ffeb3b;
  height: 7rem;
  width: 7rem;
  padding-top: 2rem;
  font-size: 1.5rem;

}
</style>