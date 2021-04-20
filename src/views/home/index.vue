<template>
  <div class="page-container">
    <el-scrollbar noresize view-style="overflow-x:hidden">
      <el-row class="top-card" :gutter="20">
        <el-col :span="4">
          <div class="card-item">
            <i class="el-icon-user user"></i>
            <div class="tit">用户</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="card-item">
            <i class="el-icon-document document"></i>
            <div class="tit">文档</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="card-item">
            <i class="el-icon-setting setting"></i>
            <div class="tit">设置</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="card-item">
            <i class="el-icon-bell bell"></i>
            <div class="tit">消息</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="card-item">
            <i class="el-icon-star-off star"></i>
            <div class="tit">收藏</div>
          </div>
        </el-col>
        <el-col :span="4">
          <router-link to="/about/index" class="card-item">
            <i class="el-icon-warning-outline warning"></i>
            <div class="tit">关于</div>
          </router-link>
        </el-col>
      </el-row>
      <el-row style="margin-bottom: 20px">
        <el-col>
          <div style="height: 350px; background: #fff"></div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <todo />
        </el-col>
        <el-col :span="12">
          <div style="height: 400px; background: #fff"></div>
        </el-col>
      </el-row>
      
    </el-scrollbar>
  </div>
</template>

<script setup>
  import Todo from './components/Todo/index.vue'

</script>

<style lang="scss" scoped>
  .top-card {
    overflow: hidden;
    margin-bottom: 20px;
    .card-item {
      display: block;
      height: 100px;
      border-radius: 3px;
      padding: 10px;
      box-sizing: border-box;
      background-color: #fff;
      text-decoration: none;
      color: #333;
      cursor: pointer;
      i {
        float: left;
        width: 50px;
        height: 50px;
        padding: 10px;
        line-height: 50px;
        text-align: center;
        font-size: 45px;
        border-radius: 5px;
        margin-top: 5px;
        transition: all 0.5s ease-out;
        &.user {
          color: #409eff
        }
        &.document {
          color: #40c9c6
        }
        &.setting {
          color: #666
        }
        &.bell {
          color: #ffe740
        }
        &.star {
          color: #ff4040
        }
        &.warning {
          color: #40e5ff
        }
      }
      .tit {
        margin-left: 55px;
        text-align: right;
        font-size: 20px;
        padding-right: 20px;
        line-height: 80px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
      &:hover {
        i {
          color: #fff !important;
          &.user  {
            background-color: #409eff;
          }
          &.document {
            background-color: #40c9c6
          }
          &.setting {
            background-color: #666
          }
          &.bell {
            background-color: #ffe740
          }
          &.star {
            background-color: #ff4040
          }
          &.warning {
            background-color: #40e5ff
          }
        }
      }
    }
  }
</style>