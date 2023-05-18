<template>
  <v-hover  v-slot:default="{ hover }">
<v-card v-if="image" class="pt-5 px-5 pb-8 transition-swing"
        :style="`background-image: url(http://localhost:8000/storage/avatars/${image}); background-size:cover; color: white;`"
        :class="`elevation-${hover ? 24 : 0}`"
        :to="`/c/${id}`">
  <v-chip
      class="pa-2"
      color="#ffeb3b"
      text-color="rgb(10, 25, 30)"
      style="font-size: 1em"
  >
    {{category}}
  </v-chip>
  <h2>{{name}}</h2>
  <p>{{description.substr(0,35)+'...'}}</p>
  <v-card class="down pa-1" style="background-color: white; border: 5px solid gold; border-radius: 20px" :class="`elevation-${hover ? 24 : 16}`">
    <v-row justify="space-between" class="pa-3">
      <span><v-icon>mdi-eye</v-icon> {{views}}</span>
      <v-icon>mdi-bookmark</v-icon>
    </v-row>
  </v-card>
</v-card>
<v-card v-else class=" whole pt-5 px-5 pb-8 transition-swing"
        :to="`/c/${id}`"
        :class="`elevation-${hover ? 24 : 0}`">
  <v-chip
      class="pa-2"
      color="#ffeb3b"
      text-color="rgb(10, 25, 30)"
      style="font-size: 1em"
  >
    {{category}}
  </v-chip>
  <h3 style="font-size: 1.3rem">{{name.substr(0,19)}}{{name.length>19?'...':''}}</h3>
  <p style="font-size: 0.8rem">{{description.substr(0,50)+(description.length>50?'...':'')}}</p>
  <v-card class="down pa-1" style="background-color: white; border: 5px solid gold; border-radius: 20px" :class="`elevation-${hover ? 24 : 16}`">
    <v-row justify="space-between" class="pa-3">
      <span><v-icon>mdi-eye</v-icon> {{views}}</span>
      <v-icon>mdi-bookmark</v-icon>
    </v-row>
  </v-card>
</v-card>

  </v-hover>
</template>

<script>
export default {
  name:'searchCard',
  onMounted(){
    this.$vuetify.rtl = false;
  },
  props:[
      'category',
      'name',
      'description',
      'image',
      'id',
      'views'
  ],
}
</script>

<style scoped>
.whole{
  color: white;
  background: rgb(2,0,36);
  background: linear-gradient(141deg, rgba(2,0,36,1) 0%, rgba(54,54,129,1) 34%, rgba(58,58,149,1) 66%, rgba(2,0,36,1) 100%);
}
.down{
  border-color: rgb(57, 77, 184) !important;
  position: absolute;
  bottom: -12%;
  left: 5%;
  width: 90%;
}
</style>