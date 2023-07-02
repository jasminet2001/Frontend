<template>
    <v-sheet>
        <login-component></login-component>
    </v-sheet>
</template>

<script>
import LoginComponent from '@/components/login/LoginComponent.vue';
export default{
    components: {LoginComponent},
    onMounted() {
    this.$vuetify.rtl = true;
    },
}
</script>
