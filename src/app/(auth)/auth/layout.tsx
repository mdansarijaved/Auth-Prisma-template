import { AuthSide } from "@/components/authSide";
import Image from "next/image";
import React from "react";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen  flex justify-center items-center">
      <div className="w-full h-full  lg:flex flex-col justify-between items-start hidden">
        <AuthSide />
      </div>
      <div className="w-full h-full ">{children}</div>
    </div>
  );
}
