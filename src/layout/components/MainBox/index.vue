<template>
  <router-view v-slot="{ Component }">
    <transition
      name="fade-transform"
      mode="out-in"
      appear
    >
      <keep-alive>
        <component :is="Component"/>
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup>
</script>


<style lang="scss" scoped>
</style>
