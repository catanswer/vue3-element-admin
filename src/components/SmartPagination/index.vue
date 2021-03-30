<template>
  <div :style="{'text-align': align }" class="pagination">
    <el-pagination
      :background="background"
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :hide-on-single-page="autoShow"
    />
  </div>
</template>

<script setup>
  import { defineProps, defineEmit, computed } from 'vue'
  
  const props = defineProps({
    align: {
      type: String,
      default: 'right'
    },
    background: {
      type: Boolean,
      default: true
    },
    total: {
      required: true,
      type: Number
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 20
    },
    pageSizes: {
      type: Array,
      default: () => {
        return [10, 20, 30, 50]
      }
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    autoShow: {
      type: Boolean,
      default: false
    }
  })

  const emits = defineEmit(['update:page', 'update:limit', 'pagination'])
  const currentPage = computed({
    get() {
      return props.page
    },
    set(val) {
      emits('update:page', val)
    }
  })
  const pageSize = computed({
    get() {
      return props.limit
    },
    set(val) {
      emits('update:limit', val)
    }
  })

  const handleSizeChange = val => {
    emits('pagination', { page: currentPage.value, limit: val })

  }
  const handleCurrentChange = val => {
    emits('pagination', { page: val, limit: pageSize.value })
  }

</script>

<style lang='scss' scoped>
  .pagination {
    background-color: #fff;
    margin-top: 10px;
  }
</style>
