<template>
  <v-card
  class="rounded-lg-pa-2"
  outlined
  elevation="12"
  height="300px">
    <v-card-title>
      <strong>
        فهرست فعالیت ها
      </strong>
    </v-card-title>

    <v-card-text>
      <v-text-field
          v-model="newTodo"
          placeholder="افزودن فعالیت جدید"
          @click:append-outer="addTodo"
          width="100%"
          @keyup.enter="addTodo">
        <v-icon slot="append-outer" @click="addTodo" color="#3751FF" large style="bottom: 8px">
          {{ ImdiPlus }}
        </v-icon>
        <v-icon slot="append-outer" @click="removeTodos" color="#3751FF" large style="bottom: 8px">
          mdi-delete
        </v-icon>
      </v-text-field>

      <v-list flat color="transparent" style="height: 150px; overflow-y: auto;">
        <v-subheader class="subheading" v-if="todos.length === 0">فعالیتی برای انجام ندارید!</v-subheader>
        <v-list-item-group>
          <div v-for="(task, index) in todos" :key="index">
            <v-list-item @click="toggleTodo(index)">
              <v-list-item-action>
                <v-icon v-if="task.done" color="#3751FF" style="bottom: 3px">{{ ImdiDone }}</v-icon>
                <v-icon v-else color="#3751FF" style="bottom: 3px">{{ ImdiToDo }}</v-icon>
              </v-list-item-action>
              <v-list-item-title>
                <span style="font-size: 1em !important;">
                {{ task.title }}
              </span>
              </v-list-item-title>
            </v-list-item>
            <hr style="width: 95%; background-color: #3751FF !important;" class="my-2"/>
          </div>
        </v-list-item-group>
      </v-list>

    </v-card-text>

  </v-card>
</template>

<script>
import { mdiPlusCircleOutline, mdiCheckboxBlankCircleOutline, mdiCheckboxMarkedCircleOutline } from '@mdi/js';
export default {
  data () {
    return {
      show: true,
      newTodo: "",
      todos: this.$cookies.get('user').todo,
      ImdiPlus: mdiPlusCircleOutline,
      ImdiDone: mdiCheckboxMarkedCircleOutline,
      ImdiToDo: mdiCheckboxBlankCircleOutline
    }
  },

  methods: {
    addTodo() {
      const value = this.newTodo && this.newTodo.trim();
      if (!value) {
        return;
      }

      this.todos.push({
        title: this.newTodo,
        done: false
      });
      // this.send()
      this.newTodo = "";
    },
    removeTodos() {
      this.todos=[];
    },
    toggleTodo(index) {
      this.todos[index].done = !this.todos[index].done
      // this.send()
    },
    async updater() {
      let axios = require('axios');
      let config = {
        method: 'get',
        url: this.$store.state.host + 'authentication/this',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer '+this.$cookies.get('token')
        },
      };
      let that=this;
      await axios(config)
          .then(function (response) {
            that.$cookies.set('user', response.data)
          })
          .catch(() => {
            that.$cookies.remove('user');
            that.$cookies.remove('token');
          });
    },
    async send(){
      var axios = require('axios');
      var FormData = require('form-data');
      var data = new FormData();
      data.append('todo', this.todos?JSON.stringify(this.todos):null);
      console.log( this.todos)
      var config = {
        method: 'post',
        url: this.$store.state.host + 'user/Todoupdate',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer '+this.$cookies.get('token'),
        },
        data : data
      };

      await axios(config)
          .then(function () {
            console.log('success');
          })
          .catch(function (error) {
            console.log(error);
          });
    },
  },
  async beforeMount() {
    await this.updater()
    this.todos=JSON.parse(this.$cookies.get('user').todo?this.$cookies.get('user').todo:'[]')
  },
  async beforeDestroy() {
    await this.send()
  }
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
