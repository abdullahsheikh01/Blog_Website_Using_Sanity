"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <p className="text-2xl font-bold text-blue-600 ">Blogs Web by Abdullah Shaikh</p>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/">
                <p className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </p>
              </Link>
              <Link href="/components/blogsPage">
                <p className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Blogs
                </p>
              </Link>
              <Link href="/components/contact">
                <p className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </p>
              </Link>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle Menu"
            ><i className="fa-solid fa-bars text-[#74C0FC]"></i>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <p className="block text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                Home
              </p>
            </Link>
            <Link href="/components/blogsPage">
              <p className="block text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                Blogs
              </p>
            </Link>
            <Link href="/components/contact">
                <p className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </p>
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
