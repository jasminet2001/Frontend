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
      <v-row>
        <v-col cols="9">
          <v-btn width="100%" text color="#3751FF">
<!--            <v-icon color="#3751FF" class="ml-2" style="bottom: 1px">{{ ImdiInfo }}</v-icon>-->
            <span>اطلاعات بیشتر</span>
          </v-btn>
        </v-col>
        <v-spacer />
        <v-col cols="3" align="center" justify="center">
          <v-spacer />
          <v-btn fab @click="$emit('togglestar')" small elevation="0" color="transparent" style="bottom: 2px">
            <v-icon v-if="ad.isStarred" color="#3751FF">{{ ImdiStar }}</v-icon>
            <v-icon v-else color="#3751FF">{{ ImdiStarOutline }}</v-icon>
          </v-btn>
          <v-spacer />
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mdiInformationOutline, mdiStarOutline, mdiStar } from '@mdi/js';
export default {
  props: {
    ad: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      ImdiInfo: mdiInformationOutline,
      ImdiStarOutline: mdiStarOutline,
      ImdiStar: mdiStar
    }
  }
}
</script>

<style scoped>
</style>
