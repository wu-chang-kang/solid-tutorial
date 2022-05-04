import { lazy } from 'solid-js'

export const routes = [
  {
    path: '/page1',
    component: lazy(() => import('./page1'))
  },
  {
    path: '/page2',
    component: lazy(() => import('./page2'))
  }
]
