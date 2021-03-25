<template>
  <Logo />
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :collapse="isCollapse"
      :default-active="currentRoute.fullPath"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/home">
        <i class="el-icon-connection"></i>
        <span>首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template #title>
          <i class="el-icon-tickets"></i>
          <span>组件展示</span>
        </template>
        <el-menu-item index="/components-show/table">表格</el-menu-item>
      </el-submenu>
      <el-menu-item index="/setting/index">
        <i class="el-icon-setting"></i>
        <template #title>设置</template>
      </el-menu-item>
      <el-menu-item index="/about/index">
        <i class="el-icon-info"></i>
        <template #title>关于</template>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { useRoute } from 'vue-router'
  import Logo from './Logo.vue'

  const store = useStore()
  const isCollapse = computed(() => store.state.app.sideMenu.opened)

  const currentRoute = useRoute()

</script>

<style lang='scss' scoped>
</style>
