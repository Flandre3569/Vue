import {createRouter,createWebHashHistory,createWebHistory} from 'vue-router'
// import Home from '../pages/Home.vue'
// import About from '../pages/About.vue'

// 配置映射关系
const routes = [
  {
    path:"/",
    redirect:"/home"
  },
  {
    name:"home",
    path:"/home",
    component: () => import('../pages/Home.vue'),
    children:[
      {
        path:"/home/message",
        component: () => import("../pages/HomeMessage.vue"),
      },
      {
        path:"/home/shops",
        component: () => import("../pages/HomeShops.vue"),
      }
    ]
  },
  {
    name:"about",
    path:"/about",
    component: () => import('../pages/About.vue')
  },
  {
    path:"/User/:username",
    component: () => import('../pages/User.vue')
  },
  {
    path:"/:pathMatch(.*)",
    component: () => import('../pages/NotFound.vue')
  },
  {
    path: "/login",
    component: () => import('../pages/Login.vue')
  }
]

// 创建路由对象
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

// 动态添加路由
const CategoryRouter = {
  path: "/Category",
  component: () => import("../pages/Category.vue")
}

// 动态添加顶级路由
router.addRoute(CategoryRouter);

// 动态添加二级路由
router.addRoute("home",{
  path: "/home/movement",
  component: () => import("../pages/HomeMovement.vue")
})

// 导航守卫
let counter = 0;
router.beforeEach((to,from) => {
  console.log(`进行了${counter}次路由跳转`);
  if(to.path !== '/login') {
    const taken = window.localStorage.getItem("taken");
    if(!taken) {
      return '/login';
    }
  }
})
export default router;