<template>
  <v-hover v-slot="{ hover }">
    <v-card class="rounded-l" elevation="1" align="center" :outlined="hover" :class=" {'blue-text': hover}" shaped
    style="background-image: linear-gradient( 83.2deg,  rgba(150,93,233,1) 10.8%, rgba(99,88,238,1) 94.3% );">
      <v-card-title
          class="justify-center"
          style="color: white"
          :class="{ 'blue-text': hover }">
        {{ item.Title }}
      </v-card-title>
      <v-card-text
          style="font-size: 1.5em !important;color: white;"
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
  color: #C8CAFF !important;
  border-color: #C8CAFF !important;
}
</style>
