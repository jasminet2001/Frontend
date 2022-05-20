<template>
    <v-app class="grey lighten-3">
        <SidebarNavigation/>
        <h2 class="title-res-desktop">ویرایش پروفایل</h2>
        <v-card
        class="rounded-lg"
        style="margin-right: 20em; 
        margin-bottom: 4em;"
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
                                <v-text-field 
                                label="عنوان آگهی">
                                </v-text-field>
                            </v-row>
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
    </v-app>
</template>

<script>

export default({
    data(){
        return;
    }
})
</script>
