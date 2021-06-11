import request from './request'


export const getSongList = (limit) => {
    return request({
        url: '/personalized/newsong',
        params: {
            limit
        }
    })
}

export const getDurationTime = (ids) => {
    return request({
        url: `/song/detail?ids=${ids}`
    })
}

export const getSongPlayerUrl = (id) => {
    return request({
        url: `song/url?id=${id}`
    })
}