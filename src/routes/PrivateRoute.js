import { lazy } from "react";

const PrivateRoute = [
    {
        path: '/',
        component : lazy(() => import('../pages/dashboard/Main')),
        exact: true,
        index: 0,
        childRouters: [
            {
                path: 'dashboard',
                component : lazy(() => import('../pages/dashboard/Dashboard')),
                exact: false,
                index: 0,
            },
            {
                path: 'product',
                component : lazy(() => import('../pages/App/Product')),
                exact: false,
                index: 1,
            },
            {
                path: '*',
                component : lazy(() => import('../pages/error/404')),
                exact: true,
                index: 1,
            }
        ]
    },
    {
        path: '/test',
        component : lazy(() => import('../pages/App/Test')),
        exact: true,
        index: 1,
        childRouters: [
        
        ]
    },
];

export default PrivateRoute;