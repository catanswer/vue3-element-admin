<template>
  <el-form
    :model="form"
    :rules="options.rules"
    :label-width="options.labelWidth"
    :hide-required-asterisk="options.hideRequiredAsterisk || false"
    :show-message="options.showMessage"
    :inline-message="options.inlineMessage"
    :validate-on-rule-chang="options.validateOnRuleChange"
    :size="options.size"
    :disabled="options.disabled"
    class="smart-form"
  >
    <el-row :gutter="options.gutter || 10">
      <!-- 初始化展示的条件 -->
      <el-col
        v-for="item in data"
        :key="item.key"
        :span="options.colSpan || 6"
      >
        <el-form-item
          :label="item.label"
          :label-width="item.labelWidth"
          :prop="item.key"
          :rules="item.options.rules"
        >
          <el-input
            v-if="item.mode === 'input'"
            v-model="form[item.key]"
            :type="item.options.type"
            :show-word-limit="item.options.showWordLimit"
            :maxlength="item.options.maxlength"
            :minlength="item.options.minlength"
            :placeholder="item.options.placeholder"
            :clearable="item.options.clearable"
            :show-password="item.options.showPassword"
            :disabled="item.options.disabled"
            :size="item.options.size"
            :prefix-icon="item.options.prefixIcon"
            :suffix-icon="item.options.suffixIcon"
            :rows="item.options.rows"
            :autosize="item.options.autosize"
            :autocomplete="item.options.autocomplete"
            :name="item.options.name"
            :readonly="item.options.readonly"
            :max="item.options.max"
            :min="item.options.min"
            :step="item.options.step"
            :resize="item.options.resize"
            :autofocus="item.options.autofocus"
            :form="item.options.form"
            :label="item.options.label"
            :tabindex="item.options.tabindex"
            :validate-event="item.options.validateEvent"
          />
          <el-radio-group
            v-if="item.mode === 'radio'"
            v-model="form[item.key]"
            :size="item.options.size"
            :disabled="item.options.disabled"
            :text-color="item.options.textColor"
            :fill="item.options.fill"
          >
            <el-radio
              v-for="radio in item.options.directors"
              :key="radio.value"
              :label="radio.value"
              :disabled="radio.disabled"
            >
              {{ radio.label }}
            </el-radio>
          </el-radio-group>
          <el-checkbox-group
            v-if="item.mode === 'checkbox'"
            v-model="form[item.key]"
            :size="item.options.size"
            :disabled="item.options.disabled"
            :min="item.options.min"
            :max="item.options.max"
            :text-color="item.options.textColor"
            :fill="item.options.fill"
          >
            <el-checkbox
              v-for="checkbox in item.options.directors"
              :key="checkbox.value"
              :label="checkbox.label"
            />
          </el-checkbox-group>
          <el-select
            v-if="item.mode === 'select'"
            v-model="form[item.key]"
            :filterable="item.options.filterable"
            :disabled="item.options.disabled"
            :size="item.options.size"
            :clearable="item.options.clearable"
            :placeholder="item.options.placeholder"
          >
            <el-option
              v-for="select in item.options.directors"
              :key="select.value"
              :label="select.label"
              :value="select.value"
            >
            </el-option>
          </el-select>
          <el-time-picker
            v-if="item.mode ==='timePicker'"
            v-model="form[item.key]"
            :readonly="item.options.readonly"
            :disabled="item.options.disabled"
            :editable="item.options.editable"
            :clearable="item.options.clearable"
            :size="item.options.size"
            :disabled-hours="item.options.disabledHours"
            :disabled-minutes="item.options.disabledMinutes"
            :disabled-seconds="item.options.disabledSeconds"
            :placeholder="item.options.placeholder"
            :start-placeholder="item.options.startPlaceholder"
            :end-placeholder="item.options.endPlaceholder"
            :is-range="item.options.isRange"
            :arrow-control="item.options.arrowControl"
            :format="item.options.format || 'HH:mm:ss'"
            :popper-class="item.options.popperClass"
            :range-separator="item.options.rangeSeparator"
            :default-value="item.options.defaultValue"
            :prefix-icon="item.options.prefixIcon"
            :clear-icon="item.options.clearIcon"
          />
          <el-time-select
            v-if="item.mode === 'timeSelect'"
            v-model="form[item.key]"
            :start="item.options.start"
            :step="item.options.step"
            :end="item.options.end"
            :editable="item.options.editable"
            :clearable="item.options.clearable"
            :size="item.options.size"
            :prefix-icon="item.options.prefixIcon"
            :clear-icon="item.options.clearIcon"
            :placeholder="item.options.placeholder"
            :min-time="item.options.minTime"
            :max-time="item.options.maxTime"
          />
          <el-date-picker
            v-if="item.mode === 'datePicker'"
            v-model="form[item.key]"
            :type="item.options.type"
            :placeholder="item.options.placeholder"
            :editable="item.options.editable"
            :clearable="item.options.clearable"
            :size="item.options.size"
            :format="item.options.format || 'YYYY-MM-DD'"
            :popper-class="item.options.popperClass"
            :range-separator="item.options.rangeSeparator"
            :default-value="item.options.defaultValue"
            :default-time="item.options.defaultTime"
            :unlink-panels="item.options.unlinkPanels"
            :prefix-icon="item.options.prefixIcon"
            :clear-icon="item.options.clearIcon"
            :shortcuts="item.options.shortcuts"
            :disabledDate="item.options.disabledDate"
          />
          <el-switch
            v-if="item.mode === 'switch'"
            v-model="form[item.key]"
            :active-color="item.options.activeColor"
            :inactive-color="item.options.inactiveColor"
            :disabled="item.options.disabled"
            :loading="item.options.loading"
            :width="item.options.width"
            :active-icon-class="item.options.activeIconClass"
            :inactive-icon-class="item.options.inactiveIconClass"
            :active-text="item.options.activeText"
            :inactive-text="item.options.inactiveText"
            :active-value="item.options.activeValue"
            :inactive-value="item.options.inactiveValue"
          />
          <el-slider
            v-if="item.mode === 'slider'"
            v-model="form[item.key]"
            :min="item.options.min"
            :max="item.options.max"
            :disabled="item.options.disabled"
            :step="item.options.step"
            :show-input="item.options.showInput"
            :show-input-controls="item.options.showInputControls"
            :input-size="item.options.inputSize"
            :show-stops="item.options.showStops"
            :show-tooltip="item.options.showTooltip"
            :range="item.options.range"
            :vertical="item.options.vertical"
            :heigh="item.options.height"
            :label="item.options.label"
            :debounce="item.options.debounce"
            :tooltip-class="item.options.tooltipClass"
            :marks="item.options.marks"
          />
          <el-input-number
            v-if="item.mode === 'inputNumber'"
            v-model="form[item.key]"
            :min="item.options.min"
            :max="item.options.max"
            :step="item.options.step"
            :step-strictly="item.options.stepStrictly"
            :precision="item.options.precision"
            :size="item.options.size"
            :disabled="item.options.disabled"
            :controls="item.options.controls"
            :controls-position="item.options.controlsPosition"
            :placeholder="item.options.placeholder"
          />
          <el-cascader
            v-if="item.mode === 'cascader'"
            v-model="form[item.key]"
            :options="item.options.options"
            :props="item.options.props || { expandTrigger: 'hover' }"
            :size="item.options.size"
            :placeholder="item.options.placeholder"
            :disabled="item.options.disabled"
            :clearable="item.options.clearable"
            :show-all-levels="item.options.showAllLevels"
            :collapse-tags="item.options.collapseTags"
            :separator="item.options.separator"
            :filterable="item.options.filterable"
            :filter-method="item.options.filterMethod"
            :debounce="item.options.debounce"
            :before-filter="item.options.beforeFilter"
            :popper-class="item.options.popperClass"
          />
          <div class="samrt-color-picker" v-if="item.mode === 'colorPicker'">
            <el-color-picker
              v-if="item.mode === 'colorPicker'"
              v-model="form[item.key]"
              :disabled="item.options.disabled"
              :size="item.options.size"
              :show-alpha="item.options.showAlpha"
              :color-format	="item.options.colorFormat"
              :popper-class="item.options.popperClass"
              :predefine="item.options.predefine"
            />
            <el-input
              v-if="item.mode === 'colorPicker'"
              v-model="form[item.key]"
              :disabled="item.options.disabled"
              :size="item.options.size"
            />
          </div>
        </el-form-item>
      </el-col>
      <!-- 额外的搜索条件 -->
      <template v-if="extraVis">
        <el-col
          v-for="item in extraData"
          :key="item.key"
          :span="options.colSpan || 6"
        >
          <el-form-item
            :label="item.label"
            :label-width="item.labelWidth"
            :prop="item.key"
            :rules="item.options.rules"
          >
          <el-input
            v-if="item.mode === 'input'"
            v-model="form[item.key]"
            :type="item.options.type"
            :show-word-limit="item.options.showWordLimit"
            :maxlength="item.options.maxlength"
            :minlength="item.options.minlength"
            :placeholder="item.options.placeholder"
            :clearable="item.options.clearable"
            :show-password="item.options.showPassword"
            :disabled="item.options.disabled"
            :size="item.options.size"
            :prefix-icon="item.options.prefixIcon"
            :suffix-icon="item.options.suffixIcon"
            :rows="item.options.rows"
            :autosize="item.options.autosize"
            :autocomplete="item.options.autocomplete"
            :name="item.options.name"
            :readonly="item.options.readonly"
            :max="item.options.max"
            :min="item.options.min"
            :step="item.options.step"
            :resize="item.options.resize"
            :autofocus="item.options.autofocus"
            :form="item.options.form"
            :label="item.options.label"
            :tabindex="item.options.tabindex"
            :validate-event="item.options.validateEvent"
          />
          <el-radio-group
            v-if="item.mode === 'radio'"
            v-model="form[item.key]"
            :size="item.options.size"
            :disabled="item.options.disabled"
            :text-color="item.options.textColor"
            :fill="item.options.fill"
          >
            <el-radio
              v-for="radio in item.options.directors"
              :key="radio.value"
              :label="radio.value"
              :disabled="radio.disabled"
            >
              {{ radio.label }}
            </el-radio>
          </el-radio-group>
          <el-checkbox-group
            v-if="item.mode === 'checkbox'"
            v-model="form[item.key]"
            :size="item.options.size"
            :disabled="item.options.disabled"
            :min="item.options.min"
            :max="item.options.max"
            :text-color="item.options.textColor"
            :fill="item.options.fill"
          >
            <el-checkbox
              v-for="checkbox in item.options.directors"
              :key="checkbox.value"
              :label="checkbox.label"
            />
          </el-checkbox-group>
          <el-select
            v-if="item.mode === 'select'"
            v-model="form[item.key]"
            :filterable="item.options.filterable"
            :disabled="item.options.disabled"
            :size="item.options.size"
            :clearable="item.options.clearable"
            :placeholder="item.options.placeholder"
          >
            <el-option
              v-for="select in item.options.directors"
              :key="select.value"
              :label="select.label"
              :value="select.value"
            >
            </el-option>
          </el-select>
          <el-time-picker
            v-if="item.mode ==='timePicker'"
            v-model="form[item.key]"
            :readonly="item.options.readonly"
            :disabled="item.options.disabled"
            :editable="item.options.editable"
            :clearable="item.options.clearable"
            :size="item.options.size"
            :disabled-hours="item.options.disabledHours"
            :disabled-minutes="item.options.disabledMinutes"
            :disabled-seconds="item.options.disabledSeconds"
            :placeholder="item.options.placeholder"
            :start-placeholder="item.options.startPlaceholder"
            :end-placeholder="item.options.endPlaceholder"
            :is-range="item.options.isRange"
            :arrow-control="item.options.arrowControl"
            :format="item.options.format || 'HH:mm:ss'"
            :popper-class="item.options.popperClass"
            :range-separator="item.options.rangeSeparator"
            :default-value="item.options.defaultValue"
            :prefix-icon="item.options.prefixIcon"
            :clear-icon="item.options.clearIcon"
          />
          <el-time-select
            v-if="item.mode === 'timeSelect'"
            v-model="form[item.key]"
            :start="item.options.start"
            :step="item.options.step"
            :end="item.options.end"
            :editable="item.options.editable"
            :clearable="item.options.clearable"
            :size="item.options.size"
            :prefix-icon="item.options.prefixIcon"
            :clear-icon="item.options.clearIcon"
            :placeholder="item.options.placeholder"
            :min-time="item.options.minTime"
            :max-time="item.options.maxTime"
          />
          <el-date-picker
            v-if="item.mode === 'datePicker'"
            v-model="form[item.key]"
            :type="item.options.type"
            :placeholder="item.options.placeholder"
            :editable="item.options.editable"
            :clearable="item.options.clearable"
            :size="item.options.size"
            :format="item.options.format || 'YYYY-MM-DD'"
            :popper-class="item.options.popperClass"
            :range-separator="item.options.rangeSeparator"
            :default-value="item.options.defaultValue"
            :default-time="item.options.defaultTime"
            :unlink-panels="item.options.unlinkPanels"
            :prefix-icon="item.options.prefixIcon"
            :clear-icon="item.options.clearIcon"
            :shortcuts="item.options.shortcuts"
            :disabledDate="item.options.disabledDate"
          />
          <el-switch
            v-if="item.mode === 'switch'"
            v-model="form[item.key]"
            :active-color="item.options.activeColor"
            :inactive-color="item.options.inactiveColor"
            :disabled="item.options.disabled"
            :loading="item.options.loading"
            :width="item.options.width"
            :active-icon-class="item.options.activeIconClass"
            :inactive-icon-class="item.options.inactiveIconClass"
            :active-text="item.options.activeText"
            :inactive-text="item.options.inactiveText"
            :active-value="item.options.activeValue"
            :inactive-value="item.options.inactiveValue"
          />
          <el-slider
            v-if="item.mode === 'slider'"
            v-model="form[item.key]"
            :min="item.options.min"
            :max="item.options.max"
            :disabled="item.options.disabled"
            :step="item.options.step"
            :show-input="item.options.showInput"
            :show-input-controls="item.options.showInputControls"
            :input-size="item.options.inputSize"
            :show-stops="item.options.showStops"
            :show-tooltip="item.options.showTooltip"
            :range="item.options.range"
            :vertical="item.options.vertical"
            :heigh="item.options.height"
            :label="item.options.label"
            :debounce="item.options.debounce"
            :tooltip-class="item.options.tooltipClass"
            :marks="item.options.marks"
          />
          <el-input-number
            v-if="item.mode === 'inputNumber'"
            v-model="form[item.key]"
            :min="item.options.min"
            :max="item.options.max"
            :step="item.options.step"
            :step-strictly="item.options.stepStrictly"
            :precision="item.options.precision"
            :size="item.options.size"
            :disabled="item.options.disabled"
            :controls="item.options.controls"
            :controls-position="item.options.controlsPosition"
            :placeholder="item.options.placeholder"
          />
          <el-cascader
            v-if="item.mode === 'cascader'"
            v-model="form[item.key]"
            :options="item.options.options"
            :props="item.options.props || { expandTrigger: 'hover' }"
            :size="item.options.size"
            :placeholder="item.options.placeholder"
            :disabled="item.options.disabled"
            :clearable="item.options.clearable"
            :show-all-levels="item.options.showAllLevels"
            :collapse-tags="item.options.collapseTags"
            :separator="item.options.separator"
            :filterable="item.options.filterable"
            :filter-method="item.options.filterMethod"
            :debounce="item.options.debounce"
            :before-filter="item.options.beforeFilter"
            :popper-class="item.options.popperClass"
          />
          <div class="samrt-color-picker" v-if="item.mode === 'colorPicker'">
            <el-color-picker
              v-if="item.mode === 'colorPicker'"
              v-model="form[item.key]"
              :disabled="item.options.disabled"
              :size="item.options.size"
              :show-alpha="item.options.showAlpha"
              :color-format	="item.options.colorFormat"
              :popper-class="item.options.popperClass"
              :predefine="item.options.predefine"
            />
            <el-input
              v-if="item.mode === 'colorPicker'"
              v-model="form[item.key]"
              :disabled="item.options.disabled"
              :size="item.options.size"
            />
          </div>
          </el-form-item>
        </el-col>
      </template>
      <el-col :span="options.colSpan || 6">
        <el-form-item label-width="0">
          <el-button type="primary" @click="handleSubmit">查询</el-button>
          <el-button
            v-if="extraData && extraData.length > 0"
            plain
            :icon="extraVis ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"
            @click="handleToggle"
          >{{extraVis ? '收起' : '展开'}}</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup>
  import { defineEmit, defineProps, reactive, ref } from 'vue'

  const props = defineProps({
    options: {
      type: Object,
      default: () => {
        return {
          gutter: 10,
          colSpan: 6,
          rules: {},
          labelWidth: '80px',
          hideRequiredAsterisk: false,
          showMessage: true,
          inlineMessage: false,
          validateOnRuleChange: true,
          disabled: false
        }
      }
    },
    data: {
      type: Array,
      required: true
    },
    extraData: {
      type: Array
    }
  })
  const emits = defineEmit(['submit', 'toggle'])
  const extraVis = ref(false)

  // 初始化表单元素的值
  let form = reactive({})
  props.data.forEach(item => {
    const { key, options: { value } } = item
    form[key] = value
  })
  props.extraData.forEach(item => {
    const { key, options: { value } } = item
    form[key] = value
    if (value) extraVis.value = true
  })

  const handleSubmit = () => {
    emits('submit', form)
  }
  const handleToggle = () => {
    extraVis.value = !extraVis.value
    emits('toggle')
  }

  // form change
  const handleChange = (key) => {
    console.log('key: ', key);
  }
</script>

<style lang='scss' scoped>
  .smart-form {
    .el-form-item {
      margin-bottom: 16px;
    }
    .el-select {
      display: block;
      width: 100%;
    }
    :deep(.el-date-editor) {
      width: 100% !important
    }
    :deep(.el-slider__button-wrapper) {
      height: 32px;
      top: -14px;
    }
    :deep(.el-slider__input) {
      margin-top: 0px;
      
    }
    :deep(.el-input-number) {
      width: 100%;
      .el-input {
        line-height: 30px
      }
    }
    :deep(.el-slider__runway) {
      margin-top: 13px;
      margin-bottom: 13px;
    }
    :deep(.el-slider--with-input) {
      .el-input-number {
        width: 130px;
      }
      .el-slider__runway {
        margin: 13px 150px 13px 10px;
      }
    }
    :deep(.el-cascader) {
      width: 100%;
    }
    .samrt-color-picker {
      :deep(.el-input) {
        display: block;
        width: auto;
        margin-right: 40px;
      }
      :deep(.el-color-picker) {
        float: right;
      }
    }
  }
</style>
