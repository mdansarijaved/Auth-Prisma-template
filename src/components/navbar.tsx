import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, HomeIcon, LogIn, MessageCircle, User } from "lucide-react";
import { ModeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import Link from "next/link";
import { link } from "fs";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <HomeIcon className="w-4 h-4 " />,
    },
    {
      name: "Login",
      link: "/auth/login",
      icon: <LogIn className="h-4 w-4  " />,
    },
    {
      name: "Register",
      link: "/auth/register",
      icon: <User className="h-4 w-4  " />,
    },
  ];
  return (
    <div className="absolute top-2 left-0 w-full flex justify-center  z-50">
      <div className="w-fit px-10 py-3 bg-white dark:bg-black border  flex justify-center rounded-xl items-center gap-10">
        {navItems.map((nav) => (
          <Link
            href={nav.link}
            key={nav.name}
            className="flex justify-center items-center gap-2 "
          >
            {nav.icon}
            {""}
            {nav.name}
          </Link>
        ))}
        <ModeToggle />
      </div>
    </div>
  );
}
