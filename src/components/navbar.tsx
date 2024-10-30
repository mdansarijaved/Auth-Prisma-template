import React from "react";
import { HomeIcon, LogIn, Menu, User } from "lucide-react";
import { ModeToggle } from "./theme-toggle";
import Link from "next/link";
import { auth } from "@/auth";
import { Button } from "./ui/button";
import { singout } from "@/actions/login";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
export async function FloatingNavDemo() {
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
  const user = await auth();

  return (
    <div className="absolute top-2 left-0 w-full flex justify-center  z-50">
      <div className="w-fit px-3 md:px-5 lg:px-7 xl:px-10 py-3 bg-white dark:bg-black border  flex justify-center rounded-xl items-center gap-4 md:gap-5 lg:gap-7 xl:gap-10">
        {navItems.map((nav) => (
          <Link
            href={nav.link}
            key={nav.name}
            className="md:flex justify-center items-center gap-2 hidden"
          >
            {nav.icon}
            {""}
            {nav.name}
          </Link>
        ))}
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="block md:hidden">
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {navItems.map((nav) => (
              <DropdownMenuItem key={nav.name}>
                <Link
                  href={nav.link}
                  className="flex justify-center items-center gap-2 text-sm font-light"
                >
                  {nav.icon}
                  {""}
                  {nav.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        {user && (
          <form action={singout}>
            <Button type="submit">Logout</Button>
          </form>
        )}
        <ModeToggle />
      </div>
    </div>
  );
}
