<template>
  <v-hover v-slot="{ hover }">
    <v-card class="rounded-l" elevation="1" align="center" :outlined="hover" :class=" {'blue-text': hover}">
      <v-card-title
          class="justify-center"
          style="color: #9FA2B4"
          :class="{ 'blue-text': hover }">
        {{ item.Title }}
      </v-card-title>
      <v-card-text
          style="font-size: 1.5em !important;"
          :class="{ 'blue-text': hover }">
        {{ item.Info }}
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>
.blue-text{
  color: #3751FF !important;
  border-color: #3751FF !important;
}
</style>
