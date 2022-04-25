<template>  
<v-app>
    <v-row width="40vw">
        <v-col cols="1"><h2>پروفایل</h2></v-col>
        <v-col cols="1"><v-icon>mdi-chevron-left</v-icon></v-col>
        <v-col cols="2"><h2>ویرایش پروفایل</h2></v-col>
    </v-row>
    <v-card
    style="margin-right: 15em; 
    margin-bottom: 5em;"
    width="70vw"
    height="80%"
    elevation="4"
    raised
    rounded
    outlined
    >
        <v-card-text>
            <v-form class="px-3">
                <v-row class="pa-3">
                    <v-col cols="6"
                    class="py-12 px-8">

                        <v-row>
                            <v-icon>mdi-account-circle</v-icon>
                        </v-row>
                        <!-- for uploading a pic -->
                        <v-row>
                            <p>بارگزاری تصویر پروفایل</p>
                        </v-row>

                        <v-text-field 
                        label="نام و نام خانوادگی">
                        </v-text-field>

                        <v-text-field label="رمز عبور فعلی"></v-text-field>
                        <v-text-field label="رمز عبور جدید"></v-text-field>
                        <v-text-field label="ایمیل"></v-text-field>
                    </v-col>

                    <v-col cols="6"
                    class="px-12"> 
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
                        elevation="4"
                        large
                        outlined
                        raised
                        text
                        style="background-color: #A492FF;
                        color:white;"
                        >
                            ذخیره تغییرات
                        </v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
    </v-card>
</v-app>
</template>

<script>
export default {
    name: 'edit-profile',
    data: () => ({
      gender: ['زن', 'مرد', 'غیره'],
      status: ['کاربر عادی', 'کاربر شرکتی'],
      //for birthdate
      activePicker: null,
      date: null,
      menu: false,
    }),

    //for birthdate
    watch: {
      menu (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      },
    },
}
</script>
