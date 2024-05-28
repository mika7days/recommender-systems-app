// SearchModal.jsx
import React from "react";
import { Search } from "./Search";

const SearchModal = ({ onClose }) => {
  return (
    <div className="fixed top-[100px] left-[350px] flex items-center justify-center z-50">
      <div className="bg-black fixed inset-0"></div>
      <div className="modal bg-white rounded-lg p-8 z-50 relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          CLICK ME
        </button>
        <Search />
      </div>
    </div>
  );
};

export default SearchModal;
