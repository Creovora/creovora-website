"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-darkPurple text-white p-4 shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo Section */}
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
          className="block md:hidden focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-darkPurple bg-opacity-95 flex flex-col items-center justify-center z-40 transition-transform duration-500 ${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>

          {/* Mobile Links */}
          <ul className="space-y-8 text-2xl font-bold text-white text-center">
            <li><Link href="/" onClick={() => setIsOpen(false)} className="hover:text-accent transition-all">Home</Link></li>
            <li><Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-accent transition-all">Services</Link></li>
            <li><Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-accent transition-all">About</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-accent transition-all">Contact</Link></li>
          </ul>
        </div>

        {/* Desktop Navigation Links - Centered Hover Effect */}
        <ul className="hidden md:flex space-x-8 text-lg font-semibold">
          {["Home", "Services", "About", "Contact"].map((item, index) => (
            <li key={index} className="relative group">
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative px-4 py-2 no-underline hover:text-accent transition-all"
              >
                {item}
                {/* Hover Line Effect */}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}