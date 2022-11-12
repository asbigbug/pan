<template>
  <div class="login">
    <div class="getinfo">
      <a-form :model="formState">
        <a-form-item>
          <a-input v-model:value="formState.userName" placeholder="用户名">
            <template #prefix>
              <user-outlined type="user" />
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
import { UserOutlined, EyeInvisibleOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { getUserinfo } from "@/request/requestAPI";
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
const login = () => {
  if (!formState.userName && !formState.password) {
    message.error("用户名或密码不能为空");
    return;
  }
  setBtn.loading = true;
  setBtn.text = "";
  getUserinfo(formState).then((res) => {
    if (res.code === 200) {
      message.success(res.message);
      ROUTER.push("Home");
    } else {
      setBtn.text = "登录";
      setBtn.loading = false;
    }
    console.log(111);
  });
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
  .getinfo {
    width: 70%;
    margin: 0 auto;
    margin-top: 45%;
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