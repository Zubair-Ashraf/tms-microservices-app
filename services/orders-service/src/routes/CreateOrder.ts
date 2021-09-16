import express from 'express';
import * as controllers from '../controllers';
import * as middlewares from '@zkode/tms-lib';
import { CreateOrderValidationSchema } from '../validations/schemas';
import { ValidateRequest } from '@zkode/tms-lib';

const router = express.Router();

router.post(
  '/',
  middlewares.authenticate,
  CreateOrderValidationSchema,
  ValidateRequest,
  controllers.CreateOrder
);

export { router as CreateOrderRouter };
