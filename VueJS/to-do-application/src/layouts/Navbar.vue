<template>
    <div class="nav">
        <img alt="vue-logo" src="../assets/logo.png" />
        <h3>To-Do Application</h3>
    </div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>
    .nav{
        background: #333;
        color: #ffffff;
        text-align: center;
        padding: 10px;
        display: flex;
        align-items: center;
    }
    .nav img {
        width: 35px;
        height: 35px;
        margin-left: 1%;
    }
    .nav h3 {
        flex: 1;
    }
</style>