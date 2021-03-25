<template>
  <div class="content-container">
    <div
      v-if="types === 'auto'"
      class="auto-container"
      :style="tOffsetStyle"
      :class="wrapClass"
    >
      <slot name="top" />
      <slot name="center" />
      <slot name="bottom" />
    </div>
    <div
      v-if="types === 'scroll'"
      class="scroll-container"
      :style="tOffsetStyle"
      :class="wrapClass"
    >
      <slot name="scroll" />
    </div>
  </div>
</template>
<script setup>
  import { defineProps, computed } from 'vue'

  const props = defineProps({
    // scroll: 出现滚动条
    // auto: 上中下部分，上固定高度，中自适应高度，下固定高度
    types: {
      type: String,
      default: 'auto'
    },
    topOffset: {
      type: Number,
      default: 50
    },
    wrapClass: {
      type: String,
      default: ''
    }
  })

  const tOffsetStyle = computed(() => `height: calc(100% - ${props.topOffset}px)`)
</script>


<style lang="scss" scoped>
  .content-container {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
  .auto-container {
    display: flex;
    flex-direction: column;
  }
  .auto-container, .scroll-container {
    box-sizing: border-box;
  }
</style>

