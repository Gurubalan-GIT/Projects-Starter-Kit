<template>
  <div id="app">
    <List v-bind:todos="todos" v-on:delete-task="deleteTask"/>
  </div>
</template>

<script>
import List from './components/List';
export default {
  name: 'App',
  components: {
    List
  },
  data(){
    return {
      todos : [
        {
          id: 1,
          title: "One",
          completed: false
        },
        {
          id: 2,
          title: "two",
          completed: true
        },
        {
          id: 3,
          title: "Three",
          completed: false
        },
      ]
    }
  },
  methods: {
    deleteTask(id){
      this.todos = this.todos.filter((todo) => todo.id !== id)
    }
  },
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
</style>
