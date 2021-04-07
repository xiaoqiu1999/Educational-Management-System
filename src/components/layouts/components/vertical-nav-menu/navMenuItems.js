export default [
    {
        url: '/',
        name: '首页',
        slug: 'home',
        icon: 'A',
    },
    {
        url: null,
        name: '报名申请',
        icon: 'edit',
        submenu: [
            {
                url: '/sign',
                name: '重修报名',
                slug: 'home-news',
            },
            {
                url: '/confirm',
                name: '补考确认',
                slug: 'dashboard-ecommerce',
            },
        ],
    },
];
