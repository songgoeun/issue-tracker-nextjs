"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { GiWaveCrest } from "react-icons/gi";

const NavBar: React.FC = () => {
  // usePathname은 client routing을 위해 사용 되는 것이기 때문에 use client를 사용
  const currentPath = usePathname();
  console.log(currentPath);

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <GiWaveCrest size={24} color="#8fa9a5" />
      </Link>
      <ul className="flex space-x-6">
        {links.map((list) => {
          return (
            <li className="text-zinc-500" key={list.href}>
              <Link
                href={list.href}
                // className={`${
                //   list.href === currentPath ? "text-zinc-900" : "text-zinc-500"
                // }  hover:text-zinc-800 transition-colors`}
                className={classNames({
                  "text-zinc-900": list.href === currentPath,
                  "text-zinc-500": list.href !== currentPath,
                  "hover:text-zinc-800 transition-colors": true,
                })}
              >
                {list.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
