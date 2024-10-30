import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import LoginForm from "./loginform";
import { auth, signIn } from "@/auth";
import { oauthLogin, oauthLogingoogle } from "@/actions/login";

export default async function LoginPage() {
  const user = await auth();
  console.log("user: ", user?.user);
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:bg-gradient-to-b dark:from-neutral-900 dark:to-neutral-950 flex items-center justify-center p-4 relative ">
      <Card className="max-w-md w-full relative z-50">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Login
          </CardTitle>
          <CardDescription className="text-center">
            Enter your email and password to login
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <LoginForm />

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <form action={oauthLogingoogle}>
              <Button variant="outline">
                <Icons.google className="mr-2 h-4 w-4" /> Google
              </Button>
            </form>
            <form action={oauthLogin}>
              <Button variant="outline" type="submit" className="w-full">
                <Icons.gitHub className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </form>
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-sm text-muted-foreground">
            <span className="mr-1 hidden sm:inline-block">
              Don&apos;t have an account?
            </span>
            <Link
              href="/auth/register"
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              Sign up
            </Link>
          </div>
          <Link
            href="#"
            className="text-sm text-primary underline-offset-4 transition-colors hover:underline"
          >
            Forgot password?
          </Link>
        </CardFooter>
      </Card>
      <div className="xl:hidden">
        <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
      </div>
    </div>
  );
}
