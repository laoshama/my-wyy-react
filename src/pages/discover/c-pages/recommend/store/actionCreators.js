import * as actionTypes from './constants'

import { getTopBanners } from '@/services/recommend'

const changeTopBanenrAction = (res) => ({
    topBanners: res.banners,
    type: actionTypes.CHANGE_TOP_BANNERS
})


export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res => {
            dispatch(changeTopBanenrAction(res))
        })
    }
}