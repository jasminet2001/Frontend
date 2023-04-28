<template>
  <v-card
      class="mx-auto my-1"
      outlined
      shaped
  >
    <v-form>
      <legend class="font-weight-black">فیلتر ها</legend>
      <v-text-field
          label="عبارت جستجو را وارد کنید"
          v-model="text"
          hide-details="auto"
      ></v-text-field>
      <v-select
          :items="categories"
          item-text="name"
          item-value="id"
          v-model="category"
          label="دسته بندی"
      ></v-select>
      <v-btn
          class="my-8 mx-auto align-center white--text"
          color="#000930"
          @click="$emit('search',{q:text,c:category})"
      >
        جستجو
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>

export default {
  name: "FilterCard",
  props: {
    categories: {
      type: Array,
      required: true
    },
  },
  data: () => ({
    text: '',
    category: '',
  })
}
</script>

<style scoped>

</style>