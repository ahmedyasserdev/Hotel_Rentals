"use client";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="z-[999999]  absolute top-0 left-0 w-full bg-navBg">
      <nav className=" relative z-30 flex-between container py-5 ">
        <Link
          href="/"
          className="regular-20 uppercase tracking-widest text-secondary-3"
        >
          Luxury RENTALS
        </Link>

        <ul
          className={`
    absolute text-white     max-lg:mt-4 text-center h-fit lg:pr-5 max-lg:py-3  rounded-lg   top-[100%] mx-auto left-[50%] translate-x-[-50%] 
    lg:relative  lg:flex lg:h-full lg:gap-12 max-lg:w-[80%] max-lg:bg-secondary-1  transition-all duration-200  
        ${
          isOpen
            ? "max-lg:opacity-1 max-lg:translate-y-0"
            : "max-lg:opacity-0 max-lg:translate-y-[-100%]"
        }
`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              onClick={() => setIsOpen(false)}
              className={` regular-20  hover:text-secondary-2 lg:regular-24  uppercase  flex-center cursor-pointer pb-1.5   transition-all  tracking-[1px] 
              
                ${pathname === link.href && "font-bold text-secondary-2"}
              `}
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <Image
          className="lg:hidden inline-block cursor-pointer "
          src={isOpen ? "/close.svg" : "/menu.svg"}
          alt="menu"
          width={32}
          height={32}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </nav>
    </header>
  );
};

export default Navbar;
