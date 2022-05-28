<template>
    <v-app class="grey lighten-4" v-if="this.$vuetify.breakpoint.mdAndUp">
      <v-sheet color="transparent" elevation="0" class="pa-8">
        <SidebarNavigation/>
        <h2 class="mb-5">پروفایل شرکت</h2>
        <v-card
        class="card-desktop"
        style="margin-bottom: 2em;"
        width="70vw"
        height="87%"
        elevation="4"
        raised
        rounded
        outlined
        >
          <v-card-text>
            <v-form class="px-3" v-model="submitForm">
              <v-row class="pa-3">
                <v-col cols="6"
                class="px-8 col">
                  <v-row class="row">
                    <v-file-input
                        label="بارگذاری لوگوی شرکت"
                        outlined
                        prepend-icon="mdi-account-arrow-up"
                        class="mt-4"
                        v-model="selectedFile"
                    ></v-file-input>
                  </v-row>

                  <v-row class="row">
                    <v-text-field
                    label="نام شرکت"
                    v-model="name"
                    outlined>
                    </v-text-field>
                  </v-row>

                  <v-row class="row"><v-text-field label="ایمیل شرکت"
                  v-model="email"
                  outlined></v-text-field></v-row>

                    <v-text-field label="تلفن شرکت"
                    v-model="phone"
                    outlined></v-text-field>
                    
                    <p>دسته بندی شرکت</p>
                    <v-select
                    :items="categories"
                    item-text="name"
                    item-value="id"
                    v-model="category"
                    label="دسته بندی"
                    ></v-select>
                </v-col>

                <v-col cols="6"
                class="px-8 col">
                    <v-text-field label="وبسایت شرکت"
                    v-model="website"
                    outlined></v-text-field>
                    <v-text-field label="آدرس"
                    v-model="address"
                    outlined></v-text-field>

                    <p>درباره شرکت</p>
                    <v-textarea
                    clearable
                    outlined
                    shaped
                    v-model="description"
                    label="درباره شرکت">
                    </v-textarea>
 
                  <!-- save button -->
                  <v-btn
                    class="btn"
                    elevation="4"
                    large
                    outlined
                    raised
                    text
                    style="background-color: #3751FF;
                    color:white;"
                    @click="submit"
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
                    @click="clear()"
                  >لغو</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-sheet>
    </v-app>

    <!-- change the mobile breakpoint -->
    <v-app v-else>
        <SidebarNavigation/>
        <h2 class="title-res">ویرایش پروفایل</h2>
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
                        <v-col cols="12"
                        class="px-8 col">
                            <v-row class="upload-title-res">
                              <v-file-input
                                  label="بارگذاری لوگوی شرکت"
                                  outlined
                                  prepend-icon="mdi-account-arrow-up"
                                  class="mt-4"
                                  v-model="selectedFile"
                              ></v-file-input>
                            </v-row>

                            <v-row class="row-res">
                              <v-text-field
                              label="نام شرکت"
                              v-model="name"
                              outlined>
                              </v-text-field>
                            </v-row>

                            <v-row class="row-res"><v-text-field label="ایمیل شرکت"
                            v-model="email"
                            outlined></v-text-field></v-row>

                            <v-row class="row-res">
                              <v-text-field label="تلفن شرکت"
                              v-model="phone"
                              outlined></v-text-field>
                            </v-row>
                            <v-row class="row-res">
                              <v-select
                              :items="categories"
                              item-text="name"
                              item-value="id"
                              v-model="category"
                              label="دسته بندی"
                              ></v-select>
                            </v-row>
                            <v-row class="row-res">
                              <v-text-field label="وبسایت شرکت"
                              v-model="website"
                              outlined></v-text-field>
                            </v-row>
                            <v-row class="row-res">
                              <v-text-field label="آدرس"
                              v-model="address"
                              outlined></v-text-field>
                            </v-row>

                            <v-row class="row-res">
                              <v-textarea
                              clearable
                              outlined
                              shaped
                              label="درباره شرکت">
                              </v-textarea>
                            </v-row>

                            <!-- save button -->
                            <v-btn
                            class="btn-mobile"
                            elevation="4"
                            large
                            outlined
                            raised
                            text
                         beforeMount() {
    this.categoryFinder();
  },
     style="background-color: #3751FF;
                            color:white;"
                            @click="submit"
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
                            >لغو</v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
        </v-card>
    </v-app>
</template>

<script>
import SidebarNavigation from './SidebarNavigation.vue'
export default {
  components: {
    SidebarNavigation,
  },
  data: () => ({
    selectedFile: '',
    name: '',
    email: '',
    phone: '',
    category: '',
    website: '',
    description: '',
    categories: [],
  }),
  methods:{
    async categoryFinder() {
      var axios = require('axios');
      var FormData = require('form-data');
      var data = new FormData();
      var config = {
        method: 'get',
        url: 'http://localhost:8000/api/categories',
        headers: {
          'Accept': 'application/json',
        },
        data : data
      };
      let that = this;
      await axios(config)
          .then(function (response) {
            that.categories=response.data.categories;
          })
    },
    errorToaster(msg, type='error'){
      this.$toast.open({
        message: msg,
        type: type,
      })
    },
    async submit(){
      var axios = require('axios');
      var FormData = require('form-data');
      var data = new FormData();
      data.append('name', this.name);
      data.append('category_id', this.category);
      data.append('email', this.email);
      data.append('phone', this.email);
      data.append('description', this.description);
      data.append('website', this.website);
      data.append('logo', this.selectedFile);

      var config = {
        method: 'post',
        url: 'http://localhost:8000/api/company/add',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer '+this.$cookies.get('token'),
          'Content-Type': 'multipart/form-data'
        },
        data : data
      };
      let that = this
      await axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            this.errorToaster('پروفایل شما با موفقیت ارتقا یافت','success')
          })
          .catch(function (error) {
            if (error.response.status === 422) {
              for (let err in error.response.data.errors) {
                that.errorToaster(error.response.data.errors[err][0]);
              }
            }
            else {
              that.errorToaster('خطایی ناشناخته رخ داد!')
            }
          });

    }
  },
  beforeMount() {
    this.categoryFinder();
  },
}

</script>

<style scoped>
    .title{
        margin: 2em;
        margin-right: 17em;
    }
    .col *{
        margin: .5em;
    }
    .btn{
        margin-top: 5em;
    }
    .btn-mobile{
        margin-top: 1em;
    }
    .title-res{
        text-align: center;
        margin: 2em;
    }
    .card-res{
        margin: 1em;
        padding: 1em;
        border: 2px dashed #000080;
    }
    .card-desktop{
        border: 2px dashed #000080;
    }
    .row-res{
        text-align: center;
        vertical-align: middle;
    }
    .upload-title-res{
        margin-left: 4em;
    }
</style>