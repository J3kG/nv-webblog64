import Vue from 'vue'
import Router from 'vue-router'
import UserIndex from '@/components/Stream/Index'
import UserCreate from '@/components/Stream/CreateUser'
import UserEdit from '@/components/Stream/EditUser'
import UserShow from '@/components/Stream/ShowUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/streams',
      name: 'streams',
      component: UserIndex
    },
    {
      path: '/stream/create',
      name: 'stream-create',
      component: UserCreate
    },
    {
      path: '/stream/edit/:streamId',
      name: 'stream-edit',
      component: UserEdit
    },
    {
      path: '/stream/:streamId',
      name: 'stream',
      component: UserShow
    }
    
  ]
})
