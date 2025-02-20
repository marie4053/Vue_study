import HomePage from '@/views/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/modal1', name: 'modal1', component: () => import('@/views/ModalPage.vue') },
    { path: '/modal2', name: 'modal2', component: () => import('@/views/Modal2Page.vue') },
    { path: '/vuetify', name: 'vuetify', component: () => import('@/views/VuefityTest.vue') },
    { path: '/barchart', name: 'barChart', component: () => import('@/views/BarChartView.vue') },
    { path: '/linechart', name: 'lineChart', component: () => import('@/views/LineChartView.vue') },
    {
      path: '/piechart',
      name: 'piechart',
      component: () => import('@/views/PieChartView.vue'),
    },
    // {
    //   path: '/doughnutchart',
    //   name: 'doughnutChart',
    //   component: () => import('@/views/PieChartView.vue'),
    // },
  ],
})

export default router
