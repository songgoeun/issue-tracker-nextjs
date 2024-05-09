import Link from "next/link";
import React from "react";
import { GiWaveCrest } from "react-icons/gi";

const NavBar: React.FC = () => {
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <GiWaveCrest size={24} color="#8fa9a5" />
      </Link>
      <ul className="flex space-x-6">
        <li>
          <Link href="/">DashBoard</Link>
        </li>
        <li>
          <Link href="/issues">Issues</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
