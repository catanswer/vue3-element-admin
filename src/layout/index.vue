<template>
  <div :class="{'hide-side-menu': sideMenuStatus}" class="layout-wrapper" >
    <!-- 左侧菜单栏 -->
    <div class="side-container">
      <side-menu />
    </div>
    <!-- 右侧主内容 -->
    <div class="main-container">
      <!-- 顶部导航 -->
      <nav-box />
      <!-- 主体内容 -->
      <main-box />
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  
  import SideMenu from './components/SideMenu/index.vue'
  import NavBox from './components/NavBox/index.vue'
  import MainBox from './components/MainBox/index.vue'

  const store = useStore()
  const sideMenuStatus = computed(() => store.state.app.sideMenu.opened)
</script>

<style lang="scss" scoped>
  .layout-wrapper {
    height: 100%
  }
  
</style>