import * as actionTypes from './constants'
import {
    getSongList,
    getDurationTime,
    getSongPlayerUrl
} from '@/services/player'

// 在此文件内使用的action
const changeSongListAction = (res) => ({
    type: actionTypes.CHANGE_SONG_LIST,
    songList: res.result
})

const changeSongPlayerUrlAction = (res) => ({
    type: actionTypes.CHANGE_SONG_PLAYER_URL,
    songPlayUrl: res.data[0].url
})


//  导出的action


export const changeSongDurationTimeAction = (dt) => ({
    type: actionTypes.CHANGE_SONG_DURATION_TIME,
    songDurationTime: dt
})

//  修改播放列表
export const changePlayListAction = (playList) => ({
    type: actionTypes.CHANGE_PLAY_LIST,
    playList: playList
})

export const changeCurrentPlayIndexAction = (currentPlayIndex) => ({
    type: actionTypes.CHANGE_CURRENT_PLAY_INDEX,
    currentPlayIndex: currentPlayIndex
})


// 获取歌单信息用于展示
export const getSongListAction = (limit) => {
    return dispatch => {
        getSongList(limit).then(res => {
            dispatch(changeSongListAction(res))
        })
    }
}

//  根据id获取歌曲详情
export const getSongDurationTimeAction = (ids) => {
    return dispatch => {
        getDurationTime(ids).then(res => {
            // 获取歌曲总时长
            dispatch(changeSongDurationTimeAction(res.songs[0].dt))
        })
    }
}

//  点击歌曲后，根据id获取歌曲播放路径，并将歌曲添加到播放列表
export const getSongPlayerUrlAction = (id) => {
    return (dispatch, getState) => {
        getSongPlayerUrl(id).then(res => {
            //  获取歌曲播放路径
            dispatch(changeSongPlayerUrlAction(res))

            // 将歌曲播放的url添加到播放列表
            const plist = getState().getIn(['player', 'playList'])
            const url = getState().getIn(['player', 'songPlayUrl'])
            const dt = getState().getIn(['player', 'songDurationTime'])
            const playlist = [...plist]

            //  判断当前播放列表中是否含有该歌曲
            let index = playlist.findIndex(item => item.url === url)
            if (index < 0) {   // 不存在则添加到播放列表
                playlist.push({ url: url, dt: dt })
                dispatch(changePlayListAction(playlist))
                dispatch(changeCurrentPlayIndexAction(playlist.length - 1))
            } else {        // 存在则修改当前播放的currentPlayIndex
                dispatch(changeCurrentPlayIndexAction(index))
            }
        })
    }
}

