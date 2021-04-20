<template>
  <div
    class="smart-container"
    :class="wrapClass"
  >
    <Layout
      v-if="types === 'scroll'"
      :types="types"
      :topOffset="topOffset"
      :wrap-class="wrapClass"
      style="padding: 0"
    >
      <template #scroll>
        <el-scrollbar noresize  view-style="overflow-x:hidden">
          <slot />
        </el-scrollbar>
      </template>
    </Layout>
    <Layout
      v-else-if="types === 'auto'"
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
    </Layout>
  </div>
</template>

<script setup>
  import { defineProps, computed } from 'vue'
  import Layout from './Layout.vue'

  const props = defineProps({
    wrapClass: {
      type: String,
      default: ''
    },
    types: {
      type: String,
      default: 'auto'
    },
    topOffset: {
      type: Number,
      default: 50
    }
  })
</script>


<style lang="scss" scoped>
.smart-container {
  height: 100%;
}
</style>
