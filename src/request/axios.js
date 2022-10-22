import axios from "axios";
import { message } from 'ant-design-vue'
import 'ant-design-vue/es/message/style/css'

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASEURL,
    timeout: 5 * 1000
})
// 请求前
instance.interceptors.request.use(
    (config) => {
        return config
    },
    (err) => {
        console.log(err)
    }
)
// 请求后
instance.interceptors.response.use(
    (response) => {
        if (response.status === 200 && response.statusText === "OK") {
            if (!response.data.data.code) {
                message.error(response.data.data.message)
            }
            return response.data.data
        }
    }
)

export default instance