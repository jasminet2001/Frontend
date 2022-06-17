<template>
  <v-card elevation="2" class="main px-8 pb-5">
    <v-card class="img">
      <v-img elevation="5">
        <v-icon size="6rem">mdi-factory</v-icon>
      </v-img>
    </v-card>
    <div>
      <v-row>
        <v-spacer />
        <v-col cols="12" sm="6" md="6" lg="3" xl="3" align="center">
          <h1>
            {{ companyName }}
          </h1>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="3" xl="3" align="center">
          <v-rating
              :empty-icon="ImdiStarOutline"
              :full-icon="ImdiStar"
              :half-icon="ImdiStarHalf"
              hover
              length="5"
              readonly
              value="3"
              color="yellow"
              background-color="gray"
              style="direction: ltr;"
          ></v-rating>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="3" xl="3" align="center">
          <v-chip color="#ffeb3b">
            {{ companyCategory }}
          </v-chip>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="3" xl="3" align="center">
          <v-icon small>
            {{ ImdiPin }}
          </v-icon>
          {{ companyLocation }}
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
import { mdiMapMarker, mdiStar, mdiStarHalfFull, mdiStarOutline } from '@mdi/js'
export default {
  data () {
    return {
      companyName: 'کاله',
      companyCategory: 'دسته بندی',
      companyLocation: 'تهران',
      ImdiPin: mdiMapMarker,
      ImdiStar: mdiStar,
      ImdiStarHalf: mdiStarHalfFull,
      ImdiStarOutline: mdiStarOutline
    }
  }
}
</script>

<style scoped>
.main{
  width: 100%;
  margin-top: 3rem;
  padding-top: 5rem;
}
.img{
  position: absolute;
  right: 3%;
  top: -3rem;
  width: 100px;
}
</style>
