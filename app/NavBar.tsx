import Link from "next/link";
import React from "react";
import { IoBugSharp } from "react-icons/io5";

function NavBar() {
  const Links = [
    { id: 0, labels: "Dasboard", href: "/" },
    { id: 1, labels: "Issues", href: "/issues" },
  ];
  return (
    <nav className='flex space-x-6 border-b mb-5 px-4 h-14 items-center'>
      <Link href="/"><IoBugSharp/></Link>
      <ul className='flex space-x-6'>
        {Links.map((item) => (
          <li key={item.id} className="text-zinc-500 hover:text-zinc-900 transition-colors">
            <Link href={item.href}>{item.labels}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
