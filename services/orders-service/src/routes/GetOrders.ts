import express from 'express';
import * as controllers from '../controllers';
import * as middlewares from '@zkode/tms-lib';

const router = express.Router();

router.get('/', middlewares.authenticate, controllers.GetOrders);

router.get('/:id', middlewares.authenticate, controllers.GetOrders);

export { router as GetOrdersRouter };
