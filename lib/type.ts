import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z
    .string()
    .min(5, { message: "Full name must be 5 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export type TSignUpSchema = z.infer<typeof signUpSchema>;
