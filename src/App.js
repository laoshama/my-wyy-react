import React, { memo } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

import LSAppHeader from '@/components/app-header'
// import LSAppFooter from '@/components/app-footer'
import LSPlayer from '@/pages/player'

import routes from './router'
import { store } from '@/store'

export default memo(function App() {
  return (
    <Provider store={store}>
      <LSAppHeader />
      {renderRoutes(routes)}
      {/* <LSAppFooter /> */}
      <LSPlayer/>
    </Provider>
  )
})

