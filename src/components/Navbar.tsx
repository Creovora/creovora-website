"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-darkPurple text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo Section with Clickable Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/Creovora-text-logo-light-transparent.png" 
            alt="Creovora Logo" 
            width={200} 
            height={60} 
            priority
          />
        </Link>

        {/* Hamburger Button for Mobile */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-darkPurple md:bg-transparent md:flex md:space-x-6 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:translate-x-0`}
        >
          {["Home", "Services", "About", "Contact"].map((item, index) => (
            <li key={index} className="text-center md:text-left">
              <Link 
                href={`/${item.toLowerCase()}`}
                className="block py-2 px-4 text-lg font-semibold transition-all duration-300 
                           rounded-lg hover:bg-accent hover:text-primary hover:shadow-lg"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}