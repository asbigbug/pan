<template>
  <div @click="test">我是组件</div>
  <a-input v-model:value="data.firstName" placeholder="Basic usage" />
  <a-input v-model:value="data.lastName" placeholder="Basic usage" />
  <a-input v-model:value="data.nameIs" />
</template>
<script>
import { computed, reactive } from "@vue/runtime-core";
export default {
  name: "Demo",
  props: ["message",],
  emits: ["mydo"],
  setup(props, context) {
    const data = reactive({
      firstName: "张",
      lastName: "三",
    });
    data.nameIs = computed({
      get() {
         return data.firstName + data.lastName
      },
      set(value){
        console.log(value);
          return value
      }
    });
    const test = () => {
      context.emit("mydo", '被传递的值');
    };
    return {
      data,
      test,
    };
  },
};
</script>

<style>
</style>