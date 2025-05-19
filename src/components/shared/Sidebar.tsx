"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoImage from "@/public/assets/images/logo-text.svg";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

export const sidebarItemLinks = ({
  start,
  end,
  pathname,
}: {
  start?: number;
  end?: number;
  pathname: string;
}) => {
  return navLinks.slice(start, end).map((link) => {
    const isActive = link.route === pathname;
    return (
      <li
        key={link.route}
        className={`sidebar-nav_element group ${
          isActive ? "bg-purple-gradient text-white" : "text-gray-700"
        }`}>
        <Link
          href={link.route}
          className="sidebar-link">
          <Image
            src={link.icon}
            alt="logo"
            width={24}
            height={24}
            className={`${isActive && "brightness-200"}`}
          />
          {link.label}
        </Link>
      </li>
    );
  });
};

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/">
          <Image
            src={logoImage}
            width={180}
            height={28}
            alt="logo"
          />
        </Link>
        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {sidebarItemLinks({ start: 0, end: 6, pathname })}
            </ul>
            <ul className="sidebar-nav_elements">
              {sidebarItemLinks({ start: 6, pathname })}
              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton showName />
              </li>
            </ul>
          </SignedIn>
          <SignedOut>
            <Button
              asChild
              className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
