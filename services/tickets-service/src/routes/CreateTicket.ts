import express from 'express';
import * as controllers from '../controllers';
import * as middlewares from '@zkode/tms-lib';
import { CreateTicketValidationSchema } from '../validations/schemas';
import { ValidateRequest } from '@zkode/tms-lib';

const router = express.Router();

router.post(
  '/',
  middlewares.authenticate,
  CreateTicketValidationSchema,
  ValidateRequest,
  controllers.CreateTicket
);

export { router as CreateTicketRouter };
