"use client";
import { useState } from "react";
import Link from "next/link";

interface NavLink {
  id: number;
  title: string;
  path: string;
}

const navLinks: NavLink[] = [
  { id: 1, title: "Services", path: "/services" },
  { id: 2, title: "Portfolio", path: "/portfolio" },
  { id: 3, title: "Pricing", path: "/pricing" },
  { id: 4, title: "About Us", path: "/about" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className=" px-6 py-4">
      <div className="flex justify-between items-center">
        <ul className="hidden md:flex justify-center items-center space-x-6">
          {navLinks.map((item) => (
            <li key={item.id} className="relative">
              <Link href={item.path} className="text-lg hover:text-purple-600">
                {item.title}
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Hamburger icon for mobile */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col justify-center items-center space-y-1"
        >
          <span className="w-6 h-1 bg-black"></span>
          <span className="w-6 h-1 bg-black"></span>
          <span className="w-6 h-1 bg-black"></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-white shadow-lg md:hidden`}
      >
        <ul className="flex flex-col items-center py-4">
          {navLinks.map((item) => (
            <li key={item.id} className="py-2 text-center">
              <Link
                href={item.path}
                className="text-lg hover:text-purple-600"
                onClick={toggleMobileMenu} // Close menu after clicking on a link
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
