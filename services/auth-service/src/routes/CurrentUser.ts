import express from 'express';
import * as controllers from '../controllers';
import * as middlewares from '@zkode/tms-lib';

const router = express.Router();

router.get('/current-user', middlewares.authenticate, controllers.CurrentUser);

export { router as CurrentUserRouter };
