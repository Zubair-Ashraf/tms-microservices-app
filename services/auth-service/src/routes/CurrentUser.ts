import express from 'express';
import * as controllers from '../controllers';
import * as middlewares from '../middlewares';

const router = express.Router();

router.get('/current-user', middlewares.authenticate, controllers.CurrentUser);

export { router as CurrentUserRouter };
