import mongoose from 'mongoose';
import { body } from 'express-validator';

export const CreateOrderValidationSchema = [
  body('ticketId')
    .exists()
    .withMessage('Ticket ID is required')
    .notEmpty()
    .withMessage("Ticket ID can't be empty")
    .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
    .withMessage('Ticket ID is not in valid format'),
];
