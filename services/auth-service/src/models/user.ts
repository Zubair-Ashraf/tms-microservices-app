import mongoose from 'mongoose';

interface UserAttrs {
  email: string;
  password: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
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

UserSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

export const User = mongoose.model<UserDoc, UserModel>('User', UserSchema);
