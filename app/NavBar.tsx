"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoBugSharp } from "react-icons/io5";
import classnames from 'classnames';

function NavBar() {
  const currentPath=usePathname()  
  const Links = [
    { id: 0, labels: "Dasboard", href: "/" },
    { id: 1, labels: "Issues", href: "/issues" },
  ];
  return (
    <nav className='flex space-x-6 border-b mb-5 px-4 h-14 items-center'>
      <Link href="/"><IoBugSharp/></Link>
      <ul className='flex space-x-6'>
        {Links.map((item) => (
          <li key={item.id} className={classnames({
            'text-zinc-500':currentPath !== item.href,
            'text-zinc-950':currentPath === item.href,
            'hover:text-zinc-900 transition-colors':true
          })}>
            <Link href={item.href}>{item.labels}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
