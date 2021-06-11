import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
    songList: [],
    songDurationTime: 0,
    songPlayUrl: '111',
    playList: [],
    currentPlayIndex: 0
})

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_SONG_LIST:
            return state.set('songList', action.songList)
        case actionTypes.CHANGE_SONG_DURATION_TIME:
            return state.set('songDurationTime', action.songDurationTime)
        case actionTypes.CHANGE_SONG_PLAYER_URL:
            return state.set('songPlayUrl', action.songPlayUrl)
        case actionTypes.CHANGE_PLAY_LIST:
            return state.set('playList', action.playList)
        case actionTypes.CHANGE_CURRENT_PLAY_INDEX:
            return state.set('currentPlayIndex', action.currentPlayIndex)
        default:
            return state
    }
}