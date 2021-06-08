import { Redirect } from 'react-router'
import asyncComponent from '@/utils/AsyncComponents'

import { discoverRoute } from '@/pages/discover/route'

const routes = [
    {
        path: '/',
        exact: true,
        render: () => {
           return <Redirect to='/discover' />
        }
    },
    {
        path: '/discover',
        component: asyncComponent(() => import('@/pages/discover')),
        routes: discoverRoute
    },
    {
        path: '/mine',
        component: asyncComponent(() => import('@/pages/mine'))
    },
    {
        path: '/friend',
        component: asyncComponent(() => import('@/pages/friend'))
    },
]

export default routes