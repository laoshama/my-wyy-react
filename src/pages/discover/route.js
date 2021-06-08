import asyncComponents from '@/utils/AsyncComponents'
import { Redirect } from 'react-router'

export const discoverRoute = [
    {
        path: '/discover',
        exact: true,
        render: () => {
            return <Redirect to='/discover/recommend' />
        }
    },
    {
        path: '/discover/recommend',
        component: asyncComponents(() => import('@/pages/discover/c-pages/recommend'))
    },
    {
        path: '/discover/rank',
        component: asyncComponents(() => import('@/pages/discover/c-pages/rank'))
    },
    {
        path: '/discover/songs',
        component: asyncComponents(() => import('@/pages/discover/c-pages/songs'))
    },
    {
        path: '/discover/radio',
        component: asyncComponents(() => import('@/pages/discover/c-pages/radio'))
    },
    {
        path: '/discover/singer',
        component: asyncComponents(() => import('@/pages/discover/c-pages/singer'))
    },
    {
        path: '/discover/newAlbum',
        component: asyncComponents(() => import('@/pages/discover/c-pages/new-album'))
    },
]
