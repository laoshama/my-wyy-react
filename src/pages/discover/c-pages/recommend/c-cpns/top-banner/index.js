import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getTopBannerAction } from '@/pages/discover/c-pages/recommend/store/actionCreators'


import { Carousel } from 'antd';
import {
    TopBannerWrapper,
    Banner
} from './style'

export default memo(function LSTopBanner() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const dispatch = useDispatch()
    const { topBanners } = useSelector(state => ({
        topBanners: state.getIn(['recommend', 'topBanners'])
    }), shallowEqual)

    const bannerRef = useRef()
    useEffect(() => {
        dispatch(getTopBannerAction())
    }, [dispatch])

    const changeBanner = useCallback((from, to) => {
        setCurrentIndex(to)
    }, [])

    const imageUrl = topBanners[currentIndex] ? (topBanners[currentIndex].imageUrl + '?imageView&blur=40x20') : 'a'
    return (
        <TopBannerWrapper imageUrl={imageUrl}>
            <Banner className='wrap-v2'>
                <div className="left">
                    <Carousel
                        className="banner"
                        effect="fade"
                        autoplay
                        beforeChange={changeBanner}
                        ref={bannerRef}
                    >
                        {
                            topBanners && (topBanners.map(item => {
                                return (
                                    <div key={item.targetId} className='banner-img-box'>
                                        <img src={item.imageUrl} alt={item.typeTitle} />
                                    </div>
                                )
                            }))
                        }
                    </Carousel>
                </div>
                <div className="right">
                    <div className='download-btn'>下载客户端</div>
                </div>
                <button className='left-control' onClick={e => bannerRef.current.prev()}></button>
                <button className='right-control' onClick={e => bannerRef.current.next()}></button>
            </Banner>
        </TopBannerWrapper>
    )
})
