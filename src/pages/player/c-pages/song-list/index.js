import React, { Fragment, memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getSongPlayerUrl } from '@/services/player'
import { getSizeIamge } from '@/utils/format_util'
import {
    getSongListAction,
    getSongDurationTimeAction,
    getSongPlayerUrlAction,
} from '../../store/actionCreators'

import { SongListWrapper } from './style'

export default memo(function SongList(props) {
    // state and props
    const { playSong } = props

    // redux hooks
    const songList = useSelector(state => state.getIn(['player', 'songList']),shallowEqual)
    // const songPlayUrl = useSelector(state => state.getIn(['player', 'songPlayUrl']))
    const dispatch = useDispatch()

    // other hooks
    useEffect(() => {
        dispatch(getSongListAction(10))
    }, [dispatch])

    // other handle
    const itemClickHandle = (id) => {
        dispatch(getSongDurationTimeAction(id))
        dispatch(getSongPlayerUrlAction(id))
        getSongPlayerUrl(id).then(res=>{
            playSong(res.data[0].url)
        })
    }

    return (
        <SongListWrapper className='wrap-v2'>
            <div className="songWrapper">
                {
                    songList && songList.map(item => {
                        return (
                            <Fragment key={item.id}>
                                <div className="song-item" onClick={e => itemClickHandle(item.id)}>
                                    <img src={getSizeIamge(item.picUrl, 40)} alt={item.picUrl} />
                                    <span className="song-name text-nowrap">{item.name}</span>
                                </div>
                            </Fragment>
                        )
                    })
                }
            </div>
        </SongListWrapper>
    )
})
