<template>
  <v-card>
    <v-toolbar
        color="primary"
        dark
    >Opening from the bottom</v-toolbar>
    <v-card-text>
      <div class="text-h2 pa-12">Hello world!</div>
    </v-card-text>
    <v-card-actions class="justify-end">
      <v-btn
          text
          @click="dialog.value = false"
      >Close</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "requestDialog"
}
</script>

<style scoped>

</style>