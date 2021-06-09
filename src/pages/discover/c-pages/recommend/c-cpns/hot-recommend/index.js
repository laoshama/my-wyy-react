import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getHotRecommendsAction } from '../../store/actionCreators'
import { HOT_RECOMMEND_LIMIT } from '@/common/constant'
import { getSizeIamge, getPlayCount } from '@/utils/format_util'

import LSRcmTheme from '@/components/rcm-theme'
import LSSongCover from '@/components/rcm-song-cover'

import {
    RecommendWrapper,
    RecommendContent
} from './style'


export default memo(function LSHotRecommend() {
    const titles = ['华语', '流行', '摇滚', '民谣', '电子']
    const hotRecommends = useSelector(state => state.getIn(['recommend', 'hotRecommends']), shallowEqual)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getHotRecommendsAction(HOT_RECOMMEND_LIMIT))
    }, [dispatch])

    return (
        <RecommendWrapper>
            <LSRcmTheme title={titles} theme='热门推荐' />
            <RecommendContent className='content'>
                {
                    hotRecommends && hotRecommends.map(item => {
                        return <LSSongCover
                            key={item.id}
                            imgUrl={getSizeIamge(item.picUrl, 140)}
                            playCount={getPlayCount(item.playCount)}
                            name={item.name}
                        />
                    })
                }
            </RecommendContent>
        </RecommendWrapper>
    )
})
