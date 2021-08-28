import mongoose from 'mongoose';

export const DatabaseConnection = async () => {
  return mongoose.connect('mongodb://192.168.99.101:31676/auth');
};
