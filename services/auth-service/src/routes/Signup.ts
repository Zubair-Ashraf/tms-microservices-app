import express from 'express';
import { SignUpValidationSchema } from '../validations/schemas';
import * as controllers from '../controllers';
import { ValidateRequest } from '@zkode/tms-lib';

const router = express.Router();

router.post(
  '/signup',
  SignUpValidationSchema,
  ValidateRequest,
  controllers.Signup
);

export { router as SignUpRouter };
