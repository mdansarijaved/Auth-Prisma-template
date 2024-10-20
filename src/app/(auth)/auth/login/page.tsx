"use client";
import { login } from "@/actions/login";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
type loginform = {
  email: string;
  password: string;
};
function LoginForm() {
  const form = useForm<loginform>({});

  const onSubmit = (values: loginform) => {};

  return (
    <div className="h-full  w-full flex flex-col justify-center items-center">
      <div className="w-[400px] ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="johdoe@gmail.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button className="w-full">submit</Button>
          </form>
        </Form>
        <p className="w-full text-center font-thin uppercase text-xs py-2">
          or continue with
        </p>
        {/* <OauthButton /> */}
      </div>
      <p className="text-xs ">
        New here ?{" "}
        <Link href={"/auth/register"} className="text-muted-foreground py-5">
          Register
        </Link>
      </p>
    </div>
  );
}

export default LoginForm;
