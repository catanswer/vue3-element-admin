<template>
  <div
    class="content-container"
    :style="{height: types === 'auto' ? 'calc(100% - 20px)' : '100%'}"
    >
    <div
      v-if="types === 'auto'"
      class="auto-container"
      :class="wrapClass"
    >
      <slot name="top" />
      <slot name="center" />
      <slot name="bottom" />
    </div>
    <div
      v-if="types === 'scroll'"
      class="scroll-container"
      
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
    // height: calc(100% - 20px);
    padding: 10px;
    overflow-x: hidden;
    background-color: #fff;
    border-radius: 4px;;
  }
  .auto-container {
    display: flex;
    flex-direction: column;
  }
  .auto-container, .scroll-container {
    box-sizing: border-box;
    height: 100%;
    overflow-x: hidden;
  }
</style>

