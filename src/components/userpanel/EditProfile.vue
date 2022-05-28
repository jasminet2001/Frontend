<template>
    <v-app class="grey lighten-4" v-if="this.$vuetify.breakpoint.mdAndUp">
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
                      <UploadPhoto></UploadPhoto>
                  </v-row>

                  <v-row class="row">
                    <v-text-field
                    label="نام و نام خانوادگی"
                    v-model="name"
                    outlined>
                    </v-text-field>
                  </v-row>

                    <v-row class="row"><v-text-field label="ایمیل"
                    v-model="email"
                    outlined></v-text-field></v-row>

                    <v-text-field label="شماره همراه"
                    v-model="phone"
                    outlined></v-text-field>
                </v-col>

                <v-col cols="6"
                class="px-8 col">
                    <v-img src="@/assets/profile.png" class="img" height="150"></v-img>
                    
                    <v-text-field label="وبسایت"
                    v-model="website"
                    outlined
                    class="mt-16"></v-text-field>

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
                                <p >بارگزاری تصویر پروفایل</p>
                            </v-row>
                            <v-row class="upload-title-res">
                                <UploadPhoto></UploadPhoto>
                            </v-row>

                            <v-row class="row-res">
                                <v-text-field v-model="name"
                                label="نام و نام خانوادگی"
                                outlined>
                                </v-text-field>
                            </v-row>

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
</template>

<script>
import SidebarNavigation from "./SidebarNavigation.vue"
import UploadPhoto from "./uploadPhoto.vue";
export default {
    name: "EditProfile",
    data: () => ({
        name: '',
        email: '',
        password1:'',
        password2:'',
        website:'',
        address:'',
        phone: '',
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
        save(date) {
            this.$refs.menu.save(date);
        },
        onFileSelected(event){
            this.selectedFile = event.target.files[0]
        },
        //send HTTP request
        onUpload(){

        },
        submit () {
            this.$v.$touch()
        },
        //why doesn't it work??
        clear () {
            this.$v.$reset()
            this.name = ''
            this.email = ''
            this.select = null
            this.checkbox = false
            this.website = ''
            this.phone = ''
            this.password1 = ''
            this.password2 = ''
            this.address = ''
            this.gender = null
        },
    },
    components: { SidebarNavigation, UploadPhoto }
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
        margin-top: 1em;
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
