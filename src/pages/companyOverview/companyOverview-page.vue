<template>
	<v-sheet>
		<company-overview></company-overview>
	</v-sheet>
</template>

<script>
import CompanyOverview from '@/components/companyOverview/companyOverview.vue';
export default{
    components: {CompanyOverview},
    onMounted() {
    this.$vuetify.rtl = true;
    },
}
</script>

<style scoped>
</style>