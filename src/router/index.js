import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiceView from '../views/ServiceView.vue'
import CaseView from '../views/CaseView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    { 
      path: '/service/:slug',
      name: 'service',
      component: ServiceView
    },
    { 
      path: '/case/:slug',
      name: 'case',
      component: CaseView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue'),
    // },
    
  ],
  scrollBehavior(to, from, savedPosition) {
    // if (savedPosition) {
    //   return savedPosition; // Сохраненная позиция при возврате
    // }
    if (to.hash) {
      // Используем setTimeout для задержки прокрутки
      setTimeout(() => {
        const element = document.querySelector(to.hash);
        if (element) {
          window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth',
          });
        }
      }, 100); // Задержка в 100 мс для стабильности
      return { top: 0 }; // По умолчанию скролл в начало
    }
    return { top: 0 }; // Прокрутка к началу страницы
  },
})

export default router
