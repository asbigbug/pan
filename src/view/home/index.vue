<template>
  <div></div>
</template>

<script>
import { reactive, ref, toRefs } from '@vue/reactivity'
export default {
  name: 'Home',
  setup() {
    const num = 0

    const data = reactive({111})
    const age = ref(22)
    toRefs(num)
    console.log(num,age)
  }
}
</script>

<style>

</style>