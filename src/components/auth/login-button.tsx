"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

function LoginButton({
  children,
  asChild,
  mode = "redirect",
}: LoginButtonProps) {
  const router = useRouter();
  const onClick = () => {
    router.push("/auth/login");
  };

  return (
    <div onClick={onClick} className="cursor-pointer">
      {children}
    </div>
  );
}

export default LoginButton;
