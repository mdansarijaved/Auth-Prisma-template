import NextAuth, { type DefaultSession } from "next-auth"
import authConfig from "@/auth.config"
import { db } from "@/lib/db"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { getUserById } from "./lib/auth/account/user"

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            role: 'ADMIN' | 'USER'
        } & DefaultSession['user']
    }
}



export const { handlers, auth, signIn, signOut } = NextAuth({
    pages: {
        signIn: "/auth/login",
        error: "/auth/error",
    },
    events: {
        async linkAccount({ user }) {
            await db.user.update({
                where: { id: user.id },
                data: { emailVerified: new Date() }
            })
        }
    },
    callbacks: {

        async session({ token, session }) {
            if (session.user && token.sub) {
                session.user.id = token.sub;
            }
            if (session.user && token.role) {
                session.user.role = token.role;
            }
            return session;
        },
        async jwt({ token }) {
            console.log({ token });
            if (!token.sub) return token;

            const user = await getUserById(token.sub);
            if (!user) return token;
            token.role = user.role;
            return token;
        },
    },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig,
})