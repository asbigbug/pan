<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <Transition>
      <component :is="Component"></component>
     </Transition>
    </keep-alive>
  </router-view>
</template>

<script>
</script>

<style >
* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
}
</style>