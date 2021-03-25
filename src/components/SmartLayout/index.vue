<template>
  <div
    class="auto-container"
    :class="wrapClass"
  >
    <slot name="top" />
      <slot />
    <slot name="bottom" />
  </div>
  <!-- <Layout
    v-if="types === 'scroll'"
    :types="types"
    :topOffset="topOffset"
    :wrap-class="wrapClass"
  >
    <template #scroll>
      <el-scrollbar>
        <slot />
      </el-scrollbar>
    </template>
  </Layout>
  <Layout
    v-else
    :types="types"
    :topOffset="topOffset"
    :wrap-class="wrapClass"
  >
    <template #top>
      <div class="top-wrapper">
        <slot name="top" />
      </div>
    </template>
    <template #center>
      <slot />
    </template>
    <template #bottom>
      <div class="bottom-wrapper">
        <slot name="bottom" />
      </div>
    </template>
  </Layout> -->
</template>

<script setup>
  import { defineProps, computed } from 'vue'

  const props = defineProps({
    wrapClass: {
      type: String,
      default: ''
    }
  })
</script>


<style lang="scss" scoped>
.auto-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
