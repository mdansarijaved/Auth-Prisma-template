"use server";
import * as z from "zod";
import { LoginSchema } from "@/zod/schema";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatesFields = LoginSchema.safeParse(values);
    if (!validatesFields.success) {
        return { error: "Invalid Fields" };
    }
    return { success: "Email sent" };
}