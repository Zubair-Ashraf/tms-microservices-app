import express from 'express';
import * as controllers from '../controllers';

const router = express.Router();

router.post('/signout', controllers.Signout);

export { router as SignOutRouter };
