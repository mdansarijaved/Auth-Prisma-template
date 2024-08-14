"use server";
import * as z from "zod";
import { RegisterSchema } from "@/zod/schema";
import bcrypt from "bcryptjs"
import { db } from "@/lib/db";
import { getUserByEmail } from "@/lib/auth/account/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatesFields = RegisterSchema.safeParse(values);
    if (!validatesFields.success) {
        return { error: "Invalid Fields" };
    }

    const { email, password, name } = validatesFields.data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return { error: "User already exist with email." }
    }

    await db.user.create({
        data: {
            email,
            name,
            password: hashedPassword,
        }
    })

    return { success: "user created!" };
}