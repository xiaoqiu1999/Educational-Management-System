export default [
    {
        url: '/home',
        name: '首页',
        slug: 'home',
        icon: 'HomeIcon',
    },
    {
        url: null,
        name: '报名申请',
        icon: 'EditIcon',
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
    {
        url: null,
        name: '选课',
        icon: 'BookIcon',
        submenu: [
            {
                url: '/select',
                name: '选修课',
                slug: 'select',
            },
            {
                url: '/confirm',
                name: '补考确认',
                slug: 'dashboard-ecommerce',
            },
        ],
    },
    {
        url: null,
        name: '信息查询',
        icon: 'BookIcon',
        submenu: [
            {
                url: '/sign',
                name: '个人信息查询',
                slug: 'home-news',
            },
            {
                url: '/confirm',
                name: '成绩查询',
                slug: 'dashboard-ecommerce',
            },
        ],
    },
    {
        url: '/evaluate',
        name: '学生评价',
        icon: 'BookIcon',
        slug: 'evaluate',
    },
    {
        url: '/graduation',
        name: '毕业设计',
        icon: 'BookIcon',
        slug: 'graduation',
    },
];
