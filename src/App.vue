<template>

  <router-view></router-view>

</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      login: false,
      homepage: false,
      signup: false,
      userpanel: true
    }
  },
};
</script>
