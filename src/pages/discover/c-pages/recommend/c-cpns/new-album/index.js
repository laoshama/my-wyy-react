import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getNewAlbumsAction } from '../../store/actionCreators'
import { NEWALBUM_LIMIT } from '@/common/constant'

import { Carousel } from 'antd'
import LSRcmTheme from '@/components/rcm-theme'

import LSNewSongCoevr from '@/components/new-song-cover'

import { NewAlbumWrapper, BannerWrapper } from './style'

export default memo(function LSNewAlbum() {
    const newAlbums = useSelector(state => state.getIn(['recommend', 'newAlbums']), shallowEqual)
    const dispatch = useDispatch()

    const bannerRef = useRef()
    useEffect(() => {
        dispatch(getNewAlbumsAction(NEWALBUM_LIMIT))
    }, [dispatch])

    return (
        <NewAlbumWrapper>
            <LSRcmTheme theme='新碟上架' />
            <BannerWrapper>
                <Carousel autoplay ref={bannerRef}>
                    {
                        [0, 1].map(item => {
                            return (
                                <div key={item} className='banner-box'>
                                    {
                                        newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
                                            return <LSNewSongCoevr key={iten.picId}
                                                width={118}
                                                height={100}
                                                imgSize={100}
                                                bgp={-570}
                                                imgUrl={iten.blurPicUrl}
                                                name={iten.artists[0].name}
                                                title={iten.name}
                                            />
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </Carousel>
                <div className="control-left sprite_02" onClick={e => bannerRef.current.prev()}></div>
                <div className="control-right sprite_02" onClick={e => bannerRef.current.next()}></div>
            </BannerWrapper>
        </NewAlbumWrapper>
    )
})
