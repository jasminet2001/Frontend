<template>
	<v-app style="background-color: #353B51;">
		<!-- desktop -->
		<v-container v-if="this.$vuetify.breakpoint.mdAndUp" fill-height justify="center" color="transparent">
			<v-row justify="center" align="center">
				<v-col cols="5" style="margin-top:1em">
					<reset-link-card />
				</v-col>

				<v-spacer />

				<v-col cols="6">
					<div>
						<v-row align="center" justify="center">
							<h1 style="color: white;">بازیابی رمز عبور</h1>
						</v-row>

						<v-row align="center" justify="center">
							<v-img src="https://svgshare.com/i/g2T.svg" class="img">
							</v-img>
						</v-row>
					</div>
				</v-col>
			</v-row>

		</v-container>

		<!-- responsive -->
		<v-container v-else class="pa-2" color="transparent" fill-height justify="center">
			<v-card color="transparent" class="text-center" elevation="0" style="margin: 0 auto" width="60vw" min-width="350px">
				<v-card-title style="color: white; font-size: 2em" class="justify-center align-center font-weight-bold mb-3">
					بازیابی رمز عبور
				</v-card-title>
				<hr style="height: 3px; background-color: white; width: 50%; margin: 0 auto"  class="mb-3"/>
				<v-card-text>
					<reset-link-card :is-mobile="true"/>
				</v-card-text>
			</v-card>
		</v-container>
	</v-app>
</template>

<script>

import ResetLinkCard from "@/components/resetPassword/ResetLinkCard";
export default {
	components: {ResetLinkCard},
	name: "ResetLinkComponent"
}
</script>

<style scoped>

</style>