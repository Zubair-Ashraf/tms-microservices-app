import express from 'express';
import { SignUpValidationSchema } from '../validations/schemas';
import * as controllers from '../controllers';

const router = express.Router();

router.post('/signup', SignUpValidationSchema, controllers.Signup);

export { router as SignUpRouter };
