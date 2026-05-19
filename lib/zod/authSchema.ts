import { z } from "zod";

export const RegisterSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: "Invalid email address" })
    .refine((val) => val.endsWith("@lagride.com.ng"), {
      message: "Email must be a @lagride.ng address",
    }),
});

export const ChangePasswordSchema = z.object({
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[A-Z]/, { message: "Must include at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Must include at least one lowercase letter" })
    .regex(/[0-9]/, { message: "Must include at least one number" })
    .regex(/[^A-Za-z0-9]/, {
      message: "Must include at least one special character",
    }),
});

export const LoginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
export type ChangePasswordSchemaType = z.infer<typeof ChangePasswordSchema>;
export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
