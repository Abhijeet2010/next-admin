"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuLinks = ({ item }) => {
  const pathname = usePathname();

  return (
    <div>
      <Link
        href={item.path}
        className={`flex gap-3 items-center p-[12px] hover:bg-[#2e374a] rounded-md outline-none ${
          pathname === item.path ? "bg-[#2e374a]" : null
        }`}
      >
        <span className="text-md">{item.icon}</span>
        <span className="text-md">{item.title}</span>
      </Link>
    </div>
  );
};

export default MenuLinks;
