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
                                <v-text-field
                                label="نام و نام خانوادگی">
                                </v-text-field>
                            </v-row>

                            <v-row class="row-res"><v-text-field label="رمز عبور فعلی"></v-text-field></v-row>
                            <v-row class="row-res"><v-text-field label="رمز عبور جدید"></v-text-field></v-row>
                            <v-row class="row-res"><v-text-field label="ایمیل"></v-text-field></v-row>
                            <v-row class="row-res"><v-text-field label="شماره همراه"></v-text-field></v-row>
                            <v-row class="row-res"><v-text-field label="وبسایت"></v-text-field></v-row>
                            <v-row class="row-res"><v-text-field label="آدرس"></v-text-field></v-row>
                            <v-row class="row-res">
                                <v-select
                                :items="gender"
                                label="جنسیت"
                                solo
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
            class="rounded-lg"
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
                        @click="onUpload">Upload</v-btn>
                  </v-row>

                  <v-row class="row">
                    <v-text-field
                        label="نام و نام خانوادگی">
                    </v-text-field>
                  </v-row>

                  <v-row class="row"><v-text-field label="رمز عبور فعلی"></v-text-field></v-row>
                  <v-row class="row"><v-text-field label="رمز عبور جدید"></v-text-field></v-row>
                  <v-row class="row"><v-text-field label="ایمیل"></v-text-field></v-row>
                </v-col>

                <v-col cols="6"
                       class="px-8 col">
                  <v-text-field label="شماره همراه"></v-text-field>
                  <v-text-field label="وبسایت"></v-text-field>
                  <v-text-field label="آدرس">  </v-text-field>
                  <v-select
                      :items="gender"
                      label="جنسیت"
                      solo
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
import SidebarNavigation from "./SidebarNavigation.vue"
export default {
    name: "EditProfile",
    data: () => ({
        gender: ["زن", "مرد"],
        status: ["کاربر عادی", "کاربر شرکتی"],
        //for birthdate
        activePicker: null,
        date: null,
        menu: false,
        //name variable to show up on avatar
        //change this and retrieve the name from database
        userName: 'JT',
        selectedFile:null,
    }),
    //for birthdate
    watch: {
        menu(val) {
            val && setTimeout(() => (this.activePicker = "YEAR"));
        },
    },
    methods: {
        isMobile() {
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true
            }
            else {
                return false
            }
        },
        save(date) {
            this.$refs.menu.save(date);
        },
        onFileSelected(event){
            this.selectedFile = event.target.files[0]
        },
        //send HTTP request
        onUpload(){

        },
        submitForm(e){
            // var task = this.newTask
            // this.todoList.push(task)
            // this.newTask = ''
            // To prevent the form from submitting
            e.preventDefault();
        }
    },
    components: { SidebarNavigation }
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
        margin-top: 10em;
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
    }
    .row-res{
        text-align: center;
        vertical-align: middle;
    }
    .upload-title-res{
        margin-left: 4em;
    }
</style>
