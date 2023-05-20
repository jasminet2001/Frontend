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

export default {
  props: [
      'companyName',
      'companyCategory',
      'companyLocation',
      'saved'
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
      starred: this.saved,
      marked_id: 0,
    }
  },
  methods: {
    async getBookmarks() {
      var axios = require('axios');
      var config = {
        method: 'get',
        url: this.$store.state.host + 'user/bookmarks',
        headers: {
          'Authorization': 'Bearer '+this.$cookies.get('token'),
          'Accept': 'application/json',
        },
      };
      let that = this;
      await axios(config)
          .then(function (response) {
            for (let i = 0; i < response.data.length; i++) {
              console.log("NO")
              console.log(response.data[1].marked_id)
              if (that.$route.params.id == response.data[i].marked_id)
              {
                console.log("yes")
                that.marked_id = response.data[i].id;
              }
            }
          })
    },
    async save() {
      let errorToaster = (msg) => {
        this.$toast.open({
          message: msg,
          type: 'error',
        });
      };
      let that = this;
      if (that.saved) {
        try {
          console.log(this.marked_id)
          await (that.getBookmarks());
          console.log(this.marked_id)
          let axios2 = require('axios');
          let config2 =
              {
                method: 'delete' ,
                url: this.$store.state.host + `user/bookmarks/del/${this.marked_id}`,
                headers:
                    {
                      'Accept': 'application/json',
                      'Authorization': 'Bearer ' + this.$cookies.get('token'),
                      'Content-Type': 'multipart/form-data'
                    },
              };
          await axios2(config2)
              .then((response) => {
                if (response.status === 200 && response.data.message === 'success') {
                  that.saved = false;
                }
              })
        } catch (error) {
          console.error(error);
        }
      } else {
        try
        {
          let FormData = require('form-data');
          let data = new FormData();
          data.append('marked_id', this.$route.params.id);
          let axios2 = require('axios');
          let config2 =
          {
            method: 'post',
            url: this.$store.state.host + `user/bookmarks/add`,
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
                if (response.status === 201 && response.data.message === 'success') {
                  that.saved = true;
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
