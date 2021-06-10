import * as actionTypes from './constants'

import {
    getTopBanners,
    getHotRecommends,
    getNewAlbums,
    getRanking
} from '@/services/recommend'

const changeTopBanenrAction = (res) => ({
    topBanners: res.banners,
    type: actionTypes.CHANGE_TOP_BANNERS
})

const changeHotRecommendsAction = (res) => ({
    hotRecommends: res.result,
    type: actionTypes.CHANGE_HOT_RECOMMENDS
})

const changetNewAlbumsAction = (res) => ({
    newAlbums: res.weekData,
    type: actionTypes.CHANGE_NEWALBUMS
})

const changeRankingAction = (res) => ({
    rankings: res.list,
    type: actionTypes.CHANGE_RANKING
})



export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res => {
            dispatch(changeTopBanenrAction(res))
        })
    }
}


export const getHotRecommendsAction = (limit) => {
    return dispatch => {
        getHotRecommends(limit).then(res => {
            dispatch(changeHotRecommendsAction(res))
        })
    }
}

export const getNewAlbumsAction = (limit) => {
    return dispatch => {
        getNewAlbums(limit).then(res => {
            dispatch(changetNewAlbumsAction(res))
        })
    }
}

export const getRankingAction = () => {
    return dispatch => {
        
        getRanking().then(res => {
            dispatch(changeRankingAction(res))
        })
    }
}