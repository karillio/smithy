import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            redirect: {
                name: "MainPage"
            }
        },
        {
            path: '/mainpage',
            name: 'MainPage',
            component: MainPage
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        }
    ]
})