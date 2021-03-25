<template>
  <div class="nav-container">
    <hamburger
      :is-active="isActive"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import Hamburger from './Hamburger.vue'

  const store = useStore()
  const isActive = computed(() => store.state.app.sideMenu.opened)

  const toggleSideBar = () => {
    store.commit('app/TOGGLE_SIDEMENU')
  }
</script>

<style lang='scss' scoped>
</style>
