import * as dotenv from "dotenv";

dotenv.config();

export const DATABASE_URL = process.env.DATABASE_URL!;
export const PORT = process.env.PORT!;
export const NODE_ENV = process.env.NODE_ENV!;
export const JWT_LIFETIME = process.env.JWT_LIFETIME!;
export const JWT_SECRET = process.env.JWT_SECRET!;
