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
      <div className="w-1/2 h-full  flex flex-col justify-between items-start">
        <AuthSide />
      </div>
      <div className="w-1/2 h-full ">{children}</div>
    </div>
  );
}
