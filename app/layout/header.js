"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon, HomeIcon } from "@heroicons/react/24/solid";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-slate-800 py-4 px-6 md:px-10">
      <nav className="flex justify-between items-center">
        {/* Logo / Home Icon */}
        <Link href="/" className="text-white">
          <HomeIcon className="h-6 w-6" />
          <span className="sr-only">Home</span>
        </Link>

        {/* Navigation Menu */}
        <ul
          className={`fixed top-0 left-0 right-0 bottom-0 justify-center gap-10 lg:static w-full lg:w-auto bg-slate-800 lg:bg-transparent flex flex-col lg:flex-row items-center lg:gap-10 lg:gap-4 p-5 lg:p-0 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
          }`}
        >
          {/* Home link (visible only on mobile) */}
          <li className="lg:hidden">
            <Link href="/" className="text-white">
              <HomeIcon className="h-6 w-6" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {[
            { href: "/about", label: "About" },
            { href: "/experience", label: "Experience" },
            { href: "/projects", label: "Projects" },
            {
              href: "https://drive.google.com/file/d/1ZqSxj_QgfabcFwsjtzd-LLu9naD9tAUa/view?usp=sharing",
              label: "Resume",
              target: "_blank",
            },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                target={item.target}
                className="px-2 text-teal-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-300 rounded"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden relative text-white focus:outline-none focus:ring-2 focus:ring-teal-300 rounded"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </nav>
    </header>
  );
}

export default Header;
