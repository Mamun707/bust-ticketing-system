import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="gradient-bg text-white">
      <div className="custom-container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🚌</span>
            </div>
            <Link href="/">
              {" "}
              <h1 className="text-2xl font-semibold">BusGo</h1>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-blue-200 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              My Bookings
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              Support
            </a>
            <Link href="/signin">
              {" "}
              <button className="bg-white  px-4 py-2 rounded-md font-medium text-primary  duration-300 transition-colors cursor-pointer">
                Sign In
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
