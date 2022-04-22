<template>
    <v-app class="pa-4">
        <v-row class="mr-10" no-gutters>
            <h1>داشبورد</h1>
        </v-row>
        <v-row class="mr-10">
            <!-- how to put the username -->
            <h3>خوش آمدید </h3>
        </v-row>
        <v-row no-gutters align="center" justify="center">
            <v-col cols="4" class="pa-6">
                <v-card
                class="deep-purple lighten-1 align-center"
                elevation="2"
                outlined
                shaped
                height="200"
                width="400"
                >
                    <v-card-text class="white--text">آگهی های ثبت شده</v-card-text>
                    <v-divider class="mx-4  deep-purple lighten-3"></v-divider>
                    <!-- a variable should be placed here -->
                    <v-card-text class="white--text">0</v-card-text>
                </v-card>
            </v-col>
            <v-col cols="4" class="pa-6 align-center">
                <v-card
                class="blue lighten-1 "
                elevation="2"
                outlined
                shaped
                height="200"
                width="400" 
                >
                    <v-card-text class="white--text">درخواست ها</v-card-text>
                    <v-divider class="mx-4  blue lighten-3"></v-divider>
                    <!-- a variable should be placed here -->
                    <v-card-text class="white--text">0</v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-btn
            class="ma-2"
            outlined
            color="deep-purple lighten-1"
            width="150"
            >
            ثبت آگهی جدید
            </v-btn>
            <v-btn
            class="ma-2"
            outlined
            color="indigo"
            >
            لیست درخواست های ارسالی
            </v-btn>
        </v-row>
        <v-row class="mr-10">
            <h3>درخواست های شما</h3>
        </v-row>

        <!-- carasoul -->
        <v-row align="center" justify="center">
            <v-slide-group
            v-model="model"
            class="pa-4"
            multiple
            show-arrows
            >
                <v-slide-item
                    v-for="n in 8"
                    :key="n"
                    v-slot="{ active, toggle }"
                >
                    <v-card
                    :color="active ? 'primary' : 'grey lighten-1'"
                    class="ma-4"
                    height="300"
                    width="400"
                    @click="toggle"
                    >
                        <v-img
                        height="80"
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                        ></v-img>
                        <v-card-title>
                            Title
                        </v-card-title>
                        <v-divider class="mx-4"></v-divider>
                        <v-card-text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus nesciunt minima qui quaerat. 
                            Ratione ea placeat dolore reiciendis adipisci, consectetur, cupiditate nisi corporis vel officia voluptatem 
                            earum possimus facere voluptatum?
                        </v-card-text>
                        <v-row
                            class="fill-height"
                            align="center"
                            justify="center"
                        >
                            <v-scale-transition>
                                <v-icon
                                    v-if="active"
                                    color="white"
                                    size="48"
                                    v-text="'mdi-close-circle-outline'"
                                ></v-icon>
                            </v-scale-transition>
                        </v-row>
                    </v-card>
                </v-slide-item>
            </v-slide-group>
        </v-row>
    </v-app>
</template>

<script>
export default {
    name: 'dashboard-item',
}
</script>