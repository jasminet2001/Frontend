<template>
  <v-card
  class="rounded-lg pa-2"
  outlined
  elevation="0"
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
      </v-text-field>

      <v-list flat color="transparent" style="height: 150px; overflow-y: auto;">
        <v-subheader class="subheading" v-if="todos.length === 0">فعالیتی برای انجام ندارید!</v-subheader>
        <v-list-item-group>
          <div v-for="(task, index) in todos" :key="index">
            <v-list-item @click="toggleTodo(index)">
              <v-list-item-title>
              <span style="font-size: 1em !important;">
                {{ task.title }}
              </span>
              </v-list-item-title>
              <v-list-item-action>
                <v-icon v-if="task.done" color="#3751FF" style="bottom: 3px">{{ ImdiDone }}</v-icon>
                <v-icon v-else color="#3751FF" style="bottom: 3px">{{ ImdiToDo }}</v-icon>
              </v-list-item-action>
            </v-list-item>
            <hr style="border-color: #DFE0EB; background-color: #DFE0EB"/>
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
      todos: [],
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
      this.newTodo = "";
    },

    toggleTodo(index) {
      this.todos[index].done = !this.todos[index].done
    }
  },
}

</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
