<template>
  <v-card elevation="4" shaped class="pa-2 ma-2 white--text purple-background">
    <v-card-title class="mb-1 mt-0">
      {{ ad.ad.title }}
    </v-card-title>
    <v-card-text class="my-1">
      <v-row class="mx-4 my-1 white--text">
        <h3>{{ ad.message }}</h3>
      </v-row>
      <v-row class="my-4 mx-2 white--text">
        وضعیت:
        <span v-if="ad.status === 'accepted'">
          پذیرفته شده
          <v-icon class="white--text">mdi-checkbox-marked-circle</v-icon>
        </span>
        <span v-else>
          رد شده
          <v-icon class="white--text">mdi-close-circle</v-icon>
        </span>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiInformationOutline } from "@mdi/js";
export default {
  props: {
    ad: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      ImdiInfo: mdiInformationOutline,
    };
  },
};
</script>
