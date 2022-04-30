<template>
    <v-carousel
    cycle
    hide-delimiter-background
    >
    <!-- change slider's color!! -->
        <v-carousel-item class="ma-16">
            <v-card width="900px" height="310px" 
            color="#000426" class="white--text" rounded
             >

                <v-row class="d-flex ma-8 pa-8">
                    <v-col cols="7" >
                        <v-card-title class="text-wrap">چگونه میتوانیم فروش موفق در چین داشته باشیم؟</v-card-title>
                        <v-card-text class="white--text text-wrap">
                            در این مقاله سعی شده روش های نوین یک تجارت موفق در چین را بررسی کنیم.
                        </v-card-text>
                        <v-card-actions class="mt-16">
                            <v-btn color="#394DB8" class="white--text">
                                دیدن مقاله
                            </v-btn>
                        </v-card-actions>
                    </v-col>

                    <v-col cols="5">
                        <v-img
                        class="white--text"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                        rounded
                        ></v-img>
                    </v-col>
                </v-row>
            </v-card>
        </v-carousel-item>

        <v-carousel-item>

        </v-carousel-item>

        <v-carousel-item>

        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default{
    name: 'carousel-slider',
}

</script>
