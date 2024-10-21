"use server";
import * as z from "zod";
import { loginSchema } from "@/zod/schema";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
export const login = async (values: z.infer<typeof loginSchema>) => {
  const validatesFields = loginSchema.safeParse(values);
  if (!validatesFields.success) {
    throw new Error("Don't be shana");
  }
  const { email, password } = validatesFields.data;
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });
  } catch (error) {
    throw error;
  }
};
