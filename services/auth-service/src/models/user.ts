import mongoose from 'mongoose';

interface UserAttr {
  email: string;
  password: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttr): UserDoc;
}

interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

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

export const User = mongoose.model<UserDoc, UserModel>('User', UserSchema);
