<template>
  <el-radio-group v-bind="$attrs" :size="size">
    <slot>
      <component
        v-for="(item, index) in options"
        v-bind="item"
        :is="radioType"
        :key="index"
        :value="item[optionsProps.value]"
        :border="border"
        :disabled="item[optionsProps.disabled]"
      >
        <slot :name="item.slot" v-bind="item">
          {{ item[optionsProps.label] }}
        </slot>
      </component>
    </slot>
  </el-radio-group>
</template>

<script setup lang="ts" name="TRadio">
import { computed, ref } from "vue"
import type { PropType } from "vue"
import type { OptionsProps } from "./radio"
const radioProps = defineProps({
  type: {
    type: String as PropType<"radio" | "button">,
    validator: (value: string) => ["radio", "button"].includes(value),
    default: "radio"
  },
  options: {
    type: Array as unknown as any[],
    default: () => []
  },
  size: {
    type: String as PropType<"large" | "default" | "small">,
    validator: (value: string) => ["large", "default", "small"].includes(value),
    default: "default"
  },
  border: {
    type: Boolean,
    default: false
  },
  props: {
    type: Object,
    default: () => ({})
  }
})
const radioType = computed(() => {
  const obj = {
    radio: "el-radio",
    button: "el-radio-button"
  }
  return obj[radioProps.type] ?? "el-radio"
})
const optionsProps = ref<OptionsProps>({
  ...{
    value: "value",
    label: "label",
    disabled: "disabled"
  },
  ...radioProps.props
})
</script>
