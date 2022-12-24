<template>
  <div class="no">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
      <polygon
        points="100,10 40,180 190,60 10,60 160,180"
        style="fill: lime; stroke: purple; stroke-width: 5; fill-rule: evenodd"
      />
    </svg>
  </div>
</template>

<script setup>
let a = 1
const fn = function(){
  let a  = 2
}
console.log(fn())

const obj = {a:1}
console.log(obj.__proto__);
</script>

<style lang="scss">
@import "../../static/bac.scss";
.no {
  width: 100%;
  height: 100%;
  background: $background;
}
</style>