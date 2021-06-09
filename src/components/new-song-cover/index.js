import React, { memo } from 'react'

import { getSizeIamge } from '@/utils/format_util'

import { LSNewSongCoevrWrapper } from './style'

export default memo(function LSNewSongCoevr(props) {
    const {
        width = 118,
        height = 100,
        bgp = -570,
        name,
        title,
        imgUrl,
        imgSize
    } = props
    return (
        <LSNewSongCoevrWrapper width={width} height={height} bgp={bgp} imgSize={imgSize}>
            <div className="song-img">
                <div className="cover sprite_cover"></div>
                <img src={getSizeIamge(imgUrl, 100)} alt="11" />
            </div>
            <div className="desc">
                <div className="title text-nowrap">{title}</div>
                <div className="author text-nowrap">{name}</div>
            </div>
        </LSNewSongCoevrWrapper>
    )
})
