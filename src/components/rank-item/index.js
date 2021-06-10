import React, { Fragment, memo } from 'react'

import { getSizeIamge } from '@/utils/format_util'

import { RankingItemWrapper } from './style'

export default memo(function LSRankItem(props) {
    const { ranking = {} } = props
    return (
        <RankingItemWrapper>
            <div className="rank-top">
                <div className="rank-left-img">
                    <img src={getSizeIamge(ranking.coverImgUrl, 80)} alt="" />
                </div>
                <div className="rank-top-right">
                    <div className="title">{ranking.name}</div>
                    <button className='play-btn sprite_02'></button>
                    <button className='favor-btn sprite_02'></button>
                </div>
            </div>
            {
                ranking.tracks.map((item, index) => {
                    return (
                        <div className="rank-content-item" key={item.first}>
                            <div className="left">
                                <div className="order">{index+1}</div>
                                <div className="song-name text-nowrap">{item.first}</div>
                            </div>
                            <div className="oprate">
                                <div className="play-btn sprite_02"></div>
                                <div className="add-btn sprite_icon2"></div>
                                <div className="favor-btn sprite_02"></div>
                            </div>
                        </div>
                    )
                })
            }
        </RankingItemWrapper>
    )
})
