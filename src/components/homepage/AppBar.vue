<template>
  <!-- <v-app-bar v-if="isMobile()"
  clipped-right
  app
  elevate-on-scroll
  color="#000930"
  > -->
  <!-- <v-tabs>
    <v-tab>
      <v-btn icon>
        <v-avatar
          color="primary"
          size="36"
        ></v-avatar>
      </v-btn>
    </v-tab>
    <v-tab class="white--text">صفحه اصلی</v-tab>
    <v-tab class="white--text">ثبت شرکت</v-tab>
    <v-tab class="white--text">تماس با ما</v-tab>
    <v-spacer />
    <v-tab>
      <v-btn-toggle background-color="#000930" shaped>
        <v-btn color="white" elevation="0" tile flat outlined class="pa-5">ورود</v-btn>
        <v-btn color="white" elevation="0" tile flat outlined class="">ثبت نام</v-btn>
      </v-btn-toggle>
    </v-tab>
  </v-tabs> -->
  <!--
    </v-app-bar> -->
  <div class="hamburger-menu" v-if="isMobile()">
    <label>
      <input type="checkbox">
      <span class="menu"> <span class="hamburger"></span> </span>
      <ul>
        <li> <a href="#">صفحه اصلی</a> </li>
        <li> <a href="#">ثبت شرکت</a> </li>
        <li> <a href="#">تماس با ما</a> </li>
        <li><a href="#">ورود</a></li>
        <li><a href="#">ثبت نام</a></li>
      </ul>
    </label>
  </div>

  <v-app-bar v-else
             clipped-right
             app
             elevate-on-scroll
             color="#000930"
             dark
             class=""
             height="70%">
    <v-tabs>
<!--      <v-tab>-->
<!--        <v-btn icon>-->
<!--          <v-avatar-->
<!--              color="primary"-->
<!--              size="36"-->
<!--          ></v-avatar>-->
<!--        </v-btn>-->
<!--      </v-tab>-->
      <v-tab to="/">صفحه اصلی</v-tab>
      <v-tab to="/search" >جستجو</v-tab>
      <v-tab to="/contact">تماس با ما</v-tab>
      <v-spacer />
      <v-tab v-if="!loggedIn" >
        <v-btn-toggle background-color="#000930" shaped>
          <v-btn to="/login" color="white" elevation="0" tile flat outlined class="pa-5">ورود</v-btn>
          <v-btn to="/signup" color="white" elevation="0" tile flat outlined class="">ثبت نام</v-btn>
        </v-btn-toggle>
      </v-tab>
      <v-tab v-else to="/dashboard">
        <v-btn icon>
          <v-avatar
              color="transparent"
              size="50"
          >
            <v-img :src="avatar!=null?'http://localhost:8000/storage/avatars/'+avatar:'images/avatar.png/'"></v-img>
          </v-avatar>
        </v-btn>
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script>

export default{
  name: 'AppBar',
  data(){
    return{
      tab:'',
      avatar:'',
      loggedIn: ''
    }
  },
  methods: {
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      }
      else {
        return false
      }
    },
    async updater() {
      let axios = require('axios');
      let config = {
        method: 'get',
        url: 'http://localhost:8000/api/user/this',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer '+this.$cookies.get('token')
        },
      };
      let that=this;
      await axios(config)
          .then(function (response) {
            console.log(response.data.avatar)
            that.avatar = response.data.avatar
            that.$cookies.set('user', response.data)
            that.loggedIn=!!that.$cookies.get('user')
          })
          .catch(() => {
            that.$cookies.remove('user');
            that.$cookies.remove('token');
          });
    },
  },
  beforeMount() {
    this.updater()
  }
}
</script>
<style scoped>

label .menu {
  position: fixed;
  right: -100px;
  top: -100px;
  z-index: 100;
  width: 200px;
  height: 200px;
  color: white;
  background: #FFF;
  border-radius: 50% 50% 50% 50%;
  -webkit-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  box-shadow: 0 0 0 0 #FFF, 0 0 0 0 #FFF;
  cursor: pointer;
}

label .hamburger {
  position: absolute;
  top: 135px;
  left: 50px;
  width: 30px;
  height: 2px;
  background: #000930;
  display: block;
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
}

label .hamburger:after, label .hamburger:before {
  -webkit-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  background: #000930;
}

label .hamburger:before { top: -10px; }

label .hamburger:after { bottom: -10px; }

label input { display: none; }

label input:checked + .menu {
  box-shadow: 0 0 0 100vw #FFF, 0 0 0 100vh #FFF;
  border-radius: 0;
}

label input:checked + .menu .hamburger {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

label input:checked + .menu .hamburger:after {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  bottom: 0;
}

label input:checked + .menu .hamburger:before {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  top: 0;
}

label input:checked + .menu + ul { opacity: 1; }

label ul {
  z-index: 200;
  position: fixed;
  top: 52%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: 0;
  -webkit-transition: .1s 0s ease-in-out;
  transition: .1s 0s ease-in-out;
  list-style-type: none;
}

label a {
  font-weight: bold;
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 3em;
  padding-bottom: .5em;
  display: block;
  color: #f38630;
  text-decoration: none;
  border-bottom: 1px solid #f38630;
}
label a:active, label a:hover {
  border-bottom-color: hsl(26, 89%, 75%);
}
</style>
