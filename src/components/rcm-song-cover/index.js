import React, { memo } from 'react'

import { SongCoverWrapper } from './style'

export default memo(function LSSongCover(props) {
    const { imgUrl, playCount, name } = props
    return (
        <SongCoverWrapper>
            <div className="pic">
                <div className="cover sprite_cover"></div>
                <img src={imgUrl} alt={imgUrl} />
                <div className="btn-desc sprite_cover">
                    <div className="logo sprite_icon"></div>
                    <span>{playCount}</span>
                    <div className='play-btn sprite_icon'></div>
                </div>
            </div>
            <div className="desc">{name}</div>
        </SongCoverWrapper>
    )
})
