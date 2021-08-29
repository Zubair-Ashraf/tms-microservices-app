import bcrypt from 'bcryptjs';

export const toHashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);

  return bcrypt.hash(password, salt);
};

export const compareHashPassword = (password: string, supplied: string) => {
  return bcrypt.compare(supplied, password);
};
