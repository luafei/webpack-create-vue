<template>
    <div id="app">
        <MainTabBar></MainTabBar>
        <router-view></router-view>
    </div>
</template>

<script>
    import MainTabBar from './components/MainTabBar'

    export default {
        name: "App",
        components: {
            MainTabBar
        }
    }
</script>

<style scoped>
    @import './assets/css/base.css';
</style>