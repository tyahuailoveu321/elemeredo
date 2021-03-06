import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/components/goods/goods.vue'
import comments from '@/components/comments/comments.vue'
import shops from '@/components/shops/shops.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component:goods
    },
    {
      path: '/comments',
      name: 'comments',
      component:comments
    },
    {
      path: '/shops',
      name: 'shops',
      component:shops
    }
  ]
})
