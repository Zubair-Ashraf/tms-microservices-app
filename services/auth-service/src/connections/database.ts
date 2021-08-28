import mongoose from 'mongoose';

export const DatabaseConnection = async () => {
  return mongoose.connect(process.env.MONGOOSE_CONNECTION_STRING!);
};
