import instance from "./axios";
export const getUserinfo = (data)=> {
   return instance({
        method: 'post',
        url: '/login',
        data
    })
}