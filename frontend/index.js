import { Router } from '@vaadin/router';
import { routes } from './routes.js';

export const router = new Router();
router.setOutlet(document.body);
router.setRoutes(routes);
