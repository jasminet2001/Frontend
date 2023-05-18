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
          <div class="icon">
            <v-btn icon @click="save">
              <v-icon size="64px" :color="saved ? 'black' : ''">mdi-bookmark</v-icon>
            </v-btn>
          </div>
        </v-col>
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
							background-color="#FFD700"
							color="#FFD700"
							length="5"
							readonly
							size="47"
							:value="rate"
					></v-rating>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="3" xl="3" align="center">
          <v-chip color="#ffeb3b">
            {{ companyCategory }}
          </v-chip>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
import { mdiMapMarker, mdiStar, mdiStarHalfFull, mdiStarOutline } from '@mdi/js'
import axios from "axios";
export default {
  props: [
      'companyName',
      'companyCategory',
      'companyLocation',
			'rate'
  ],
  data () {
    return {
      // companyName: 'کاله',
      // companyCategory: 'دسته بندی',
      // companyLocation: 'تهران',
      ImdiPin: mdiMapMarker,
      ImdiStar: mdiStar,
      ImdiStarHalf: mdiStarHalfFull,
      ImdiStarOutline: mdiStarOutline,
      saved: false
    }
  },
  methods: {
    async mounted() {
      await this.issaved();
    },
    async issaved() {
      try {
        let FormData = require('form-data');
        let data = new FormData();
        data.append('token', this.$cookies.get('token'));
        data.append('id', this.$route.params.id);
        var axios0 = require('axios');
        var config0 = {
          method: 'get',
          url: this.$store.state.host + `user/bookmarks/IsMarked/${this.$route.params.id}`,
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.$cookies.get('token'),
            'Content-Type': 'multipart/form-data'
          },
          data: data
        };
        axios0(config0)
            .then((response) => {
              if (response.status === 200) {
                this.saved = !response.data.saved;
              }
            })
      } catch (error) {
        console.error(error);
      }
    },
    async save() {
      let errorToaster = (msg) => {
        this.$toast.open({
          message: msg,
          type: 'error',
        });
      };
      if (this.saved) {
        this.saved = false;
        try {
          const response = await axios.delete(
              `${this.$store.state.host}user/bookmarks/del/${this.$route.params.id}`,
              {
                headers: {
                  'Accept': 'application/json',
                  'Authorization': `Bearer ${this.$cookies.get('token')}`
                }
              }
          );
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      } else {
        try
        {
          let FormData = require('form-data');
          let data = new FormData();
          let axios2 = require('axios');
          let config2 =
          {
            method: 'post',
            url: this.$store.state.host + `user/bookmarks/add/${this.$route.params.id}`,
            headers:
            {
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + this.$cookies.get('token'),
              'Content-Type': 'multipart/form-data'
            },
            data: data
          };
          await axios2(config2)
              .then((response) => {
                if (response.status === 200 && response.data.message === 'success') {
                  this.saved = true;
                }
              })
        }
        catch (error)
        {
          console.error(error);
          if (error.response.status === 401 && error.response.data.message === 'Unauthenticated.') {
            errorToaster('باید وارد حساب کاربری خود شوید');
          }
        }
      }
    },
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
