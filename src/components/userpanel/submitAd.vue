<template>
    <v-app v-if="isMobile()">
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
                                <p >بارگزاری تصویر پروفایل</p>
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
                                <v-text-field v-model="name"
                                label="نام و نام خانوادگی"
                                outlined>
                                </v-text-field>
                            </v-row>

                            <v-row class="row-res"><v-text-field label="رمز عبور فعلی"
                            v-model="password1"
                            outlined></v-text-field></v-row>
                            <v-row class="row-res"><v-text-field label="رمز عبور جدید"
                            v-model="password2"
                            outlined></v-text-field></v-row>
                            <v-row class="row-res"><v-text-field label="ایمیل"
                            v-model="email"
                            outlined></v-text-field></v-row>
                            <v-row class="row-res"><v-text-field label="شماره همراه"
                            v-model="phone"
                            outlined></v-text-field></v-row>
                            <v-row class="row-res"><v-text-field label="وبسایت"
                            v-model="website"
                            outlined></v-text-field></v-row>
                            <v-row class="row-res"><v-text-field label="آدرس"
                            v-model="address"
                            outlined></v-text-field></v-row>
                            <v-row class="row-res">
                                <v-select
                                :items="gender"
                                label="جنسیت"
                                solo
                                outlined
                                style="margin-top: 2em;"
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

    <v-app class="grey lighten-4" v-else>
      <v-sheet color="transparent" elevation="0" class="pa-8">
        <SidebarNavigation/>
        <h2 class="mb-5">ویرایش پروفایل</h2>
        <v-card
        class="card-desktop"
        style="margin-bottom: 4em;"
        width="70vw"
        height="80%"
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
                    <p>بارگزاری تصویر پروفایل</p>
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
                    label="نام و نام خانوادگی"
                    v-model="name"
                    outlined>
                    </v-text-field>
                  </v-row>

                  <v-row class="row"><v-text-field label="رمز عبور فعلی"
                  v-model="password1"
                  outlined></v-text-field></v-row>
                  <v-row class="row"><v-text-field label="رمز عبور جدید"
                  v-model="password2"
                  outlined></v-text-field></v-row>
                  <v-row class="row"><v-text-field label="ایمیل"
                  v-model="email"
                  outlined></v-text-field></v-row>
                </v-col>

                <v-col cols="6"
                class="px-8 col">
                  <v-text-field label="شماره همراه"
                  v-model="phone"
                  outlined></v-text-field>
                  <v-text-field label="وبسایت"
                  v-model="website"
                  outlined></v-text-field>
                  <v-text-field label="آدرس"
                  v-model="address"
                  outlined></v-text-field>
                  <v-select
                      :items="gender"
                      label="جنسیت"
                      solo
                      outlined
                  ></v-select>

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

</template>

<script>
import SidebarNavigation from "./SidebarNavigation.vue";
export default({   
    data(){
        return;
    }, 
    components: { SidebarNavigation },
})
</script>
