<template>
<v-btn
@click="this.submit">
  add
</v-btn>
</template>

<script>

export default {
  name: "dataAdder",
  data: ()=>{
    return {
      count: 1,
      name: 'شرکت شماره ',
      description: 'این یک متن به عنوان توضیحات برای شرکت آزمایشی ثبت شده به شماره'
    }
  },
  methods: {
    async fetchData(){
      if (this.count <130){
        var axios = require('axios');
        var FormData = require('form-data');
        var data = new FormData();
        data.append('name', this.name + this.count);
        data.append('email', 'sample' + this.count + '@gmail.com');
        data.append('password', '12345678');
        data.append('password_confirmation', '12345678');

        var config = {
          method: 'post',
          url: 'http://0.0.0.0:80/api/user/signup',
          headers: {
            'Accept': 'application/json',
          },
          data: data
        };
        let errorToaster = (msg) => {
          this.$toast.open({
            message: msg,
            type: 'error',
          });
        };
        await axios(config)
            .then(result => {
              result = result.data;
              this.$cookies.set('token', result.token);
              this.$cookies.set('user', result.user);
              this.count++;
              setTimeout(()=>{
                this.fetchData();
              }, 500);
            })
            .catch(error => {
              console.log(error);
              if (error.response.status === 422) {
                for (let err in error.response.data.errors) {
                  errorToaster(error.response.data.errors[err][0]);
                }
              }
            });
      }
      else
        alert('done');
      },
    async login(){
      let axios = require('axios');
      let FormData = require('form-data');
      let data = new FormData();
      data.append('email', `sample${this.count}@gmail.com`);
      data.append('password', '12345678');

      var config = {
        method: 'post',
        url: 'http://localhost/api/user/login',
        headers: {
          'Accept': 'application/json',
        },
        data : data
      };
      var errorToaster = (msg) => {
        this.$toast.open({
          message: msg,
          type: 'error',
        });
      };
      let that = this;
      await axios(config)
          .then(function (response) {
            var result=response.data;
            that.$cookies.set('token', result.token);
            that.$cookies.set('user', result.user);
          })
          .catch(function (error) {
            console.log(error);
            alert('login failed');
            if (error.status!=429)errorToaster('!ایمیل یا رمز عبور اشتباه است');
          });
    },
    async submit(){
      if (this.count <130){
        await this.login();
        var axios = require('axios');
        var FormData = require('form-data');
        var data = new FormData();
        data.append('name', this.name + this.count);
        data.append('category_id', Math.random(1, 12));
        data.append('email', `company${this.count}@outlook.com`);
        data.append('phone', `0` + (9123456000 + this.count));
        data.append('description', `${this.description} ${this.count} می باشد.`);
        if (this.website) data.append('website', this.website);
        if (this.selectedFile) data.append('logo', this.selectedFile);

        var config = {
          method: 'post',
          url: 'http://localhost/api/company/add',
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.$cookies.get('token'),
            'Content-Type': 'multipart/form-data'
          },
          data: data
        };
        let that = this
        await axios(config)
            .then(function () {
              that.count++;
              setInterval(() => {
                that.fetchData();
              }, 500);
            })
            .catch(function (error) {
              console.log(error);
              alert('failed');
            });
      }
    }
  }
}
</script>

<style scoped>

</style>