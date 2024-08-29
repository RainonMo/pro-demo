export default [
  { path: '/user', layout: false, routes: [{ path: '/user/login', component: './User/Login' },{ path: '/user/register', component: './User/Register' }] },


  { path: '/', icon: 'home', component:'./Home',name:'首页' },
  { path: '/blog', icon: 'read', component: './Blog', name: "博客"},
  { path: '/blog/add', component:'./Home',hideInMenu: true,name: '创建文章'},
  { path: '/blog/:id', component: './Home', hideInMenu: true, name: '文章详情页' },
  { path: '/store', icon: 'shopping', component: './Store', name: "商城" },
  { path: '/bi',
    icon: 'pieChart',
    name: "BI" ,
    routes: [
      { path: '/bi/chart', component: './Explore', name: "AI分析" },
      { path: '/bi/my_chart', component: './MyChart' , name: '我的图表'},
    ]
  },
  {
    path: '/admin',
    icon: 'crown',
    name: "管理页",
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/user' },
      { path: '/admin/user',  icon: 'table',component: './Admin/User', name: "用户管理" },
      { path: '/admin/nav',  icon: 'table',component: './Admin/Nav', name: "导航管理" },
    ],
  },
  { path: '*', layout: false, component: './404' },
];
