import React, { memo } from 'react'

import LSTopBanner from './c-cpns/top-banner'
import LSHotRecommend from './c-cpns/hot-recommend'
import LSNewAlbum from './c-cpns/new-album'
import LSRcmRanking from './c-cpns/rcm-ranking'

import {
    RecommendWrapper,
    ContentWrapper,
    RecommendLeft,
    RecommendRight
} from './style'

export default memo(function LSRecommond(props) {
    return (
        <RecommendWrapper>
            <LSTopBanner />
            <ContentWrapper className='wrap-v2'>
                <RecommendLeft>
                    <LSHotRecommend />
                    <LSNewAlbum />
                    <LSRcmRanking />
                </RecommendLeft>
                <RecommendRight>
                    <h2>右边</h2>
                </RecommendRight>
            </ContentWrapper>
        </RecommendWrapper>
    )
})

