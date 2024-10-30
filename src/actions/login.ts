"use server";
import * as z from "zod";
import { loginSchema } from "@/zod/schema";
import { signIn, signOut } from "@/auth";
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
    if (error instanceof AuthError) {
      throw new Error("Invalid credential");
    }
  }
};

export const oauthLogin = async () => {
  await signIn("github");
};
export const oauthLogingoogle = async () => {
  await signIn("google");
};

export const singout = async () => {
  await signOut();
};
