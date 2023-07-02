<template>
    <v-sheet>
        <sidebar-navigation></sidebar-navigation>
        <change-pass :style="{'width': $vuetify.breakpoint.mdAndUp?'95%':'100%'}"></change-pass>
    </v-sheet>
</template>

<script>
import SidebarNavigation from "@/components/userpanel/SidebarNavigation.vue";
import ChangePass from '@/components/userpanel/ChangePass.vue';

export default{
    components: {SidebarNavigation, ChangePass},
    onMounted() {
    this.$vuetify.rtl = true;
    },
}
</script>
