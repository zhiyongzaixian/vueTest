// import Home from '../components/Home'
// import Msite from '../components/Msite'


const Home  = () => import('../components/Home')
const Msite  = () => import('../components/Msite')

export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/msite',
    component: Msite
  },
  {
    path: '/',
    redirect: '/home'
  }
]
