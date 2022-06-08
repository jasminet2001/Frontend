<template>
  <v-card elevation="16" class="my-5 px-8 py-5" style="width: 100%">
    <h2>توضیحات:</h2>
    <p>{{description}}</p>
  </v-card>
</template>

<script>
export default {
  name: "descriptionCard",
  props:{
    description:String
  }
}
</script>

<style scoped>

</style>