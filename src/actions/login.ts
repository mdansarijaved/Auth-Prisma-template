"use server";
import * as z from "zod";
import { LoginSchema } from "@/zod/schema";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatesFields = LoginSchema.safeParse(values);
    if (!validatesFields.success) {
        return { error: "Invalid Fields" };
    }

    const { email, password } = validatesFields.data;

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT,
        });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid Credentials." }
                default:
                    return { error: "something went wrong" }
            }
        }
        throw error;
    }
    return { success: "Email sent" };
}