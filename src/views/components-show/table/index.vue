<template>
  <div class="page-container">
    <smart-layout>
      <template #top>
        <!-- <el-form :model="formInline" label-width="80px">
          <el-row :gutter="10">
            <el-col :span="6">
              <el-form-item label="条件1">
                <el-input v-model="formInline.query1" placeholder="条件1"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="条件2">
                <el-select v-model="formInline.query2" placeholder="条件2">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="条件3">
                <el-input v-model="formInline.query3" placeholder="条件3"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="条件4">
              <el-input v-model="formInline.query4" placeholder="条件4"></el-input>
            </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="条件5">
                <el-input v-model="formInline.query5" placeholder="条件5"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="条件6">
                <el-input v-model="formInline.query6" placeholder="条件6"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="条件6">
                <el-input v-model="formInline.query6" placeholder="条件6"></el-input>
              </el-form-item>
            </el-col>
            <el-col v-if="isShow" :span="6">
              <el-form-item label="条件7">
                <el-input v-model="formInline.query7" placeholder="条件7"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label-width="0">
                <el-button type="primary">查询</el-button>
                <el-button plain icon="el-icon-arrow-down" @click="onSubmit">展开</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form> -->
        <smart-query
          :data="yshData"
          :extraData="extraData"
          @submit="handleSearch"
        />
      </template>
      <el-table
        :data="tableData"
        size="medium"
        border
        height="100%"
        style="width: 100%;">
        <el-table-column
          fixed
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          fixed
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          width="150"
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column
          width="150"
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column
          width="250"
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column
          width="250"
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column
          width="150"
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column
          width="150"
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column
          width="150"
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column
          fixed="right"
          width="200"
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
      <template #bottom>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          style="padding-top: 10px;text-align: right"
        >
        </el-pagination>
      </template>
    </smart-layout>
  </div>
</template>

<script setup>
  import { reactive, ref } from 'vue'
  import SmartForm from '@/components/SmartForm/index.vue'

  const yshData = reactive([
    {
      mode: 'input',
      label: '条件',
      key: 'condition',
      options: {
        maxlength: 10,
        placeholder: '123',
        value: ''
      }
    },
    {
      mode: 'checkbox',
      label: '条件2',
      key: 'condition2',
      options: {
        value: ['checkbox1'],
        directors: [
          {
            label: 'checkbox1',
            value: '1'
          },
          {
            label: 'checkbox2',
            value: '2'
          }
        ]
      }
    },
    {
      mode: 'select',
      label: '条件3',
      key: 'condition3',
      options: {
        value: '',
        directors: [
          {
            label: 'select1',
            value: '1'
          },
          {
            label: 'select2',
            value: '2'
          }
        ]
      }
    },
    {
      mode: 'radio',
      label: '条件4',
      key: 'condition4',
      options: {
        value: '',
        directors: [
          {
            label: 'radio1',
            value: '1'
          },
          {
            label: 'radio2',
            value: '2'
          }
        ]
      }
    }
  ])
  const extraData = reactive([
    // {
    //   types: 'input',
    //   label: '条件11',
    //   key: 'condition11',
    //   val: '1'
    // },
    // {
    //   types: 'input',
    //   label: '条件22',
    //   key: 'condition22',
    //   val: '2'
    // },
    // {
    //   types: 'input',
    //   label: '条件33',
    //   key: 'condition33',
    //   val: '1'
    // },
    // {
    //   types: 'input',
    //   label: '条件44',
    //   key: 'condition44',
    //   val: '2'
    // }
  ])
  
  const handleSearch = (form) => {
    console.log('yshData: ', yshData);
    console.log('form: ', form)
  }

  // 表格数据
  const tableData = reactive([{
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  }, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄'
  }, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  }, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄'
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  },{
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  }, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄'
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  }, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄'
  }])

  // 分页
  let currentPage = ref(1)
  const handleSizeChange = (val) => {
    console.log(`每页 ${val} 条`)
  }
  const handleCurrentChange = (val) => {
    console.log(`当前页: ${val}`)
  }

</script>

<style lang='scss' scoped>
</style>
