import Link from "next/link";
import React from "react";
import { GiWaveCrest } from "react-icons/gi";

const NavBar: React.FC = () => {
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
                className="text-zinc-500 hover:text-zinc-800 transition-colors"
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
