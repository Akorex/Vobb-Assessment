import { genSaltSync, hashSync, compareSync } from "bcryptjs";
import { sign, verify, JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "../../env";
import { Request, Response, NextFunction } from "express";
import Admin from "./admin/admin.model";
import { CustomError } from "./errorhandlers/error";

export interface Admin {
  id: string;
}

export interface AdminRequest extends Request {
  admin?: Admin;
}

export const generateHashedValue = (value: string) => {
  const salt = genSaltSync(10);
  return hashSync(value, salt);
};

export const checkValidity = (value: string, otherValue: string) => {
  return compareSync(value, otherValue);
};

export const generateAccessToken = async (id: string): Promise<string> => {
  let token = sign({ id }, JWT_SECRET, {
    expiresIn: "30m",
  });

  return token;
};

export const isTokenValid = (token: string) => {
  return verify(token, JWT_SECRET);
};

export const verifyUserAccessToken = async (
  req: AdminRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeaders = req.headers["authorization"];
  const token = authHeaders && authHeaders.split(" ")[1];

  if (!token) throw CustomError.Unauthorized();

  verify(token, JWT_SECRET, (err, token) => {
    if (err) {
      throw CustomError.Forbidden();
    }

    const { id } = token as JwtPayload;

    req.admin = { id };

    next();
  });
};
