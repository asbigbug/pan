<template>
  <router-view />
</template>

<script setup>
import { useRouter } from "vue-router";
const ROUTER = useRouter();
if (!localStorage.getItem("token")) {
  ROUTER.push({ name: "Login" });
//   console.log(1.56);
}
</script>
