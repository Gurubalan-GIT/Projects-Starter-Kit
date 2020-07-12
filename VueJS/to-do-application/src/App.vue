<template>
  <div id="app">
    <Navbar />
    <AddTask v-on:add-task="addTask"/>
    <List v-bind:todos="todos" v-on:delete-task="deleteTask"/>
  </div>
</template>

<script>
import List from './components/List';
import Navbar from './layouts/Navbar';
import AddTask from './components/AddTask';
import { getData, addTask, deleteTask } from "./api/tasks";
export default {
  name: 'App',
  components: {
    List,
    Navbar,
    AddTask
  },
  data(){
    return {
      todos : []
    }
  },
  methods: {
    deleteTask(id){
      deleteTask(id)
        // eslint-disable-next-line no-unused-vars
        .then(res => this.todos = this.todos.filter((todo) => todo.id !== id))
        .catch(err => console.log(err))
    },
    addTask(task){
      const { title, completed } = task;
      addTask(title, completed)
        .then(res => this.todos = [...this.todos, res.data])
        .catch(err => console.log(err))
    }
  },
  created(){
    getData()
      .then(res => this.todos = res.data)
      .catch(err => console.log(err))
  }
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
