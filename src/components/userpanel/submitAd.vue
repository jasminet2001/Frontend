<template>
  <!-- desktop -->
  <v-app v-if="this.$vuetify.breakpoint.mdAndUp">
    <v-sheet color="transparent" elevation="0" class="pa-8">
      <strong class="mb-5 mr-5">ثبت آگهی</strong>
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
          <v-form class="px-3" v-model="submitForm">
            <v-row class="pa-3">
              <v-col cols="6" class="px-8 col">
                <p>عنوان آگهی</p>
                <v-text-field label="عنوان آگهی" v-model="name" outlined>
                </v-text-field>
                <p>توضیحات آگهی</p>
                <v-textarea
                  v-model="description"
                  clearable
                  outlined
                  shaped
                  label="توضیحات آگهی"
                >
                </v-textarea>

                <!-- save button -->
                <v-btn
                  class="btn"
                  elevation="4"
                  large
                  outlined
                  raised
                  text
                  style="background-color: #3751ff; color: white"
                  @click="adAdder"
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
                  @click="clear"
                  >لغو
                </v-btn>
              </v-col>
              <v-col cols="6" class="px-8 col">
                <p>دسته بندی</p>
                <v-select
                  outlined
                  :items="categories"
                  item-text="name"
                  item-value="id"
                  v-model="category"
                  label="دسته بندی"
                ></v-select>

                <v-img src="@/assets/submitAd.png" class="img"></v-img>
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
      <strong class="mb-5">ثبت آگهی</strong>
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
                <v-row class="row">
                  <p>عنوان آگهی</p>
                  <v-text-field label="عنوان آگهی" v-model="name" outlined>
                  </v-text-field>
                </v-row>

                <v-row class="row">
                  <p>توضیحات آگهی</p>
                  <v-textarea
                    v-model="description"
                    clearable
                    outlined
                    shaped
                    label="توضیحات آگهی"
                  >
                  </v-textarea>
                </v-row>

                <v-row class="row">
                  <p>دسته بندی</p>
                  <v-select
                    outlined
                    :items="categories"
                    item-text="name"
                    item-value="id"
                    v-model="category"
                    label="دسته بندی"
                  ></v-select>
                </v-row>

                <!-- save button -->
                <v-btn
                  class="btn-mobile"
                  elevation="4"
                  large
                  outlined
                  raised
                  text
                  style="background-color: #3751ff; color: white"
                  @click="adAdder"
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
    categories: [],
    name: "",
    description: "",
    category: "",
  }),
  methods: {
    errorToaster(msg) {
      this.$toast.open({
        message: msg,
        type: "error",
      });
    },
    successToaster(msg) {
      this.$toast.open({
        message: msg,
        type: "success",
      });
    },
    async categoryFinder() {
      var axios = require("axios");
      var FormData = require("form-data");
      var data = new FormData();
      var config = {
        method: "get",
        url: this.$store.state.host + "categories",
        headers: {
          Accept: "application/json",
        },
        data: data,
      };
      let that = this;
      await axios(config).then(function (response) {
        that.categories = response.data.categories;
      });
    },
    async adAdder() {
      var axios = require("axios");
      var FormData = require("form-data");
      var data = new FormData();
      data.append("title", this.name);
      data.append("category_id", this.category);
      data.append(
        "isCompany",
        this.$cookies.get("user").role === "company" ? 1 : 0
      );
      data.append("description", this.description);

      var config = {
        method: "post",
        url: this.$store.state.host + "ad/makeAd",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + this.$cookies.get("token"),
        },
        data: data,
      };
      let that = this;
      await axios(config)
        .then(function () {
          that.successToaster("آگهی شما با موفقیت ثبت شد.");
        })
        .catch(function (error) {
          if (error.response.status === 422) {
            for (let err in error.response.data.errors) {
              that.errorToaster(error.response.data.errors[err][0]);
            }
          }
        });
    },
  },
  beforeMount() {
    this.categoryFinder();
  },
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
  margin-top: 3em;
}
.img {
  margin-top: 2em;
}
</style>
