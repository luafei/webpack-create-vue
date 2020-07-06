<template>
  <div class="tab-bar-item" @click="itemClick">
    <!--<img src="../../assets/img/tabbar/home_active.svg" alt="">-->
    <!--<img :src="imgUrl" alt="">-->
    <!--{{text}}-->
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        computed: {
          isActive: function() {
            return this.$route.path.includes(this.path)
          },
          activeStyle: function () {
            return this.isActive ? { color: this.activeColor }: {}
          }
        },
        props: ['path', 'activeColor'],
        methods: {
          itemClick:  function () {
            this.$router.replace(this.path)
          }
        }
    }
</script>

<style scoped>
  .tab-bar-item {
    height: 49px;
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
  .tab-bar-item img{
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
  .active {
    color: red;
  }
</style>
