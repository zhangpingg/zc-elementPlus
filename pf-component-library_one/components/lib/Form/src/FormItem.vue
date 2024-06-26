<template>
  <form
    class="pf-form-item"
    :class="{
      'is-error': validateStatus.state === 'error',
      'is-success': validateStatus.state === 'success',
      'is-loading': validateStatus.loading,
      'is-required': isRequired
    }"
  >
    <label class="pf-form-item__label">
      <slot name="label" :label="label">
        {{ label }}
      </slot>
    </label>
    <div class="pf-form-item__content">
      <slot :validate="validate" />
      <div
        class="pf-form-item__error-msg"
        v-if="validateStatus.state === 'error'"
      >
        {{ validateStatus.errorMsg }}
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import {
  computed,
  inject,
  reactive,
  provide,
  onMounted,
  onUnmounted
} from 'vue'
import Schema from 'async-validator'
import type {
  FormItemProps,
  FormValidateFailure,
  FormItemContext,
  ValidateStatusProp,
  FormItemInstance
} from './types'
import { formContextKey, formItemContextKey } from './types'
import { isNil } from 'lodash-es'

defineOptions({
  name: 'PfFormItem'
})

const props = defineProps<FormItemProps>()

const formContext = inject(formContextKey) // 注入父表单组件上下文
const innerValue = computed(() => {
  const model = formContext?.model
  if (model && props.prop && !isNil(model[props.prop])) {
    return model[props.prop]
  } else {
    return null
  }
})

// 校验状态
const validateStatus: ValidateStatusProp = reactive({
  state: 'init',
  errorMsg: '',
  loading: false
})

let initialValue: string | null = null

// 获取表单项的校验规则
const itemRules = computed(() => {
  const rules = formContext?.rules
  if (rules && props.prop && rules[props.prop]) {
    return rules[props.prop]
  } else {
    return []
  }
})

// 获取触发校验的规则
const getTriggeredRules = (trigger?: string) => {
  const rules = itemRules.value
  if (rules) {
    return rules.filter((rule) => {
      if (!rule.trigger || !trigger) return true
      return rule.trigger && rule.trigger === trigger
    })
  } else {
    return []
  }
}

// 是否必填
const isRequired = computed(() => {
  return itemRules.value.some((rule) => rule.required)
})

// 校验表单项
const validate = async (trigger?: string) => {
  const modelName = props.prop
  const triggerRules = getTriggeredRules(trigger)
  if (triggerRules.length === 0) {
    return true
  }
  if (modelName) {
    const validator = new Schema({
      [modelName]: triggerRules
    })
    validateStatus.loading = true
    return validator
      .validate({
        [modelName]: innerValue.value
      })
      .then(() => {
        validateStatus.state = 'success'
      })
      .catch((e: FormValidateFailure) => {
        const { errors } = e
        validateStatus.state = 'error'
        validateStatus.errorMsg =
          errors && errors.length > 0 ? errors[0].message || '' : ''
        return Promise.reject(e)
      })
      .finally(() => {
        validateStatus.loading = false
      })
  }
}

// 清楚校验状态
const clearValidate = () => {
  validateStatus.state = 'init'
  validateStatus.errorMsg = ''
  validateStatus.loading = false
}

// 重置表单项
const resetField = () => {
  clearValidate()
  const model = formContext?.model
  if (model && props.prop && !isNil(model[props.prop])) {
    model[props.prop] = initialValue
  }
}

// 提供子组件的上下文
const context: FormItemContext = {
  validate,
  prop: props.prop || '',
  resetField,
  clearValidate
}
provide(formItemContextKey, context)

// 组件挂载时添加字段
onMounted(() => {
  if (props.prop) {
    formContext?.addField(context)
    initialValue = innerValue.value
  }
})

// 组件卸载时移除字段
onUnmounted(() => {
  if (props.prop) {
    formContext?.removeField(context)
  }
})

// 公开给外部的使用方法
defineExpose<FormItemInstance>({
  validateStatus,
  validate,
  resetField,
  clearValidate
})
</script>
