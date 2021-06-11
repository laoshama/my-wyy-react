import React, { memo, useState, useCallback, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import moment from 'moment'

import {
    FormatSongTime,
    getRandomNum
} from '@/utils/format_util'
import {
    changeCurrentPlayIndexAction,
    changeSongDurationTimeAction
} from '../player/store/actionCreators'

import { Slider } from 'antd'
import LSSongList from './c-pages/song-list'

import { LSPlayerWrapper } from './style'

export default memo(function LSPlayer() {
    //  state and props
    const audioRef = useRef()
    const [currentTime, setCurrentTime] = useState(0)
    const [progress, setProgress] = useState(0)
    const [isSliding, setIsSliding] = useState(false)
    const [playOrder, setPlayOrder] = useState(0)
    const playStyle = ['顺序播放', '单曲循环', '随机播放']

    // redux hooks
    const dispatch = useDispatch()
    const {
        songDurationTime,
        playList,
        currentPlayIndex
    } = useSelector(state => ({
        songDurationTime: state.getIn(['player', 'songDurationTime']),
        songPlayUrl: state.getIn(['player', 'songPlayUrl']),
        playList: state.getIn(['player', 'playList']),
        currentPlayIndex: state.getIn(['player', 'currentPlayIndex'])
    }), shallowEqual)

    // other hooks
    const changeCurrentTime = useCallback((e) => {
        let currentTime = Math.floor(audioRef.current.currentTime)
        if (!isSliding) {
            setCurrentTime(currentTime)
            setProgress(currentTime / (songDurationTime / 1000) * 100)
        }
    }, [isSliding, songDurationTime])

    const ChangeSlider = useCallback((value) => {
        setIsSliding(true)
        setProgress(value)
    }, [])

    const afterChange = useCallback((value) => {
        setIsSliding(false)
        setProgress(value)
        audioRef.current.currentTime = value / 100 * songDurationTime / 1000
    }, [songDurationTime])

    //  other handle
    const playSong = useCallback((clientUrl) => {
        audioRef.current.src = clientUrl
        audioRef.current.play()
    }, [])

    const stopPlaySong = useCallback(() => {
        audioRef.current.pause()
    }, [])

    //  播放上一曲
    const prev = useCallback(() => {
        if (playList.length === 0) return
        if (currentPlayIndex > 0) {
            dispatch(changeCurrentPlayIndexAction(currentPlayIndex - 1))
            dispatch(changeSongDurationTimeAction(playList[currentPlayIndex - 1].dt))
        } else {
            dispatch(changeCurrentPlayIndexAction(playList.length - 1))
            dispatch(changeSongDurationTimeAction(playList[playList.length - 1].dt))
        }
        audioRef.current.src = playList[currentPlayIndex].url
        audioRef.current.play()
    }, [currentPlayIndex, playList, dispatch])


    //  播放下一曲
    const next = useCallback(() => {
        if (playList.length === 0) return

        if (playOrder === 2) {  // 随机播放
            const index = getRandomNum(playList.length)
            dispatch(changeCurrentPlayIndexAction(index))
            dispatch(changeSongDurationTimeAction(playList[index].dt))
            audioRef.current.src = playList[index].url
            audioRef.current.play()
            return
        }

        //  顺序播放
        if (currentPlayIndex < playList.length - 1) {
            dispatch(changeCurrentPlayIndexAction(currentPlayIndex + 1))
            dispatch(changeSongDurationTimeAction(playList[currentPlayIndex + 1].dt))
        } else {
            dispatch(changeCurrentPlayIndexAction(0))
            dispatch(changeSongDurationTimeAction(playList[0].dt))
        }
        audioRef.current.src = playList[currentPlayIndex].url
        audioRef.current.play()
    }, [currentPlayIndex, playList, playOrder, dispatch])


    const songEndHandle = useCallback(() => {
        if (playOrder === 1) {  //  单曲循环，当前歌曲播放完成后，使用audio的回调函数将歌曲时间重置为0
            setCurrentTime(0)
            audioRef.current.play()
        } else if (playOrder === 2) {  // 随机播放
            const index = getRandomNum(playList.length)
            dispatch(changeCurrentPlayIndexAction(index))
            dispatch(changeSongDurationTimeAction(playList[index].dt))
            audioRef.current.src = playList[index].url
            audioRef.current.play()
        } else {    // 顺序播放
            next()
        }
    }, [playOrder, next, dispatch, playList])

    const changePlayStyle = useCallback(() => {
        if (playOrder >= 2) {
            setPlayOrder(0)
        } else {
            setPlayOrder(playOrder + 1)
        }
    }, [playOrder])


    return (
        <LSPlayerWrapper>
            <LSSongList playSong={playSong} />
            <Slider className="wrap-v2"
                defaultValue={30}
                value={progress}
                onChange={ChangeSlider}
                onAfterChange={afterChange} />
            <audio ref={audioRef}
                onTimeUpdate={changeCurrentTime}
                onEnded={songEndHandle}
            />
            <button onClick={e => playSong()}>播放</button>
            <button onClick={e => stopPlaySong(playList[currentPlayIndex].url)}>暂停</button>
            <button onClick={e => prev()}>上一曲</button>
            <button onClick={e => next()}>下一曲</button>
            <span className="currentTime">{FormatSongTime(currentTime)}</span>
            <span className="totalTime">{moment.utc(songDurationTime).format('mm:ss')}</span>
            <span>播放列表歌曲数量：{playList.length}</span>
            <span onClick={changePlayStyle}>播放模式：{playStyle[playOrder]}</span>
        </LSPlayerWrapper>
    )
})
