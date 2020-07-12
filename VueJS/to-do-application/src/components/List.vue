<template>
    <div>
        <div v-for="(todo) in todos" :key="todo.id">
            <Item v-bind:todo="todo" v-on:delete-task="$emit('delete-task', todo.id)"/>
        </div>
    </div>
</template>

<script>
import Item from './Item';    
export default {
    name: "List",
    components: {
        Item    
    },
    props: ["todos"]
}
</script>

<style scoped>

</style>