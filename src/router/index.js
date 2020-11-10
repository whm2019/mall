import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const ShopCart = () => import('views/shopcart/ShopCart')
const Profile = () => import('views/profile/Profile')
const HomeTest = () => import('views/home/children/HomeTest')
const test = () => import('components/test')
const Detail = () => import('views/detail/Detail')

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        children:[
            {
                path: 'pop',
                component: HomeTest
            },
            {
                path: 'videos',
                components: HomeTest
            },
            {
                path: 'choiced',
                component: HomeTest
            }
        ]
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/shopcart',
        component: ShopCart
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/detail',
        component: Detail
    }
]
export default new Router({
    routes,
    mode: 'history'
})