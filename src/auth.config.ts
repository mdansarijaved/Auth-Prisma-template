import GitHub from "next-auth/providers/github"
import type { NextAuthConfig } from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"

export default { providers: [GitHub, Google, Credentials] } satisfies NextAuthConfig