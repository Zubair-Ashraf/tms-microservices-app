import jwt from 'jsonwebtoken';

export const generateToken = (payload: object) => {
  return jwt.sign({ ...payload }, 'secret');
};
