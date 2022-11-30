import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import routes from './routes'
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, next) {
        console.log(to);
        if (from.name !== 'Home') {
            return { top: 50 }
        }
    }
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || ''
    // if(to.matched.length === 0){
    //     next({name: 'Notfind'})
    // }
    next()
})
export default router