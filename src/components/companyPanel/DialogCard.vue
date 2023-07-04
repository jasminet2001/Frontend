<template>
  <v-dialog v-model="dialogVisible" max-width="500px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" v-on="on">تعیین وضعیت درخواست</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">تعیین وضعیت درخواست</v-card-title>
      <!-- <v-card-text>
      </v-card-text> -->
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red" @click="reject">رد کردن</v-btn>
        <v-btn color="green" @click="accept">قبول کردن</v-btn>
        <v-btn @click="close">خروج</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    accept() {
      this.$emit("accepted");
      this.dialogVisible = false;
    },
    reject() {
      this.$emit("rejected");
      this.dialogVisible = false;
    },

    async action(input) {
      var axios = require("axios");
      var config = {
        method: "get",
        url:
          input == "accepted"
            ? this.$store.state.host +
              "Request/accepted/" +
              this.$cookies.get("user").id
            : this.$store.state.host +
              "Request/rejected/" +
              this.$cookies.get("user").id,
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + this.$cookies.get("token"),
        },
      };
      let that = this;
      await axios(config).then(function (response) {
        console.log(response.data);
        that.recievedReqs = response.data;
        this.$emit("rejected");
      });
    },
    close() {
      this.dialogVisible = false;
    },
  },
};
</script>
