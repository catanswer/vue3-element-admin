<template>
  <el-form
    :model="form"
    :label-width="labelWidth"
    class="smart-form"
  >
    <el-row :gutter="gutter">
      <!-- 初始化展示的条件 -->
      <el-col
        v-for="item in data"
        :key="item.key"
        :span="colSpan"
      >
        <el-form-item :label="item.label" :label-width="item.labelWidth">
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
        </el-form-item>
      </el-col>
      <!-- 额外的搜索条件 -->
      <template v-if="extraVis">
        <el-col
          v-for="item in extraData"
          :key="item.key"
          :span="colSpan"
        >
          <el-form-item :label="item.label" :label-width="item.labelWidth">
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
          </el-form-item>
        </el-col>
      </template>
      <el-col :span="colSpan">
        <el-form-item label-width="0px">
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
  import QueryItem from './components/QueryItem/index.vue'

  const props = defineProps({
    gutter: {
      type: Number,
      default: 10,
    },
    colSpan: {
      type: Number,
      default: 6
    },
    labelWidth: {
      type: String,
      default: '80px'
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
    if (!extraVis.value) {
      props.extraData.forEach(item => {
        const { key } = item
        form[key] = ''
      })
    }
    emits('toggle')
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
  }
</style>
