"use client";
import Image from "next/image";
import useCount from "./store";
import LoginButton from "@/components/auth/login-button";

export default function Home() {
  const count = useCount((state) => state.count);
  return (
    <main>
      <LoginButton>
        <button>sigin</button>
      </LoginButton>
    </main>
  );
}
