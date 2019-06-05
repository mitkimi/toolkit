import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/scene/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: 'numAddon',
          name: 'NumAddOn',
          component: () => import('@/views/numAddon')
        }
      ]
    }
  ]
})
