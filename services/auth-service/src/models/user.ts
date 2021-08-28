import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String.prototype,
    required: true,
  },
});

export const User = mongoose.model('User', UserSchema);
