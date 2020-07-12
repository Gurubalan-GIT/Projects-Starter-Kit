<template>
  <div class="todo-item" v-bind:class="{'is-completed':todo.completed}">
    <div class="todo-wrapper">
      <input type="checkbox" v-on:change="toggleComplete" />
      <p>{{todo.title}}</p>
    </div>
    <div @click="$emit('delete-task', todo.id)" class="delete-button">x</div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ["todo"],
  methods: {
    toggleComplete() {
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.is-completed {
  text-decoration: line-through;
}
.todo-wrapper{
    display: flex;
    align-items: center;
}
.todo-wrapper p {
    padding-left: 5px;
}
.delete-button {
  background-color: #d32f2f;
  color: white;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
}
</style>