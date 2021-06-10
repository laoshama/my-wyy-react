import React, { memo, useState, useCallback, useRef } from 'react'
import moment from 'moment'

import { FormatSongTime } from '@/utils/format_util'

import { Slider } from 'antd'

import { LSPlayerWrapper } from './style'

export default memo(function LSPlayer() {
    //  state and props
    const totalTime = 273666
    const audioRef = useRef()
    const [currentTime, setCurrentTime] = useState(0)
    const [progress, setProgress] = useState(0)
    const [isSliding, setIsSliding] = useState(false)

    //  other handle
    const playSong = () => {
        audioRef.current.src = "http://m8.music.126.net/20210610163949/f50cccd2e38d834dee63e95c30593488/ymusic/3894/50e9/9cba/9c79d76e2f32585833558ff06ea902d9.mp3"
        audioRef.current.play()
    }

    const stopPlaySong = () => {
        audioRef.current.pause()
    }

    const changeCurrentTime = useCallback((e) => {
        let currentTime = Math.floor(audioRef.current.currentTime)
        if (!isSliding) {
            setCurrentTime(currentTime)
            setProgress(currentTime / (totalTime / 1000) * 100)
            console.log('没滑动时被执行了')
        }
    }, [isSliding])

    const ChangeSlider = useCallback((value) => {
        setIsSliding(true)
        setProgress(value)
        console.log('正在滑动')
    }, [])

    const afterChange = useCallback((value) => {
        setIsSliding(false)
        setProgress(value)
        audioRef.current.currentTime = value / 100 * totalTime / 1000
        console.log('滑动结束')
    }, [])

    return (
        <LSPlayerWrapper>
            <Slider className="wrap-v2"
                defaultValue={30}
                value={progress}
                onChange={ChangeSlider}
                onAfterChange={afterChange} />
            <audio ref={audioRef} onTimeUpdate={changeCurrentTime} />
            <button onClick={e => playSong()}>播放</button>
            <button onClick={e => stopPlaySong()}>暂停</button>
            <span className="currentTime">{FormatSongTime(currentTime)}</span>
            <span className="totalTime">{moment.utc(totalTime).format('mm:ss')}</span>
        </LSPlayerWrapper>
    )
})
