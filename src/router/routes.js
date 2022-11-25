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
                path: 'home',
                component: () => import('@/view/home/index.vue')
            }
        ]
    },

]
export default routes