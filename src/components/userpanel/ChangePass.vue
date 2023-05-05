<template>
  <!-- desktop -->
  <v-app v-if="this.$vuetify.breakpoint.mdAndUp">
    <v-sheet color="transparent" elevation="0" class="pa-8">
      <strong class="mb-5 mr-5">تغییر رمز عبور</strong>
      <v-card
        class="card-desktop"
        style="margin-bottom: 4em"
        width="70vw"
        height="80%"
        elevation="12"
        raised
        rounded
        outlined
      >
        <v-card-text>
          <v-form class="px-3">
            <v-row class="pa-3">
              <v-col cols="6" class="px-8 col">
                <p>رمز عبور فعلی</p>
                <v-text-field
                  label="رمز عبور فعلی"
                  v-model="password"
                  type="password"
                  outlined
                >
                </v-text-field>

                <p>رمز عبور جدید</p>
                <v-text-field
                  label="رمز عبور جدید"
                  v-model="newPassword"
                  type="password"
                  outlined
                >
                </v-text-field>
                <p>تکرار رمز عبور جدید</p>
                <v-text-field
                  v-model="newPasswordConfirm"
                  type="password"
                  clearable
                  outlined
                  label="تکرار رمز عبور جدید"
                >
                </v-text-field>

                <!-- save button -->
                <v-btn
                  class="btn-mobile"
                  elevation="4"
                  large
                  outlined
                  raised
                  text
                  style="background-color: #3751ff; color: white"
                  @click="change"
                >
                  ذخیره تغییرات
                </v-btn>

                <!-- clear button -->
                <v-btn
                  class="btn-mobile"
                  color="#3751FF"
                  elevation="4"
                  outlined
                  large
                  raised
                  @click="clear"
                  >لغو
                </v-btn>
              </v-col>
              <v-col cols="6">
                <v-img src="@/assets/password.png" class="img"></v-img>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-sheet>
  </v-app>

  <!-- responsive -->
  <v-app v-else>
    <v-sheet class="pa-5" color="transparent" elevation="0">
      <strong class="mb-5">ویرایش رمز عبور</strong>
      <v-card
        class="card-res"
        width="85vw"
        height="90%"
        elevation="4"
        raised
        rounded
        outlined
      >
        <v-card-text>
          <v-form class="px-3">
            <v-row class="d-flex flex-column">
              <v-col cols="12" class="px-8 col">
                <p>رمز عبور فعلی</p>
                <v-text-field
                  label="رمز عبور جدید"
                  v-model="password"
                  type="password"
                  outlined
                >
                </v-text-field>

                <p>رمز عبور جدید</p>
                <v-text-field
                  label="رمز عبور جدید"
                  v-model="newPassword"
                  type="password"
                  outlined
                >
                </v-text-field>
                <p>تکرار رمز عبور</p>
                <v-text-field
                  v-model="newPasswordConfirm"
                  type="password"
                  clearable
                  outlined
                  label="تکرار رمز عبور"
                >
                </v-text-field>

                <!-- save button -->
                <v-btn
                  class="btn-mobile"
                  elevation="4"
                  large
                  outlined
                  raised
                  text
                  style="background-color: #3751ff; color: white"
                  @click="change"
                >
                  ذخیره تغییرات
                </v-btn>

                <!-- clear button -->
                <v-btn
                  class="btn-mobile"
                  color="#3751FF"
                  elevation="4"
                  outlined
                  large
                  raised
                  @click="clear"
                  >لغو
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-sheet>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    password: "",
    newPassword: "",
    newPasswordConfirm: "",
  }),
  methods: {
    errorToaster(msg, type = "error") {
      this.$toast.open({
        message: msg,
        type: type,
      });
    },
    async change() {
      var axios = require("axios");
      var FormData = require("form-data");
      var data = new FormData();
      data.append("password", this.password);
      data.append("new_password", this.newPassword);
      data.append("new_password_confirmation", this.newPasswordConfirm);

      var config = {
        method: "post",
        url: this.$store.state.host + "user/changepass",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + this.$cookies.get("token"),
        },
        data: data,
      };
      let that = this;
      await axios(config)
        .then(function () {
          that.errorToaster("رمز عبور با موفقیت تغییر یافت", "success");
        })
        .catch(function (error) {
          console.log(error);
          if (error.response.status == 422) {
            for (let err in error.response.data.errors) {
              that.errorToaster(error.response.data.errors[err][0]);
            }
          }
          if (error.response.status == 401) {
            that.errorToaster("رمز عبور اشتباه است");
          }
        });
    },
  },
};
</script>

<style scoped>
.img {
  margin-top: 5em;
}
.card-desktop {
  border: 5px dashed var(--sd_primary);
  margin-top: 4em;
  margin-bottom: 2em;
  margin-right: 2em;
}
.card-res {
  margin: 1em;
  padding: 1em;
  border: 2px dashed var(--sd_primary);
}
strong {
  font-size: 1.5em;
}
.btn-mobile {
  margin-top: 1em;
}
.col * {
  margin: 0.5em;
}
.title-res {
  text-align: center;
  margin: 2em;
}
.upload-title-res {
  margin-left: 4em;
}
.row-res {
  width: 100%;
  text-align: center;
  vertical-align: middle;
}
.btn {
  margin-top: 7em;
}
</style>
