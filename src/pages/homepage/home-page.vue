<template>
    <v-sheet>
        <homepage-component></homepage-component>
    </v-sheet>
</template>

<script>
import HomepageComponent from '@/components/homepage/HomepageComponent.vue';
export default{
    components: {HomepageComponent},
    onMounted() {
    this.$vuetify.rtl = true;
    },
}
</script>
