<template>
  <div class="wrap">
    <h1 @click="goHome">login</h1>
    <h1>{{ data.name }}</h1>
  </div>
</template>

<script setup>
import { getUserinfo } from "@/request/requestAPI.js";
import { reactive, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
const router = useRouter();

// const data = ref({});
const data = reactive({ name: "", age: "" });
// getUserinfo({ userName: "1796259615", passwrod: 3254 }).then((res) => {
//   // data.value = res.data
//   //  data = res.data
//  Object.assign(data, res.data)
// });
 function ds() {
  const res =   getUserinfo({ userName: "1796259615", passwrod: 3254 })
  console.log(res);
  Object.assign(data,res.data)
}
  
const goHome = () => {
  router.push({ name: "Home" });
};
</script>

<style lang="scss">
.wrap {
  width: 500px;
  height: 500px;
  background: red;
  h1 {
    color: aqua;
  }
}
</style>