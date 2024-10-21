"use server";
import * as z from "zod";
import { registerSchema } from "@/zod/schema";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/lib/auth/account/user";
import { generateVerificatitonToken } from "@/lib/tokens";

export const register = async (values: z.infer<typeof registerSchema>) => {
  const validatesFields = registerSchema.safeParse(values);
  if (!validatesFields.success) {
    throw new Error("Don't be shana");
  }

  const { email, password, name } = validatesFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    throw new Error("User already exist with email.");
  }
  try {
    await db.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });
    const verificationToken = await generateVerificatitonToken(email);
  } catch (error) {
    throw new Error("something went wrong.");
  }
};
