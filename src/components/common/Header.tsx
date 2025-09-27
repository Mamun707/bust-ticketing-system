import React from 'react'

const Header = () => {
  return (
    <header className="gradient-bg text-white">
      <div className="custom-container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-2xl">🚌</span>
            </div>
            <h1 className="text-2xl font-bold">BusGo</h1>
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
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Sign In
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header
