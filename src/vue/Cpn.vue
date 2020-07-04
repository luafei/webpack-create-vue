<template>
    <div>
        <p>{{message}}</p>
        <button @click="myClick()">子组件按钮</button>
    </div>
</template>

<script>
    export default {
        name: "Cpn",
        data() {
            return {
                message: '子组件'
            }
        },
        methods: {
            myClick: function () {
                window.alert('我是子组件！')
            }
        }
    }
</script>

<style scoped>

</style>