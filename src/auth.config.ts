import GitHub from "next-auth/providers/github"
import type { NextAuthConfig } from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { LoginSchema } from "./zod/schema"
import bcrypt from "bcryptjs"
import { getUserByEmail } from "./lib/auth/account/user"

export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const validatesFields = LoginSchema.safeParse(credentials);

                if (validatesFields.success) {
                    const { email, password } = validatesFields.data;

                    const user = await getUserByEmail(email);

                    if (!user || !user.password) {
                        return null;
                    }

                    const passwordMatch = await bcrypt.compare(password, user.password);
                    if (passwordMatch) return user;

                }

                return null;

            }
        }),
    ],

} satisfies NextAuthConfig;
