<template>
  <el-card class="todo">
    <template #header>
      <div class="todo-header">
        <el-input
          v-model="newTodo"
          size="medium"
          class="new-todo-input"
          placeholder="Add todo item"
        />
        <el-button
          size="medium"
          type="primary"
          plain
          @click="handleAdd"
        >添加</el-button>
      </div>
    </template>
    <div
      v-for="(item, index) in todoList"
      :key="index"
      class="todo-item"
    >
      <div class="todo-text">{{item.text}}</div>
      <el-slider
        v-model="item.rate"
        :step="10"
      />
    </div>
  </el-card>
</template>

<script>
  import { ref, reactive, computed } from 'vue'

  export default {
    setup() {
      const todoList = ref([
        { text: 'star this repository', rate: 10, done: false },
        { text: 'fork this repository', rate: 10, done: false },
        { text: 'follow author', rate: 10, done: false },
        { text: 'vue-element-admin', rate: 10, done: true },
        { text: 'vue', rate: 10, done: true },
        { text: 'element-ui', rate: 10, done: true }
      ])
      const newTodo = ref('')

      function handleAdd() {
        if (newTodo.value.trim()) {
          todoList.value.push({
            text: newTodo.value.trim(),
            rate: 0,
            done: false
          })
          newTodo.value = ''
        }
      }
      return {
        todoList,
        newTodo,
        handleAdd
      }
    }
  }
</script>

<style lang='scss' scoped>
  .todo {
    :deep(.el-card__header) {
      padding-top: 10px;
      padding-bottom: 10px;
    }
    :deep(.el-card__body) {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
  .todo-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .new-todo-input {
      margin-right: 10px;
    }
  }
  .todo-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    margin: 0 -20px;
    border-top: 1px solid #ebeef5;
  }
  .todo-list {
    padding: 10px 0;
  }
</style>
