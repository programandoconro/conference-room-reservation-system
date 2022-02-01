import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "./constants";

export const createToken = (name: string) => {
  return jwt.sign(name, SECRET_KEY);
};

export const decodeToken = (token: string): string | null => {
  const decoded = jwt.decode(token);
  if (typeof decoded === "string") {
    return decoded;
  } else {
    return null;
  }
};

const saltRounds = 10;
export const encryptPassword = (password: string) => {
  const encrypted = bcrypt.hash(password, saltRounds);
  return encrypted;
};
