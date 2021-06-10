import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getRankingAction } from '../../store/actionCreators'

import LSRankItem from '@/components/rank-item'
import LSRcmTheme from '@/components/rcm-theme'

import { RecommendRankingWrapper } from './style'

export default memo(function LSRcmRanking() {
    const dispatch = useDispatch()
    const rankings = useSelector(state => state.getIn(['recommend', 'rankings']), shallowEqual)

    useEffect(() => {
        dispatch(getRankingAction())
    }, [dispatch])

    return (
        <RecommendRankingWrapper>
            <LSRcmTheme theme='榜单' />
            <div className="content rank_bg">
                <LSRankItem ranking={rankings[0]}/>
                <LSRankItem ranking={rankings[1]}/>
                <LSRankItem ranking={rankings[2]}/>
            </div>
        </RecommendRankingWrapper>
    )
})
