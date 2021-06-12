import { Router } from 'express';
import SalesController from './app/controllers/salesController';
import CostumerController from './app/controllers/costumerController';
const routes: Router = Router();
const _SalesController = new SalesController;
const _CostumerController = new CostumerController;

//Routes from sales
routes.get('/sale', _SalesController.get);
routes.get('/sale/:_id', _SalesController.show);
routes.post('/sale', _SalesController.create);
routes.delete('/sale/:_id', _SalesController.delete);
routes.put('/sale/:_id', _SalesController.updateOnde);

//Routes from costumers
routes.get('/costumer', _CostumerController.get);
routes.get('/costumer/:_id', _CostumerController.show);
routes.post('/costumer', _CostumerController.create);
routes.delete('/costumer/:_id', _CostumerController.delete);
routes.put('/costumer/:_id', _CostumerController.update);

export default routes;
