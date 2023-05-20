<template>
  <v-card
      class="rounded-lg-pa-2"
      outlined
      elevation="4"
      height="300px">
    <v-card-title class="mb-4">
      <strong>
        تیکت های بی پاسخ
      </strong>
    </v-card-title>
    <v-card-text>
      <v-list flat color="transparent" style="height: 200px; overflow-y: auto">
        <v-subheader class="subheading" v-if="tickets.length === 0">تیکتی ندارید!</v-subheader>
        <v-list-item-group>
          <div v-for="(ticket, index) in tickets" :key="index">
            <v-list-item>
              <v-list-item-title>
                {{ ticket.title }}
              </v-list-item-title>
              <v-list-item-action style="color: #3751FF">
                {{ ticket.id }}
              </v-list-item-action>
            </v-list-item>
            <hr style="width: 95%; background-color: #3751FF !important;" class="my-2"/>
          </div>
        </v-list-item-group>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      tickets: [
        { title: 'مشکل در بارگذاری آگهی', id: 4321},
        { title: 'مشکل در بارگذاری آگهی ۲', id: 4322},
        { title: 'مشکل در بارگذاری آگهی ۳', id: 4323},
        { title: 'مشکل در بارگذاری آگهی ۴', id: 4324},
        { title: 'مشکل در بارگذاری آگهی ۵', id: 4325},
        { title: 'مشکل در بارگذاری آگهی ۶', id: 4326},
        { title: 'مشکل در بارگذاری آگهی ۷', id: 4327}
      ]
    }
  }
}
</script>

<style scoped>

</style>
