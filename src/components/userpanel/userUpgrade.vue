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
                    <v-icon class="pa-0 ma-0">mdi-account-arrow-up</v-icon>
                    <p>بارگزاری لوگوی شرکت</p>
                  </v-row>
                  <v-row class="row">
                    <input type="file" @change="onFileSelected">
                    <v-btn
                    color="primary"
                    elevation="2"
                    small
                    @click="onUpload">Upload
                    </v-btn>
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
                    solo
                    outlined
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
                                <v-icon class="pa-0 ma-0">mdi-account-arrow-up</v-icon>
                                <p>بارگزاری لوگوی شرکت</p>
                            </v-row>
                            <v-row class="upload-title-res">
                                <input type="file" @change="onFileSelected">
                                <v-btn class="btn-res"
                                color="black"
                                elevation="2"
                                small
                                @click="onUpload">Upload</v-btn>
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
                              solo
                              outlined
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
    props: {
    categories: {
      type: Array,
      required: true
    },
  },
  data: () => ({
    searchFor: 'both',
    text: '',
    category: '',
  }),
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