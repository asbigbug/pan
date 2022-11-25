import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { vFocus } from './static/js/directive'
import VueLazyload from 'vue-lazyload'
import './static/style.scss'
// createApp(App).use(router).mount('#app')
const app = createApp(App)
app.use(router).mount('#app')
app.use(VueLazyload, {
    preLoad: 1.3,
    attempt: 2,
    error: import('./static/image/error.webp'),
    loading: import('./static/image/dog.webp'),
    listenEvents: ['scroll', 'touchmove']
})
app.directive('focus', vFocus)