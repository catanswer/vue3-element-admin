<template>
  <el-breadcrumb class="breadcrumb">
    <transition-group name="breadcrumb" appear>
      <el-breadcrumb-item
        v-for="({ redirect, path, meta}, index) in breadcrumbData"
        :key="path"
      >
        <span
          v-if="redirect === 'noRedirect' || index === breadcrumbData.length - 1"
          class="disabled-link"
        >
          {{ meta.title }}
        </span>
        <a v-else @click.prevent="router.push(path)">{{ meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
  import { computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  const route = useRoute()
  const router = useRouter()
  const breadcrumbData = computed(() => {
    let matched = route.matched.filter(item => item.meta && item.meta.title)
    if (route.path !== '/home') {
      matched = [{
        path: '/home',
        meta: { title: '首页' }
      }].concat(matched)
    }
    return matched
  })

</script>

<style lang='scss' scoped>
  .breadcrumb {
    display: inline-block;
    margin-left: 10px;
    line-height: $navBoxHeight;
    :deep(.el-breadcrumb__inner) {
      &.is-link, a {
        font-weight: normal;
      }
    }
    .disabled-link {
      color: #97a8be;
    }
  }
</style>
