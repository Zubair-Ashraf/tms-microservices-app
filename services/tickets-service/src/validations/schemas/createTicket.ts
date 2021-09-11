import { body } from 'express-validator';

export const CreateTicketValidationSchema = [
  body('title')
    .exists()
    .withMessage('Title is required')
    .notEmpty()
    .withMessage("Title can't be empty"),
  body('price')
    .exists()
    .withMessage('Price is required')
    .notEmpty()
    .withMessage("Price can't be empty"),
];
