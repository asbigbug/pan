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
        url: '/test/image',
        params: data
    })
}

export const koaImage = data => {
    return instance({
        method: 'post',
        url: '/api/images/los',
        data
    })
}