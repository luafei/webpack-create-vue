<template>
    <div>
        <h2 class="title">{{message}}</h2>
        <button v-on:click="mybutton('mmmm')">按钮</button>
        <p>{{processDate(date)}}</p>
        <Cpn></Cpn>
    </div>
</template>

<script>
    import Cpn from './Cpn.vue';
    export default {
        name: "App",
        components: {
            Cpn
        },
        data() {
            return {
                message: 'vue hello',
                date: new Date()
            }
        },
        methods: {
            mybutton: function (param) {
                window.alert('按钮！' + param);
            },
            processDate: function (dd) {
                var  date = new Date(dd);
                var year =  date.getFullYear();
                var month = date.getMonth() < 10? '0' + (date.getMonth() + 1): (date.getMonth() +1) +'';
                var day = date.getDay()< 10 ? '0' + date.getDay(): date.getDay();
                var hour = date.getHours();
                var minite = date.getMinutes();
                var seconds = date.getSeconds();
                return year + '-' + month + '-' + day + ' ' + hour+ ':' + minite +':' + seconds;

            }
        }
    }
</script>

<style scoped>
    .title {
        color: yellow;
    }
</style>