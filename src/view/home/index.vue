<template>
  <div class="wrap">
    <div v-lazy-container="{ selector: 'img' }">
      <img
        v-for="(item, index) in imagedata"
        :key="index"
        :data-src="item.img"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import { getImage } from "@/request/requestAPI.js";
import { onMounted, reactive, ref } from "@vue/runtime-core";
import { message } from "ant-design-vue";
let imagedata = ref([]);
let imgwrap = ref("wrap");
const getImages = () => {
  getImage({ id: 1 }).then((res) => {
    if (res.code === 200) {
      imagedata.value = res.img;
    }
  });
};
getImages();

// import { vFocus } from "@/static/js/directive";
// import { ref } from "@vue/reactivity";
// const los = ref("");
// console.log(vFocus);

// const btn = () => {
//   vFocus.setss(los);
// };
</script>

<style lang="scss">
.wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
  flex-grow: 0;
  > div {
    width: 200px;
    height: 200px;
    img {
      display: block;
      width: 200px;
      height: 200px;
    }
  }
}
</style>