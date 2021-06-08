import React, { memo, useState } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
} from './style'

import { navList } from '@/common/common'

const LSAppHeader = memo(function (props) {
    const [currentIndex, setcurrentIndex] = useState(0)
    const pathname = '/discover/recommend'


    //  显示导航栏
    const navListShow = navList.map((item, index) => {
        if (index < 3) {
            return (
                <NavLink to={item.path}
                    key={item.title}
                    exact
                    className={'link-item ' + (currentIndex === index ? 'link-item-active' : '')}
                    onClick={e => setcurrentIndex(index)}>
                    {item.title}
                </NavLink>
            )
        } else {
            return (
                <a href={item.path}
                    key={item.title}
                    className={'link-item ' + (currentIndex === index ? 'link-item-active' : '')}
                    onClick={e => setcurrentIndex(index)}
                >
                    {item.title}
                </a>
            )
        }

    })

    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href="/" className='logo sprite_01'>网易云音乐</a>
                    {navListShow}
                </HeaderLeft>
                <HeaderRight>
                    <div className="search">
                        <span className='search-logo sprite_01'></span>
                        <input type="text" placeholder='音乐/视频/电台/用户' />
                    </div>
                    <div className="creators">创作者中心</div>
                    <div className="login">登入</div>
                </HeaderRight>
            </div>
            {
                props.location.pathname === pathname
                    ? null
                    : <div className="divider"></div>
            }
        </HeaderWrapper>
    )
})

export default withRouter(LSAppHeader)