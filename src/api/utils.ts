import { genSaltSync, hashSync, compareSync } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import { JWT_SECRET, JWT_LIFETIME } from "../../env";

export const generateHashedValue = (value: string) => {
  const salt = genSaltSync(10);
  return hashSync(value, salt);
};

export const checkValidity = (value: string, otherValue: string) => {
  return compareSync(value, otherValue);
};

export const generateAccessToken = async (id: string): Promise<string> => {
  let token = sign({ id }, JWT_LIFETIME, {
    expiresIn: "30m",
  });

  return token;
};

export const isTokenValid = (token: string) => {
  return verify(token, JWT_SECRET);
};
