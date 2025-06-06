import { z } from "zod";

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  password: string;
}

export const SignUpDTO = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phone: z.string().nullable().optional(),
  password: z.string(),
});
