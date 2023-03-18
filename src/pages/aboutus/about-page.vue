<template>
    <v-sheet>
        <about-component></about-component>
    </v-sheet>
</template>

<script>
import AboutComponent from '@/components/aboutUs/aboutComponent.vue';
export default{
    components: {AboutComponent},
    onMounted() {
    this.$vuetify.rtl = true;
    },
}
</script>
