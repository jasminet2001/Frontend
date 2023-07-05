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
        <v-col cols="12">
          <v-row>
            <v-textarea
              clearable
              clear-icon="mdi-close-circle"
              label="پیغام"
              v-model="message"
              model-value="پیعام خود را بنویسید."
            ></v-textarea>
          </v-row>
          <v-spacer></v-spacer>
          <v-row>
            <v-btn color="primary" @click="sendMsg">ارسال پیغام</v-btn>
            <v-btn color="green" @click="action('accepted')">قبول کردن</v-btn>
            <v-btn color="red" @click="action('rejected')">رد کردن</v-btn>
            <v-btn @click="close">خروج</v-btn>
          </v-row>
        </v-col>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: { reqid: Number },
  data() {
    return {
      dialogVisible: false,
      message: "",
    };
  },
  methods: {
    async action(input) {
      console.log(this.reqid);
      var axios = require("axios");
      var config = {
        method: "get",
        url:
          input == "accepted"
            ? this.$store.state.host + "request/accept/" + this.reqid
            : this.$store.state.host + "request/reject/" + this.reqid,
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + this.$cookies.get("token"),
        },
      };
      let that = this;
      await axios(config).then(function (response) {
        console.log(response.data);
        that.recievedReqs = response.data;
        input == "accepted" ? this.$emit("accepted") : this.$emit("rejected");
      });
    },
    close() {
      this.dialogVisible = false;
    },
    async sendMsg() {
      var axios = require("axios");
      var FormData = require("form-data");
      var data = new FormData();
      data.append("description", this.message);
      var config = {
        method: "post",
        url: this.$store.state.host + "request/add",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + this.$cookies.get("token"),
        },
        data: data,
      };
      await axios(config).then(function (response) {
        console.log(response.data);
      });
    },
  },
};
</script>
