import express from 'express';
import * as controllers from '../controllers';
import * as middlewares from '@zkode/tms-lib';

const router = express.Router();

router.post('/:id', middlewares.authenticate, controllers.UpdateTickets);

export { router as UpdateTicketRouter };
