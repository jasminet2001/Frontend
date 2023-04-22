<template>
<v-card elevation="16" class="main px-8 pb-5">
  <v-card class="img">
    <v-img elevation="16">
      <v-icon size="6rem">mdi-factory</v-icon>
    </v-img>
  </v-card>
  <h1>{{title}} <v-chip>{{category}}</v-chip></h1>
</v-card>
</template>

<script>
export default {
  name: "titleCard",
  props:{
    title:String,
    category: String
  }
}
</script>

<style scoped>
@import '../../assets/styles/adoverview/adover.css';
</style>