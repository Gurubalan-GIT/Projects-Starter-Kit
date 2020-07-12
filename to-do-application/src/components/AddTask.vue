<template>
    <div>
        <form @submit="addTask">
            <input type="text" v-model="task" name="task" placeholder="Add Task">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
export default {
    name: "AddTask",
    data() {
        return {
            task: ''
        }
    },
    methods: {
        addTask(e){
            e.preventDefault();
            const task = {
                title: this.task,
                completed: false 
            }
            this.$emit('add-task', task);
            this.task = '';
        }
    },
}
</script>

<style scoped>
    form {
        display: flex;
    }
    input[type="text"] {
        flex: 10;
        padding: 5px;
        outline: none;
    }
    input[type="submit"] {
        flex: 2;
    }
    .btn {
        display: inline-block;
        border: none;
        background: #555;
        color: white;
        padding: 7px 20px;
        cursor: pointer;
    }
    .btn:hover {
        background: #666;
    }
</style>