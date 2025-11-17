import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-white/20">
      <div className="max-w-[90%] mx-auto flex items-center justify-between py-4">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center rounded-xl font-extrabold text-lg shadow-[0_4px_20px_rgba(59,130,246,0.5)]">
            UI
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent tracking-wide">
            ProWebsite
          </span>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex gap-10 text-gray-800 font-medium">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative group"
            >
              <span className="transition-colors duration-300 group-hover:text-blue-600">
                {item}
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right: Button */}
        <div>
          <a
            href="#"
            className="px-6 py-2 rounded-xl bg-white/80 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.1),_inset_-2px_-2px_6px_rgba(255,255,255,0.5)] text-gray-800 font-semibold backdrop-blur-sm hover:shadow-[0_8px_30px_rgba(59,130,246,0.4)] hover:text-blue-700 transition duration-300"
          >
            Get Started
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;
