import React, { memo } from 'react'

import {
    ThemeWrapper
} from './style.js'

export default memo(function LSRcmTheme(props) {
    const { title, theme } = props

    return (
        <ThemeWrapper>
            <div className="theme">
                <div className="logo sprite_02"></div>
                <p>{theme}</p>
            </div>
            {
                title && (
                    <div className='title'>
                        {
                            title.map(item => {
                                return <div className='title-item' key={item}>{item}</div>
                            })
                        }
                    </div>)
            }
            <div className="more">
                <span>更多</span>
                <span className="logo sprite_02"></span>
            </div>
        </ThemeWrapper>
    )
})
