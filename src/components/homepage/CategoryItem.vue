<template>
	<nuxt-link :style="`background-color: ${category.color}`"  :to="`/ads/category/${category.slug}`" class="utf_category_small_box_part text-decoration-none">
		<img :src="category.icon" alt="" />
		<h4>{{ category.name }}</h4>
		<span>{{ category.businesses_count }}</span>
	</nuxt-link>

</template>

<script>
export default {
	name: "CategoryItem",
	props:{
		category:{
			type: Object,
			required: true
		}
	}
}
</script>

<style scoped>
@import '../../assets/styles/homepage/home.css';
</style>
