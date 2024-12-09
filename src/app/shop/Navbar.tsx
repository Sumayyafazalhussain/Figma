import React from "react";
import { IoIosContact } from "react-icons/io";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center px-8 py-4 max-w-screen-xl">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="w-[35px] h-[35px]" />
          <h1 className="text-3xl font-bold font-poppins text-gray-900">Furniro</h1>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-10">
            <li>
              <Link href="/" className="text-gray-900 font-medium hover:text-gray-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-gray-900 font-medium hover:text-gray-600">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/Blog" className="text-gray-900 font-medium hover:text-gray-600">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-900 font-medium hover:text-gray-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Action Icons */}
        <div className="flex items-center space-x-5">
          <IoIosContact className="w-7 h-7 text-gray-900 cursor-pointer hover:text-gray-600" />
          <FaSearch className="w-7 h-7 text-gray-900 cursor-pointer hover:text-gray-600" />
          <FaRegHeart className="w-7 h-7 text-gray-900 cursor-pointer hover:text-gray-600" />
          <MdOutlineShoppingCart className="w-7 h-7 text-gray-900 cursor-pointer hover:text-gray-600" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
