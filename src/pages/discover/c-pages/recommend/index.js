import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
// import { connect } from 'react-redux'

import { getTopBannerAction } from './store/actionCreators'

function LSRecommond(props) {
    const dispatch = useDispatch()
    const topBanners = useSelector(state => state.recommend.get('topBanners'), shallowEqual)

    useEffect(() => {
        dispatch(getTopBannerAction())
    }, [dispatch])
    return (
        <div>
            LSRecommond:{topBanners.length}
        </div>
    )
}

export default memo(LSRecommond)

// function LSRecommond(props) {
//     const { getTopBanners } = props
//     useEffect(() => {
//         getTopBanners()
//     }, [getTopBanners])

//     return (
//         <div>
//             LSRecommond
//         </div>
//     )
// }

// const mapStateTopProps = state => ({
//     topBanners: state.recommend.tonBanners
// })

// const mapDispatchToProps = (dispatch) => ({
//     getTopBanners: () => {
//         dispatch(getTopBannerAction())
//     }
// })

// export default connect(mapStateTopProps, mapDispatchToProps)(memo(LSRecommond))