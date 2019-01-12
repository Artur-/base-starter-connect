export const routes = [
    {
      path: '/',
      component: 'main-layout',
      action: (context, cmd) => import('./main-layout.js').then(() => context.route.component),
      children: [
        /* route:conf */
      ]
    }
  ];