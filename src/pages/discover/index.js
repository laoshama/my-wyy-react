import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import {
    DiscoverWrapper
} from './style'

import { discoverNavList } from '@/common/common'

export default memo(function LSDiscover(props) {
    const showNavList = discoverNavList.map((item, index) => {
        return (
            <NavLink to={item.path}
                key={item.title}
                exact>
                {item.title}
            </NavLink>
        )
    })

    return (
        <DiscoverWrapper>
            <div className="top">
                <div className="wrap-v2">
                    <div className="navbar">
                        {showNavList}
                    </div>
                </div>
            </div>
            {renderRoutes(props.route.routes)}
        </DiscoverWrapper>
    )
})
