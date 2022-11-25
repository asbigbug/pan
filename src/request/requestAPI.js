import instance from "./axios";
export const getUserinfo = (data) => {
    return instance({
        method: 'post',
        url: '/login',
        data
    })
}

export const getImage = (data) => {
    return instance({
        method: 'get',
        url: '/image',
        params: data
    })
}