import NextAuth from "next-auth"
import authConfig from "@/auth.config"
import { db } from "@/lib/db"
import { PrismaAdapter } from "@auth/prisma-adapter"

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    callbacks: {
        async jwt({ token }) {
            console.log({ token })
            return token;
        }
    },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig,
})