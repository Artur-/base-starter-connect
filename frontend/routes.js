export const routes = [
    {
      path: '/',
      component: 'main-layout',
      action: (context, cmd) => import('./main-layout.js').then(() => context.route.component),
      children: [
        {
          path: '/',
          title: 'Orders',
          component: 'orders-view',
          action: (context, cmd) => import('./view/orders/orders-view.js').then(() => context.route.component)
        },
        {
          path: '/dashboard',
          title: 'Dashboard',
          component: 'dashboard-view',
          action: (context, cmd) => import('./view/dashboard/dashboard-view.js').then(() => context.route.component)
        },
        {
          path: '/products',
          title: 'Products',
          component: 'products-view',
          action: (context, cmd) => import('./view/products/products-view.js').then(() => context.route.component)
        }
      ]
    }
  ];