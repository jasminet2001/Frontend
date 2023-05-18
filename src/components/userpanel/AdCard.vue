<template>
  <v-card
      rounded
      elevation="3"
      class="pa-2 ma-2 custom-card-bookmarked">
    <v-card-title class="mb-1 mt-0">
      {{ ad.name }}
    </v-card-title>
    <v-card-text class="my-1">
      <span class="card-label-bookmarked">توضیحات: </span>
    </v-card-text>
    <v-card-text class="my-1">
      <span class="description-bookmarked">{{ ad.description.replace(/n/g, '').replace("\\",'')}} </span>
    </v-card-text>
    <v-card-text class="my-1">
      <span class="card-label-bookmarked">شماره تماس: </span>
    </v-card-text>
    <v-card-text class="my-1">
      <span class="description-bookmarked">{{ ad.phone }} </span>
    </v-card-text>
    <v-card-text class="my-1">
      <span class="card-label-bookmarked">ایمیل شرکت: </span>
    </v-card-text>
    <v-card-text class="my-1">
      <span class="description-bookmarked">{{ ad.email }} </span>
    </v-card-text>
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
.custom-card-bookmarked {
  background-color: #112d4f;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-label-bookmarked {
  font-weight: bold;
  color: #fff;
}

.description-bookmarked {
  font-size: 16px;
  color: yellow;
}
</style>
