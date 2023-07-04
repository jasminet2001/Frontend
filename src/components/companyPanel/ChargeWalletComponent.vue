<template>
  <v-sheet color="transparent" class="pa-4 mx-16">
    <div class="pa-4">
      <v-row class="mb-5">
        <strong style="font-size: 1.5em">شارژ کیف پول</strong>
      </v-row>
      <v-row>
        <v-spacer />
        <v-col
          v-for="(card, index) in chargeCards"
          :key="index"
          cols="6"
          md="3"
          lg="2"
          xl="2"
        >
          <v-btn
            outlined
            class="rounded-lg pa-2"
            justify="center"
            align="center"
            width="100%"
            @click="addBalance(index)"
          >
            <span>+</span>
            &nbsp;
            <span>{{ card.Amount }}</span>
            &nbsp;
            <span>تومان</span>
          </v-btn>
        </v-col>
        <v-spacer />
      </v-row>
      <v-row>
        <v-spacer />
        <v-col cols="12" md="6" lg="6" xl="5">
          <v-text-field
            v-model="amountToCharge"
            outlined
            label="مقدار شارژ"
            class="rounded-lg"
            align="center"
            hide-details
            single-line
            type="number"
          >
          </v-text-field>
        </v-col>
        <v-spacer />
        <v-col cols="12" md="4" lg="3" xl="3">
          <v-btn
            outlined
            color="#3751FF"
            class="rounded-lg"
            width="100%"
            height="95%"
            min-height="50px"
            style="margin: 0 auto"
            @click="chargeWallet"
          >
            پرداخت
          </v-btn>
        </v-col>
        <v-spacer />
      </v-row>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: "ChargeWalletComponent",
  data() {
    return {
      chargeCards: [
        { Amount: "1,000", Num: 1000 },
        { Amount: "5,000", Num: 5000 },
        { Amount: "10,000", Num: 10000 },
        { Amount: "50,000", Num: 50000 },
        { Amount: "100,000", Num: 100000 },
      ],
      amountToCharge: null,
    };
  },
  methods: {
    addBalance(index) {
      this.amountToCharge = this.chargeCards[index].Num;
    },
    async chargeWallet() {
      var axios = require("axios");
      var FormData = require("form-data");
      var data = new FormData();
      data.append("cash", this.amountToCharge);
      var config = {
        method: "post",
        url: this.$store.state.host + "user/Addcash",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + this.$cookies.get("token"),
        },
        data: data,
      };

      let that = this;
      await axios(config).then(function (response) {
        console.log(response.data.Balance);
        that.$emit("update-wallet", response.data.Balance);
      });
    },
  },
};
</script>

<style scoped></style>
