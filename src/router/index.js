import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Projects from '../views/Projects.vue'
import Project from '../views/Project.vue'
import MyProfile from '../views/MyProfile.vue'
import MyProjects from '../views/MyProjects.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {hideInMenu: false}
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: Login,
    meta: {hideInMenu: false}
  },
  {
    path: '/users',
    name: 'Register',
    component: Register,
    meta: {hideInMenu: false}
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: {hideInMenu: false}
  },
  {
    path: '/projects/project/:id',
    name: 'Project',
    component: Project,
    meta: {hideInMenu: false}
  },
  {
    path: '/me/profile',
    name: 'MyProfile',
    component: MyProfile,
    meta: {hideInMenu: false}
  },
  {
    path: '/me/projects',
    name: 'MyProjects',
    component: MyProjects,
    meta: {hideInMenu: false}
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach( (to, from, next) => {
  
  const isAuth = localStorage.getItem("jwt-token")
  
  if (to.meta.private === true){
    if (isAuth){
      next()
    }else{
      next("/login")
    }
  }else{
    next()
  }
})
  
export default router
