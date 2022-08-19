import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  isNavigationFailure,
  NavigationFailureType,
} from 'vue-router';

//Он использует символ решетки ( # ) перед фактическим URL-адресом, который передается внутри.
//Поскольку этот раздел URL-адреса никогда не отправляется на сервер, он не требует
// какой-либо специальной обработки на уровне сервера.
const routerHistory = createWebHashHistory();

import homePage from '@/pages/home';
import aboutPage from '@/pages/about';
import notFoundPage from '@/pages/notFound';
import cardPers from '@/components/cardPers';
import items from '@/seeders/items';

const routes = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage,
    },
    {
      path: '/about',
      name: 'about',
      component: aboutPage,
    },
    {
      path: '/:person',
      name: 'person',
      component: cardPers,
      // навигационный хук
      // https://v3.router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
      beforeEnter(to) {
        const valueUrl = to.params.person;

        const a = items.find(function (item) {
          return item.alias === valueUrl;
        });

        if (!a) {
          return {
            name: '404',
          };
        }
      },
    },
    // Мы хотим поймать абсолютно все пути, которые не соответствуют предыдущим маршрутам.
    {
      // path: '/:CatchAll(.*)',
      path: '/:pathMatch(.*)*',
      name: '404',
      component: notFoundPage,
    },
  ],
});
//
// routes.afterEach((to, from, failure) => {
//   console.log(to, from, failure);
// });

export default routes;
