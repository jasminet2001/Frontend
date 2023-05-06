<template>
	<v-card>
		<v-card-title>
			نظرات شما
		</v-card-title>
		<v-list three-line>
			<v-card
					v-for="comment in comments"
					:key="comment.user.name"
					class="mt-5"
			>
				<v-list-item>
					<v-list-item-avatar>
						<v-img :src="comment.user.avatar"></v-img>
					</v-list-item-avatar>
					<v-list-item-content>
						<v-list-item-title v-text="comment.user.name"></v-list-item-title>
						<v-rating
								:empty-icon="ImdiStarOutline"
								:full-icon="ImdiStar"
								:half-icon="ImdiStarHalf"
								background-color="#FFD700"
								color="#FFD700"
								length="5"
								readonly
								size="27"
								value="3"
						></v-rating>
						<v-list-item-subtitle v-text="comment.comment"></v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
			</v-card>
		</v-list>
	</v-card>
</template>

<script>
export default {
	name: "commentComponent",
	props: ['comments']
}
</script>

<style scoped>

</style>