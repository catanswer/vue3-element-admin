import {
  ElCol,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElMenuItemGroup,
  ElButton,
  ElIcon,
  ELScrollbar,
  ElPopper,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElForm,
  ElFormItem,
  ElSelect,
  ElOption,
  ElInput,
  ElRadio,
  ElCheckboxGroup,
  ElCheckbox,
  ElSwitch,
  ElTimePicker
} from 'element-plus'

const elementPlus = {
  install(Vue) {
    Vue.use(ElCol)
    Vue.use(ElMenu)
    Vue.use(ElMenuItem)
    Vue.use(ElSubmenu)
    Vue.use(ElMenuItemGroup)
    Vue.use(ElButton)
    Vue.use(ElIcon)
    Vue.use(ELScrollbar)
    Vue.use(ElPopper)
    Vue.use(ElTable)
    Vue.use(ElTableColumn)
    Vue.use(ElPagination)
    Vue.use(ElForm)
    Vue.use(ElFormItem)
    Vue.use(ElSelect)
    Vue.use(ElOption)
    Vue.use(ElInput)
    Vue.use(ElRadio)
    Vue.use(ElCheckboxGroup)
    Vue.use(ElCheckbox)
    Vue.use(ElSwitch)
    Vue.use(ElTimePicker)
  }
}

export default elementPlus