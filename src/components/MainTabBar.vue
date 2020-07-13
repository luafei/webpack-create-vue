<template>
  <TabBar>
    <TabBarItem path="/home" active-color="red">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt=""/>
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt=""/>
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category" active-color="red">
      <img slot="item-icon" src="~assets/img/tabbar/food.svg" alt=""/>
      <img slot="item-icon-active" src="~assets/img/tabbar/fruit.svg" alt=""/>
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/cart" active-color="red">
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt=""/>
      <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt=""/>
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile" active-color="green">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt=""/>
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt=""/>
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>

</template>

<script>
    import TabBar from './tab-bar/TabBar'
    import TabBarItem from './tab-bar/TabBarItem'
    export default {
        name: "MainTabBar",
        components: {
          TabBar,
          TabBarItem
        }
    }
</script>

<style scoped>

</style>
