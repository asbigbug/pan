const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        name: 'Login',
        path: '/login',
        component: () => import('@/view/login/index.vue')
    },

    {
        name: 'Lazy',
        path: '/lazy/',
        component: () => import('@/view/lazy/index.vue'),
        children: [
            {
                name: 'Home',
                path: 'home/:id',
                component: () => import('@/view/home/index.vue'),
                props: { newsletterPopup: false }
            }
        ]
    },
    {
        name: 'Notfind',
        path: '/404',
        meta: {
            title: '404'
        },
        component: () => import('@/view/404/index.vue'),
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/404',
    }
]


export default routes