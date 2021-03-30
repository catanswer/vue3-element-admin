<template>
  <div
    class="smart-table"
    v-loading="tableData.loading"
  >
    <!-- 表格上方的按钮 -->
    <slot name="btns">
      <div class="btns-box">
        <div
          v-for="(value, key) in btnsData"
          :key="key"
          class="btn-item"
        >
          <el-popconfirm
            v-if="value.show && value.mode === 'popconfirm'"
            :title="value.popOptions.title"
            :confirmButtonText="value.popOptions.confirmButtonText || '确定'"
            :cancelButtonText="value.popOptions.cancelButtonText || '取消'"
            :icon="value.popOptions.icon"
            :iconColor="value.popOptions.iconColor"
            @confirm="handleTopBtnClick(key + 'Ok')"
            @cancel="handleTopBtnClick(key + 'Cancel')"
          >
            <template #reference>
              <el-button
                :type="value.type || 'primary'"
                :size="value.size || 'mini'"
                :disabled="value.disabled"
              >{{ value.name }}</el-button>
            </template>
          </el-popconfirm>
          <el-button
            v-else-if="value.mode !== 'popconfirm' && value.show"
            :type="value.type || 'primary'"
            :disabled="value.disabled"
            :size="value.size || 'mini'"
            :plain="value.plain"
            :circle="value.circle"
            :loading="value.loading"
            :icon="value.icon"
            @click="handleTopBtnClick(key)"
          >{{ value.name }}</el-button>
        </div>
      </div>
    </slot>
    <!-- 表格 -->
    <el-table
      class="table"
      border
      :stripe="tableData.stripe"
      :size="tableData.size"
      :data="tableData.data"
      :height="tableHeightStyle"
      @select-all="handleSelectionChange"
      @selection-change="handleSelectionChange"
    >
      <!-- checkbox -->
      <el-table-column
        v-if="tableData.showCheckBox"
        type="selection"
        align="center"
        width="55"
      />
      <!-- 序号列 -->
      <el-table-column
        v-if="tableData.showIndex && tableData.cols.length === 0 "
        align="center"
        label="序号"
        :width="tableData.cols.length === 0 ? 0 : 80"
        fixed
      >
        <template v-slot="{ $index }">
          <span>{{ $index + 1 + (tableData.pagination.page - 1) * tableData.pagination.limit }}</span>
        </template>
      </el-table-column>
      <!-- 自定义列 -->
      <el-table-column
        v-for="(item, index) in tableData.cols.filter(item => !item.hidden)"
        :key="index"
        :prop="item.key"
        :label="item.label"
        :fixed="item.fixed || false"
        :align="item.align || 'center'"
        :width="item.width || ''"
        :min-width="item.minWidth || '100px'"
      >
        <template v-slot="scope">
          <!-- 自定义内容 -->
          <template v-if="item.type === 'slot'">
            <slot :name="'col-' + item.key" :row="scope.row" />
          </template>
          <!-- 嵌套表头 -->
          <template v-else-if="item.children && item.children.length > 0">
            <el-table-column
              v-for="(childItem, childIndex) in item.children"
              :key="childIndex"
              :prop="childItem.key"
              :label="childItem.label"
              :align="item.align"
              :width="item.width"
              :min-width="item.minWidth || '85px'"
            />
          </template>
          <!-- 直接展示原始值 -->
          <template v-else>
            {{ scope.row[item.key] }}
          </template>
        </template>
      </el-table-column>
      <!-- 最后一栏 - 操作栏 -->
      <el-table-column
        v-if="tableData.handle"
        :fixed="tableData.handle.fixed"
        :align="tableData.handle.align || 'center'"
        :label="tableData.handle.label"
        :width="tableData.handle.width || 150"
      >
        <template #default="scope">
            <template v-for="(item, index) in tableData.handle.btns">
              <!-- 自定义操作类型 -->
              <slot
                v-if="item.slot"
                :name="'handle-' + item.event"
                :data="{item, row: scope.row}"
              />
              <el-button
                v-if="!item.slot && item.show"
                :key="index"
                size="mini"
                :type="item.type || 'primary'"
                :disabled="item.disabled || false"
                :icon="item.icon || ''"
                :loading="scope.row[item.loading] || false"
                @click="handleBtnClick(item.event, scope.row)"
              >
                {{ item.label }}
              </el-button>
            </template>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <SmartPagination
      class="pagination"
      v-if="tableData.pagination.show"
      :total="tableData.pagination.total"
      v-model:page="tableData.pagination.page"
      v-model:limit="tableData.pagination.limit"
      @pagination="handlePagination"
    />
  </div>
</template>

<script setup>
  import { defineProps, defineEmit, computed, reactive }  from 'vue'
  import SmartPagination from '@/components/SmartPagination/index.vue'

  const props = defineProps({
    btnsData: {
      type: Object
    },
    tableData: {
      required: true,
      type: Object
    }
  })
  const emits = defineEmit(['tableEvents', 'pagination'])

  // 表格动态高度
  const tableHeightStyle = computed(() => {
    const btnsHeiht = props.btnsData ? '33px' : '0px'
    const pageHeight = props.tableData.pagination.show ? '42px': '0px'
    return `calc(100% - ${btnsHeiht} - ${pageHeight})`
  })

  // 表格上方按钮 事件处理
  const handleTopBtnClick = event => {
    emits('tableEvents', event)
  }

  // 表格内按钮 事件处理
  const handleBtnClick = (event, data) => {
    emits('tableEvents', event, data)
  }
  // 表格选中 事件处理
  const handleSelectionChange = rows => {
    emits('tableEvents', 'check', rows)
  }

  // 分页 事件处理
  const handlePagination = pageObj => {
    emits('pagination', pageObj)
  }

</script>

<style lang='scss' scoped>
  .smart-table {
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
    .btns-box {
      margin-bottom: 5px;
      text-align: right;
      .btn-item {
        display: inline;
        & + .btn-item {
          margin-left: 10px;;
        }
      }
    }
    .table {
      width: 100%
    }
    .pagination {
      margin-top: 10px;
    }
  }
</style>
