<template>
  <v-app class="grey lighten-4" v-if="this.$vuetify.breakpoint.mdAndUp">
    <v-sheet color="transparent" elevation="0" class="pa-8">
      <strong class="mt-4">ویرایش پروفایل</strong>
      <v-card
        class="card-desktop"
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
                <v-row>
                  <v-file-input
                    label="بارگزاری تصویر پروفایل"
                    outlined
                    prepend-icon="mdi-account-arrow-up"
                    class="mt-4"
                    v-model="selectedFile"
                  ></v-file-input>
                </v-row>
                <v-row class="row">
                  <v-text-field
                    name="username"
                    label="نام و نام خانوادگی"
                    v-model="name"
                    outlined
                  >
                  </v-text-field>
                </v-row>

                <v-row class="row"
                  ><v-text-field
                    name="email"
                    label="ایمیل"
                    v-model="email"
                    outlined
                  ></v-text-field
                ></v-row>

                                <!-- save button -->
                                <v-btn
                  class="btn"
                  elevation="4"
                  large
                  outlined
                  raised
                  text
                  style="background-color: #3751ff; color: white"
                  @click="update"
                >
                  ذخیره تغییرات
                </v-btn>
                <!-- clear button -->
                <v-btn
                  class="btn"
                  color="#3751FF"
                  elevation="4"
                  outlined
                  large
                  raised
                  type="reset"
                  >لغو</v-btn>
              </v-col>
              <v-col cols="6" class="px-8 col">
                <v-row>
                  <v-img
                    src="@/assets/profile.png"
                    class="img"
                    height="200px"
                  ></v-img>
                </v-row>
                <v-row>
                  <v-text-field
                    name="phone-number"
                    label="شماره همراه"
                    class="mt-15"
                    v-model="phone"
                    outlined
                  ></v-text-field>
                </v-row>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-sheet>
  </v-app>

  <!-- change the mobile breakpoint -->
  <v-app v-else>
    <strong class="title-res">ویرایش پروفایل</strong>
    <v-card
      class="card-res"
      width="90vw"
      height="85%"
      elevation="4"
      raised
      rounded
      outlined
    >
      <v-card-text>
        <v-form class="px-3">
          <v-row class="d-flex flex-column">
            <v-col cols="12" class="px-8 col">
              <v-file-input
                name="profile-img"
                label="بارگزاری تصویر پروفایل"
                outlined
                prepend-icon="mdi-account-arrow-up"
                class="mt-4"
                v-model="selectedFile"
              ></v-file-input>
              <v-row class="row-res">
                <v-text-field
                  v-model="name"
                  label="نام و نام خانوادگی"
                  outlined
                >
                </v-text-field>
              </v-row>

              <v-row class="row-res"
                ><v-text-field
                  label="ایمیل"
                  v-model="email"
                  outlined
                ></v-text-field
              ></v-row>
              <v-row class="row-res"
                ><v-text-field
                  label="شماره همراه"
                  v-model="phone"
                  outlined
                ></v-text-field
              ></v-row>

              <!-- save button -->
              <v-btn
                class="btn-mobile"
                elevation="4"
                large
                outlined
                raised
                text
                style="background-color: #3751ff; color: white"
                @click="update"
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
                type="reset"
                >لغو</v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "EditProfile",
  data: () => ({
    name: "",
    email: "",
    phone: "",
    selectedFile: null,
  }),

  methods: {
    async update() {
      var axios = require("axios");
      var FormData = require("form-data");
      var data = new FormData();
      if (this.name) data.append("name", this.name);
      if (this.phone) data.append("phone", this.phone);
      if (this.selectedFile) data.append("avatar", this.selectedFile);
      if (this.email) data.append("email", this.email);

      var config = {
        method: "post",
        url: this.$store.state.host + "user/update",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + this.$cookies.get("token"),
          "Content-Type": "multipart/form-data",
        },
        data: data,
      };
      let that = this;
      await axios(config)
        .then(function (response) {
          that.toaster("اطلاعات با موفقیت ویرایش شد", "success");
          that.$cookies.set("user", response.data.user);
        })
        .catch(function (error) {
          if (error.response.status === 422) {
            for (let err in error.response.data.errors) {
              this.toaster(error.response.data.errors[err][0]);
            }
          }
        });
    },
    toaster(msg, type = "error") {
      this.$toast.open({
        message: msg,
        type: type,
      });
    },
  },
  components: {},
};
</script>

<style scoped>
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
  margin-top: 1em;
}
</style>
