import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import Contact from '@/components/Contact'
import i18n from '@/plugins/i18n';

Vue.use(Router)

const routes =  [
    {
        path: "",
        name: 'MainPage',
        component: MainPage
    },
    {
        path: 'contact',
        name: 'Contact',
        component: Contact
    }
]

export default new Router({
    mode: 'history',
    routes: routes,
    /*
    routes: [        
        {
            path: '/:lang',
            component: {
                template: '<router-view></router-view>'
            },
    
            beforeEnter (to, from, next) {
                const lang = to.params.lang;
    
                if (!['uk', 'ru', 'en', 'de'].includes(lang)) { return next('uk'); }
                if (i18n.local !== lang ) { i18n.locale = lang; }
                return next();
            },
            children: [
                {
                    path: "",
                    name: 'MainPage',
                    component: MainPage
                },
                {
                    path: 'contact',
                    name: 'Contact',
                    component: Contact
                }
            ]
        }
    ]
    */

})

