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
    <div>lol</div>
    <a-button @click="check"> 换肤 </a-button>
    <div class="ppp" @click="tono"></div>
    {{ newsletterPopup }}
  </div>
</template>

<script setup>
import { getImage } from "@/request/requestAPI.js";
import { onMounted, reactive, ref } from "@vue/runtime-core";
import { message } from "ant-design-vue";
import { useRoute, useRouter } from "vue-router";
import { defineProps } from "vue";
const ROUTE = useRoute();
// 定义路由
const ROUTER = useRouter();
// 图片容器
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

// 换肤
const check = () => {
  document
    .getElementsByTagName("body")[0]
    .style.setProperty("--test", "yellow");
};
// 去404
const tono = () => {
  ROUTER.push({ name: "Notfind" });
  // ROUTER.pushState({name: 'Notfind'})
};
// 路由配置props参数
// defineProps(['newsletterPopup']);
const props = defineProps({
  newsletterPopup: Boolean,
});
console.log(props.newsletterPopup);
// import { vFocus } from "@/static/js/directive";
// import { ref } from "@vue/reactivity";
// const los = ref("");
// console.log(vFocus);

// const btn = () => {
//   vFocus.setss(los);
// };
</script>

<style lang="scss">
@import "@/static/bac.scss";
$llk: "red";
.wrap {
  background: $background;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-shrink: 0;
  flex-grow: 0;
  > div {
    width: 200px;
    img {
      display: block;
      width: 200px;
      height: 200px;
    }
  }
  .ppp {
    width: 200px;
    height: 200px;
    background: $background;
  }
}
</style>
