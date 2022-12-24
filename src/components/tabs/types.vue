<template>
  <template v-if="types.includes(props.type)">
    <!-- 是否选中 -->
    <template v-if="type === 'checkbox'">
      <a-checkbox v-model:checked="value.checked">{{ value.name }}</a-checkbox>
    </template>

    <!-- 是否开关 -->
    <template v-if="type === 'switch'">
      <a-switch v-model:checked="value.checked"  />
    </template>

    <!-- 按钮 -->
    <template v-if="type === 'button'">
      <a-button type="primary">{{ value.text }}</a-button>
    </template>

  </template>
  <template v-else>
    <span> 类型定义错误 </span>
  </template>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["type", "value"]);
const types = ["checkbox", "switch", "button"];
</script>

<style>
</style>