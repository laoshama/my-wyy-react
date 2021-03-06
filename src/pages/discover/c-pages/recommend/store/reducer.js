import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
    topBanners: [],
    hotRecommends: [],
    newAlbums: [],
    rankings: []
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BANNERS:
            return state.set('topBanners', action.topBanners)
        case actionTypes.CHANGE_HOT_RECOMMENDS:
            return state.set('hotRecommends', action.hotRecommends)
        case actionTypes.CHANGE_NEWALBUMS:
            return state.set('newAlbums', action.newAlbums)
        case actionTypes.CHANGE_RANKING:
            return state.set('rankings', action.rankings)
        default:
            return state
    }
}

export default reducer