<template>
  <v-sheet color="transparent" class="pa-4">
    <div class="pa-4">
      <v-row class="mb-5">
        <!-- <v-img src="@/assets/dashboard.png" class="img pa-2" height="200"></v-img> -->
        <strong style="font-size: 1.5em">دید کلی</strong>
      </v-row>
      <!-- <hr class="my-3"/> -->
      <v-row>
        <v-spacer />
        <v-col v-for="(item, index) in itemList" cols="12" sm="6" md="3" lg="3" xl="2"  :key="index">
          <top-display-row-card :item="item" />
        </v-col>
        <v-spacer />
      </v-row>
    </div>
  </v-sheet>
</template>

<script>
import TopDisplayRowCard from "@/components/userpanel/TopDisplayRowCard";
export default {
  components: {TopDisplayRowCard},
  props: {
    itemList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
