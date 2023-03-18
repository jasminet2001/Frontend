<template>
    <v-sheet>
        <signup-component></signup-component>
    </v-sheet>
</template>

<script>
import SignupComponent from '@/components/signup/SignupComponent.vue';
export default{
    components: {SignupComponent},
    onMounted() {
    this.$vuetify.rtl = true;
    },
}
</script>
