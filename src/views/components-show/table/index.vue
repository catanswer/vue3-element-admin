<template>
  <div class="page-container">
    <smart-layout>
      <template #top>
        <smart-form
          ref="smartForm"
          :options="options"
          :data="formData"
          :extraData="extraData"
          @submit="handleSearch"
          @change="handleQueryChange"
        />
      </template>
      <!-- <el-table
        ref="elTable"
        :data="tableData1"
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
      </el-table> -->
      <SmartTable
        :btnsData="btnsData"
        :tableData="tableData"
        @tableEvents="handleTableEvents"
        @pagination="handlePagination"
      >
        <template #col-tags="{row: { tags }}">
          <el-tag
            v-for="item in tags"
            :key="item.txt"
            :type="item.type"
          >{{ item.txt }}</el-tag>
        </template>
      </SmartTable>
      <!-- <template #bottom>
        <SmartPagination
          :total="total"
          v-model:page="listPage.page"
          v-model:limit="listPage.limit"
          @pagination="handlePagination"
        />
      </template> -->
    </smart-layout>
  </div>
</template>

<script setup>
  import { reactive, ref } from 'vue'
  import SmartForm from '@/components/SmartForm/index.vue'
  import SmartPagination from '@/components/SmartPagination/index.vue'
  import SmartTable from '@/components/SmartTable/index.vue'

  // 搜索条件表单数据
  const options = reactive({
    labelWidth: '100px',
    rules: {
      condition: [{ required: true, trigger: 'blur', message: '必填' }]
    }
  })
  const formData = reactive([
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
        clearable: true,
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
    },
    {
      mode: 'timePicker',
      label: '条件5',
      key: 'condition5',
      options: {
        value: ''
        // value: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        // isRange: true
      }
    },
    {
      mode: 'datePicker',
      label: '条件7',
      key: 'condition7',
      options: {
        value: '',
        type: 'datetimerange'
      }
    }
  ])
  const extraData = reactive([
    {
      mode: 'switch',
      label: '条件8',
      key: 'condition8',
      options: {
        value: false
      }
    },
    {
      mode: 'slider',
      label: '条件9',
      key: 'condition9',
      options: {
        value: 20
      }
    },
    {
      mode: 'inputNumber',
      label: '条件10',
      key: 'condition10',
      options: {
        value: 20
      }
    },
    {
      mode: 'cascader',
      label: '条件11',
      key: 'condition11',
      options: {
        value: [],
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致',
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }]
      }
    },
    {
      mode: 'colorPicker',
      label: '条件12',
      key: 'condition12',
      options: {
        value: '#409EFF',
        showAlpha: true,
        predefine: [
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
          '#c7158577'
        ]
      }
    }
  ])
  
  ref: smartForm = null
  const handleSearch = (form) => {
    console.log('formData: ', formData)
    console.log('form: ', form)
    console.log('getFormData: ', smartForm.getFormData());
  }
  const handleQueryChange = (key, value) => {
    console.log('key: ', key)
    console.log('value: ', value)
  }
  

  // 表格上方按钮事件
  const btnsData = {
    add: {
      show: true,
      name: '添加',
      disabled: false
    },
    delete: {
      show: true,
      mode: 'popconfirm',
      name: '删除',
      disabled: false,
      popOptions: {
        title: '确定要删除吗？'
      }
    }
  }
  
  // 表格配置对象
  const tableData = {
    loading: false,
    showCheckBox: true,
    showIndex: true,
    cols: [
      {
        hidden: false,
        key: 'date',
        width: 200,
        fixed: true,
        label: '时间'
      },
      {
        key: 'userName',
        width: 200,
        fixed: false,
        label: '用户名'
      },
      {
        key: 'tags',
        fixed: false,
        width: 200,
        label: '标签',
        type: 'slot'
      },
      {
        key: 'address',
        fixed: false,
        width: 1000,
        label: '地址'
      }
    ],
    handle: {
      fixed: 'right',
      label: '操作',
      width: 210,
      btns: [
        {
          show: true,
          label: '编辑',
          event: 'edit',
        },
        {
          show: true,
          label: '启用',
          event: 'start',
          type: 'success',
          disabled: false,
          loading: 'startLoading'
        },
        {
          show: true,
          label: '停用',
          event: 'stop',
          type: 'danger',
          disabled: true,
          loading: 'stopLoading'
        }
      ]
    },
    data: [
      {
        date: '2021-03-30',
        userName: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        startLoading: false,
        stopLoading: false,
        tags: [{
          txt: '朋友',
          type: 'success'
        }]
      },
      {
        date: '2021-03-30',
        userName: '李小龙',
        address: '上海市普陀区金沙江路 1518 弄',
        tags: [{
          txt: '朋友',
          type: 'success'
        },{
          txt: '家人',
          type: 'warning'
        }]
      },
      {
        date: '2021-03-30',
        userName: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tags: [{
          txt: '朋友',
          type: 'success'
        }]
      },
      {
        date: '2021-03-30',
        userName: '李小龙',
        address: '上海市普陀区金沙江路 1518 弄',
        tags: [{
          txt: '朋友',
          type: 'success'
        },{
          txt: '家人',
          type: 'warning'
        }]
      },
      {
        date: '2021-03-30',
        userName: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tags: [{
          txt: '朋友',
          type: 'success'
        }]
      },
      {
        date: '2021-03-30',
        userName: '李小龙',
        address: '上海市普陀区金沙江路 1518 弄',
        tags: [{
          txt: '朋友',
          type: 'success'
        },{
          txt: '家人',
          type: 'warning'
        }]
      },
      {
        date: '2021-03-30',
        userName: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tags: [{
          txt: '朋友',
          type: 'success'
        }]
      },
      {
        date: '2021-03-30',
        userName: '李小龙',
        address: '上海市普陀区金沙江路 1518 弄',
        tags: [{
          txt: '朋友',
          type: 'success'
        },{
          txt: '家人',
          type: 'warning'
        }]
      },
      {
        date: '2021-03-30',
        userName: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tags: [{
          txt: '朋友',
          type: 'success'
        }]
      },
      {
        date: '2021-03-30',
        userName: '李小龙',
        address: '上海市普陀区金沙江路 1518 弄',
        tags: [{
          txt: '朋友',
          type: 'success'
        },{
          txt: '家人',
          type: 'warning'
        }]
      },
      {
        date: '2021-03-30',
        userName: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tags: [{
          txt: '朋友',
          type: 'success'
        }]
      },
      {
        date: '2021-03-30',
        userName: '李小龙',
        address: '上海市普陀区金沙江路 1518 弄',
        tags: [{
          txt: '朋友',
          type: 'success'
        },{
          txt: '家人',
          type: 'warning'
        }]
      },
      {
        date: '2021-03-30',
        userName: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tags: [{
          txt: '朋友',
          type: 'success'
        }]
      },
      {
        date: '2021-03-30',
        userName: '李小龙',
        address: '上海市普陀区金沙江路 1518 弄',
        tags: [{
          txt: '朋友',
          type: 'success'
        },{
          txt: '家人',
          type: 'warning'
        }]
      },
      {
        date: '2021-03-30',
        userName: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tags: [{
          txt: '朋友',
          type: 'success'
        }]
      },
      {
        date: '2021-03-30',
        userName: '李小龙',
        address: '上海市普陀区金沙江路 1518 弄',
        tags: [{
          txt: '朋友',
          type: 'success'
        },{
          txt: '家人',
          type: 'warning'
        }]
      },
      {
        date: '2021-03-30',
        userName: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tags: [{
          txt: '朋友',
          type: 'success'
        }]
      },
      {
        date: '2021-03-30',
        userName: '李小龙',
        address: '上海市普陀区金沙江路 1518 弄',
        tags: [{
          txt: '朋友',
          type: 'success'
        },{
          txt: '家人',
          type: 'warning'
        }]
      }
    ],
    pagination: {
      show: true,
      total: 20,
      page: 1,
      limit: 30
    }
  }
  // 统一处理表格组件的事件
  const handleTableEvents = (event, data) => {
    switch (event) {
      case 'add':
        console.log('触发了添加事件')
        break;
      case 'deleteOk':
        console.log('触发了删除-确认事件')
        break;
      case 'deleteCancel':
        console.log('触发了删除-取消事件')
        break;
      case 'check':
        console.log('触发了表格check事件')
        console.log('data: ', data)
        break;
      case 'edit':
        console.log('触发了表格内按钮 - 编辑事件')
        console.log('data: ', data)
        break;
      case 'start':
        console.log('触发了表格内按钮 - 启用事件')
        console.log('data: ', data)
        break;
      case 'stop':
        console.log('触发了表格内按钮 - 停用事件')
        console.log('data: ', data)
        break;
      default:
        break;
    }
  }
  // 分页处理事件
  const handlePagination = ({ page, limit }) => {
    console.log(`当前第 ${page} 页`)
    console.log(`每页 ${limit} 条`)
  }
</script>

<style lang='scss' scoped>
</style>
