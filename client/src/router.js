import Vue from 'vue'
import Router from 'vue-router'
import GroupDiscountManager from './views/groupDiscount/GroupDiscountManager.vue'
import DiscountGroup from './views/groupDiscount/DiscountGroup.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: GroupDiscountManager
    },
    {
      path: '/',
      name: 'GroupDiscountManager',
      component: GroupDiscountManager
    },
    {
      path: '/:id/discount-group',
      name: 'DiscountGroup',
      component: DiscountGroup,
      props: (route) => ({
        groupId: route.params.id
      }),
    }
  ]
})
