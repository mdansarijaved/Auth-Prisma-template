"use client";

import { animatePageout } from "@/utils/animation";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  href: string;
  label: string;
}

const TransitionLink = ({ href, label }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = () => {
    if (pathname !== href) {
      animatePageout(href, router);
    }
  };
  return (
    <button
      className="text-xl text-neutral-900 hover:text-neutral-800"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};


export default TransitionLink;
