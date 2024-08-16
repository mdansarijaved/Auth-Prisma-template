"use server";

import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const signinoauth = async (providers: 'google' | 'github') => {
    await signIn(providers, {
        callbackUrl: DEFAULT_LOGIN_REDIRECT,
    })
}