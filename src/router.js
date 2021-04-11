import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes: [
        { path: '/', redirect: '/home' },
        {
            path: '',
            component: () => import('./components/layouts/main/Main.vue'),
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('./views/Home.vue'),
                },
                {
                    path: '/sign',
                    name: 'sign',
                    component: () => import('./views/Sign.vue'),
                },
                {
                    path: '/confirm',
                    name: 'confirm',
                    component: () => import('./views/Confirm.vue'),
                },
                {
                    path: '/select',
                    name: 'select',
                    component: () => import('./views/Select.vue'),
                },
                {
                    path: '/query',
                    name: 'query',
                    component: () => import('./views/Query.vue'),
                },
                {
                    path: '/evaluate',
                    name: 'evaluate',
                    component: () => import('./views/Evaluate.vue'),
                },
                {
                    path: '/graduation',
                    name: 'graduation',
                    component: () => import('./views/Graduation.vue'),
                },
            ],
        },
        {
            path: '',
            component: () => import('./components/layouts/full-page/FullPage.vue'),
            children: [
                {
                    path: '/pages/login',
                    name: 'page-login',
                    component: () => import('@/views/pages/Login.vue'),
                },
                {
                    path: '/pages/error-404',
                    name: 'page-error-404',
                    component: () => import('@/views/pages/Error404.vue'),
                },
            ],
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404',
        },
    ],
});

router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg');
    if (appLoading) {
        appLoading.style.display = 'none';
    }
});

export default router;
