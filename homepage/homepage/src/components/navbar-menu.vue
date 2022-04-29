<template>

        <!-- why is the menu rounded? -->
        <v-card >
            <v-toolbar
            color="#000930"
            dark
            flat
            >
                <v-tabs
                v-model="tab"
                align-with-title
                class="d-flex flex-row"
                >
                    <v-tab>
                        <v-avatar
                        color="primary"
                        size="36"
                        ></v-avatar>
                    </v-tab>
                    <v-tabs-slider color="white"></v-tabs-slider>
                    <v-tab>صفحه اصلی</v-tab>
                    <v-tab>دسته بندی</v-tab>
                    <v-tab>ثبت شرکت</v-tab>
                    <v-tab>تماس با ما</v-tab>
                    <v-spacer></v-spacer>
                    <v-tab>
                        <!-- how to create this btn -->
                        <v-btn
                        rounded
                        outlined
                        color="white"
                        >
                            ورود
                        </v-btn>
                    </v-tab>
                </v-tabs>
            </v-toolbar>
        </v-card>

</template>

<script>
export default({
    name: 'navbar-menu',
    data(){
        return{
            tab:null,
        }
    },
})
</script>
