<template>
	<v-sheet>
		<search-component></search-component>
	</v-sheet>
</template>

<script>
import SearchComponent from '@/components/Search/SearchComponent.vue'
export default {
  components: { SearchComponent },
	name: "search-page"
}
</script>

<style scoped>
</style>