import { Router } from 'express';
import SalesController from './app/controllers/salesController';
const routes: Router = Router();
const _SalesController = new SalesController;

routes.get('/sale', _SalesController.get);
routes.get('/sale/:_id', _SalesController.show);
routes.post('/sale', _SalesController.create);
routes.delete('/sale/:_id', _SalesController.delete);
routes.put('/sale/:id', _SalesController.updateOnde);

export default routes;
