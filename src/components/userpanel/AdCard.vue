<template>
  <v-card
      rounded
      elevation="3"
      class="pa-2 ma-2">
      <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
    <v-card-title class="mb-1 mt-0">
      {{ ad.Title }}
    </v-card-title>
    <v-card-text class="my-1">
      {{ ad.Description }}
    </v-card-text>
    <v-card-actions class="justify-center align-center mt-1 mb-0">
      <v-btn width="80%" text color="#3751FF">
        <v-icon color="#3751FF" class="ml-2" style="bottom: 1px">{{ ImdiInfo }}</v-icon>
        <span>اطلاعات بیشتر</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mdiInformationOutline } from '@mdi/js';
export default {
  props: {
    ad: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      ImdiInfo: mdiInformationOutline
    }
  }
}
</script>

<style scoped>

</style>
