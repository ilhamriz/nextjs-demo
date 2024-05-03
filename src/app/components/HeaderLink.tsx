"use client";
import { cn } from "@/lib";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  href: string;
  className: any;
  children: any;
  target?: string;
}
function HeaderLink({ href, className, children, ...props }: Readonly<Props>) {
  const currentPath = usePathname();
  const isActive = href === currentPath || href === currentPath.replace(/\/$/, "");

  return (
    <a
      href={href}
      className={cn(
        isActive ? "text-opacity-100" : "text-opacity-60",
        className
      )}
      rel="noopener noreferrer "
      {...props}
    >
      {children}
    </a>
  );
}

export default HeaderLink;
