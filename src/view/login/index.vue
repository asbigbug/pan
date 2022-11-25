<template>
  <div class="login">
    <div class="getinfo">
      <a-form :model="formState">
        <a-form-item>
          <a-input v-model:value="formState.userName" placeholder="用户名">
            <template #prefix>
              <user-outlined type="user" />
              <!-- <UserOutlined /> -->
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input v-model:value="formState.password" placeholder="密码">
            <template #prefix>
              <EyeInvisibleOutlined />
            </template>
          </a-input>
        </a-form-item>
      </a-form>
      <div class="btn">
        <a-button type="primary" @click="login" :loading="setBtn.loading">{{
          setBtn.text
        }}</a-button>
        <br />
        <a-button type="link">忘记密码</a-button>
        <a-button type="link">注册</a-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";
import { getUserinfo } from "@/request/requestAPI";
import { UserOutlined, EyeInvisibleOutlined } from "@ant-design/icons-vue";
import { defineComponent } from "@vue/runtime-core";
defineComponent({
  components: {
    UserOutlined,
    EyeInvisibleOutlined,
  },
});
const ROUTER = useRouter();
//  登录信息
let formState = reactive({
  userName: "",
  password: "",
});
// 登录按钮配置
let setBtn = reactive({
  loading: false,
  text: "登录",
});
//  登录按钮
let timer = ref(null);
const login = () => {
  if (!formState.userName && !formState.password) {
    message.error("用户名或密码不能为空");
    return;
  }
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    setBtn.loading = true;
    setBtn.text = "";
    getUserinfo(formState).then((res) => {
      if (res.code === 200) {
        message.success(res.message);
        localStorage.setItem("token", true);
        ROUTER.push({ name: "Home" });
      } else {
        setBtn.text = "登录";
        setBtn.loading = false;
      }
    });
  }, 1000);
};
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  // background-color: rgb(142, 216, 142);
  overflow: hidden;
  background-image: url(../../static/image/login.webp);
  background-size: 100% 100%;
  display: grid;
  align-items: center;

  .getinfo {
    width: 60%;
    margin: 0 auto;
  }
  .btn {
    .ant-btn {
      float: right;
      margin-top: 20px;
      &:nth-child(1) {
        width: 50%;
        font-weight: 700;
        margin-right: 50%;
        transform: translatex(50%);
      }
    }
  }
}
</style>