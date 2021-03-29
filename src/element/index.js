import {
  ElRow,
  ElCol,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElMenuItemGroup,
  ElButton,
  ElIcon,
  ElScrollbar,
  ElPopper,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElForm,
  ElFormItem,
  ElSelect,
  ElOption,
  ElInput,
  ElRadioGroup,
  ElRadio,
  ElCheckboxGroup,
  ElCheckbox,
  ElSwitch,
  ElTimePicker,
  ElTimeSelect,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem
} from 'element-plus'

const elementPlus = {
  install(Vue) {
    Vue.use(ElRow)
    Vue.use(ElCol)
    Vue.use(ElMenu)
    Vue.use(ElMenuItem)
    Vue.use(ElSubmenu)
    Vue.use(ElMenuItemGroup)
    Vue.use(ElButton)
    Vue.use(ElIcon)
    Vue.use(ElScrollbar)
    Vue.use(ElPopper)
    Vue.use(ElTable)
    Vue.use(ElTableColumn)
    Vue.use(ElPagination)
    Vue.use(ElForm)
    Vue.use(ElFormItem)
    Vue.use(ElSelect)
    Vue.use(ElOption)
    Vue.use(ElInput)
    Vue.use(ElRadioGroup)
    Vue.use(ElRadio)
    Vue.use(ElCheckboxGroup)
    Vue.use(ElCheckbox)
    Vue.use(ElSwitch)
    Vue.use(ElTimePicker)
    Vue.use(ElTimeSelect)
    Vue.use(ElDatePicker)
    Vue.use(ElBreadcrumb)
    Vue.use(ElBreadcrumbItem)
  }
}

export default elementPlus