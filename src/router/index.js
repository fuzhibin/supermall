import { createRouter,createWebHistory} from 'vue-router'

const Home = ()=>import('views/home/Home');
const Category = ()=>import('views/category/Category');
const Profile = ()=>import('views/profile/Profile');
const Cart = ()=>import('views/cart/Cart');
const GoodInfo = () => import('views/detail/GoodInfo')

const routes = [{
  path:'',
  redirect:'/home'
},{
  path: '/home',
  component:Home
},{
  path: '/category',
  component:Category
},{
  path: '/shopcart',
  component:Cart
},{
  path: '/profile',
  component:Profile
},{
  path: '/goodInfo/:goodId',
  component:GoodInfo
}];

const router = createRouter({
  history:createWebHistory(),
  mode:'history',
  routes
})
export default router
