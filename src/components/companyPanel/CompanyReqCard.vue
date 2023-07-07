<template>
  <v-card elevation="4" shaped class="pa-2 ma-2 white--text purple-background">
    <v-card-title class="mb-1 mt-0">
      <span>نام شرکت: </span>
      {{ ad.company.name }}
    </v-card-title>
    <v-card-text class="my-1">
      <v-row class="mx-4 my-1 white--text">
        <span>پیام: </span>
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
    <v-card-actions>
      <!-- model -->
      <dialog-card
        v-model="dialogVisible"
        @accepted="handleAccept"
        @rejected="handleReject"
        :reqid = "requestID"
      ></dialog-card>
    </v-card-actions>

    <!-- vue modals -->
    <!-- <v-card-actions class="justify-center align-center mt-1"> -->
    <!-- desktop -->
    <!-- <v-row class="mr-16" v-if="this.$vuetify.breakpoint.mdAndUp">
        <v-col cols="6">
          <v-btn class="btn"
          color="success">
            <v-icon></v-icon>
            <span>پذیرفتن</span>
          </v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn class="btn"
          color="error">
            <v-icon></v-icon>
            <span>رد کردن</span>
          </v-btn>
        </v-col>
      </v-row> -->
    <!-- responsive -->
    <!-- <v-col v-else cols="12" style="margin-right: 4em;">
        <v-row class="">
          <v-col cols="6">
            <v-btn class="btn"
            color="success">
              <v-icon></v-icon>
              <span>پذیرفتن</span>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-btn class="btn"
            color="error">
              <v-icon></v-icon>
              <span>رد کردن</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-col> -->
    <!-- </v-card-actions> -->
    <!-- <v-card-actions class="justify-center align-center mt-1 mb-0">
      <v-btn width="40%" text color="white">
        <v-icon color="white" class="ml-2" style="bottom: 1px">{{ ImdiInfo }}</v-icon>
        <span>اطلاعات بیشتر</span>
      </v-btn>
    </v-card-actions> -->
  </v-card>
</template>

<script>
import DialogCard from "./DialogCard.vue";
export default {
  components: { DialogCard },
  props: {
    ad: {
      type: Object,
      default: null,
    },
    requestID: Number,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    handleAccept() {
      console.log("Accepted");
    },
    handleReject() {
      console.log("Rejected");
    },
  },
 
};
</script>
