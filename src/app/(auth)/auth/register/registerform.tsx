"use client";
import { register } from "@/actions/register";
import { registerSchema } from "@/zod/schema";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Checkbox } from "@/components/ui/checkbox";
type LoginFormValues = z.infer<typeof registerSchema>;

const loginUser = async (data: LoginFormValues) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    await register(data);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

function RegisterForm() {
  const [authError, setAuthError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      confirmpassword: "",
      email: "",
      name: "",
      password: "",
    },
  });

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      toast("registration successfull");
    },
    onError: (error: Error) => {
      setAuthError(error.message);
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    setAuthError(null);
    if (data.confirmpassword !== data.password) {
      setAuthError("Password doesn't match");
      return;
    }
    loginMutation.mutate(data);
  };
  return (
    <>
      {" "}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={loginMutation.isPending}
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={loginMutation.isPending}
                      type="text"
                      placeholder="johdoe"
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
                    <Input
                      {...field}
                      disabled={loginMutation.isPending}
                      type={showPassword ? "text" : "password"}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmpassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Passwordd</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={loginMutation.isPending}
                      type={showPassword ? "text" : "password"}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end items-center space-x-2">
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                show password
              </label>
              <Checkbox
                id="terms"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={loginMutation.isPending}
          >
            {loginMutation.isPending ? (
              <>
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                Registring...
              </>
            ) : (
              "Register"
            )}
          </Button>
        </form>
      </Form>
      {authError && (
        <Alert variant="destructive">
          <AlertTitle>Authentication Error</AlertTitle>
          <AlertDescription>{authError}</AlertDescription>
        </Alert>
      )}
      {loginMutation.isSuccess && (
        <Alert variant="default" className="border-green-400">
          <AlertDescription>
            Registration successful you can login now
          </AlertDescription>
        </Alert>
      )}
    </>
  );
}

export default RegisterForm;
