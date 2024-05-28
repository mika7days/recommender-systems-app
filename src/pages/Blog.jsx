import React, { useState } from "react";
import { Search } from "../components/Search";

export const Blog = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handleCloseClick = () => {
    setIsSearchOpen(false);
  };

  return (
    <div className="dark:bg-[#23272F] grid justify-items-center mt-24 lg:mt-40">
      <nav className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white">
        <div className="flex items-center space-x-4">
          <div onClick={handleSearchClick} className="cursor-pointer">
            Open Search
          </div>
        </div>
        {isSearchOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-200 flex justify-center items-center">
            <div className="relative w-[700px] bg-white rounded-lg shadow-lg p-4">
              <button
                onClick={handleCloseClick}
                className="absolute top-20 right-20 text-black p-2"
              >
                Close
              </button>
              <Search />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
