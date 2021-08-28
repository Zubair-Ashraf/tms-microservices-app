import { body } from 'express-validator';

export const SignUpValidationSchema = [
  body('email').isEmail().withMessage('Invalid email address'),
  body('password')
    .trim()
    .isLength({ min: 4, max: 15 })
    .withMessage('Password must be 4 to 15 characters long'),
];
