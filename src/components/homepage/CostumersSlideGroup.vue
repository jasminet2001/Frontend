<template>
  <v-sheet
    class="pa-4" style="background: #f4f4f4">
    <v-row class="mt-2 mb-5">
      <v-spacer/>
      <span style="font-size: 1.5em">
        برخی از شرکت های ثبت شده
      </span>
      <v-spacer />
    </v-row>
    <hr class="mb-5" style="background-color: black !important; width: 30%; margin: 0 auto; height: 3px; border: none"/>

    <v-slide-group
    v-model="costumerSlider"
    class="pa-4"
    multiple
    :show-arrows="this.$vuetify.breakpoint.mdAndUp">
      <v-slide-item
					style="background: white !important;"
      v-for="(item, index) in costumersList"
      :key="index"
      >
        <costumer-card :item="item"/>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>

</template>

<script>
import CostumerCard from "@/components/homepage/CostumerCard";
export default {
  components: {CostumerCard},
  data () {
    return {
      costumersList: [
        { pic: "https://www.finds.ir/photos/finds-ir-2020041333105034.jpg", title: 'شرکت کاله' },
        { pic: "https://www.finds.ir/photos/finds-ir-2020041333105034.jpg", title: 'شرکت کاله' },
        { pic: "https://www.finds.ir/photos/finds-ir-2020041333105034.jpg", title: 'شرکت کاله' },
        { pic: "https://www.finds.ir/photos/finds-ir-2020041333105034.jpg", title: 'شرکت کاله' },
        { pic: "https://www.finds.ir/photos/finds-ir-2020041333105034.jpg", title: 'شرکت کاله' },
        { pic: "https://www.finds.ir/photos/finds-ir-2020041333105034.jpg", title: 'شرکت کاله' },
        { pic: "https://www.finds.ir/photos/finds-ir-2020041333105034.jpg", title: 'شرکت کاله' },
        { pic: "https://www.finds.ir/photos/finds-ir-2020041333105034.jpg", title: 'شرکت کاله' },
        { pic: "https://www.finds.ir/photos/finds-ir-2020041333105034.jpg", title: 'شرکت کاله' },
        { pic: "https://www.finds.ir/photos/finds-ir-2020041333105034.jpg", title: 'شرکت کاله' },
        { pic: "https://www.finds.ir/photos/finds-ir-2020041333105034.jpg", title: 'شرکت کاله' },
        { pic: "https://www.finds.ir/photos/finds-ir-2020041333105034.jpg", title: 'شرکت کاله' },
        { pic: "https://www.finds.ir/photos/finds-ir-2020041333105034.jpg", title: 'شرکت کاله' },
        { pic: "https://www.finds.ir/photos/finds-ir-2020041333105034.jpg", title: 'شرکت کاله' },
        { pic: "https://www.finds.ir/photos/finds-ir-2020041333105034.jpg", title: 'شرکت کاله' },
        { pic: "https://www.finds.ir/photos/finds-ir-2020041333105034.jpg", title: 'شرکت کاله' },
      ],
      costumerSlider: null
    }
  }
}
</script>

<style scoped>

</style>
