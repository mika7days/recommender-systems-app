import React, { useState, useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { IoCloseSharp } from "react-icons/io5";
import { HiOutlineSearch } from "react-icons/hi";
import noresult from "../assets/noresult.svg";
import data from "../test.json";

const SearchComponent = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [filteredLinks, setFilteredLinks] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    const handleKeyDown = (event) => {
      switch (event.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowUp":
          setSelectedIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : prevIndex
          );
          break;
        case "ArrowDown":
          setSelectedIndex((prevIndex) =>
            prevIndex < filteredLinks.length - 1 ? prevIndex + 1 : prevIndex
          );
          break;
        case "Enter":
          if (selectedIndex !== -1) {
            // Navigate to the selected link
            const selectedLink = document.getElementById(
              `hashlink-${selectedIndex}`
            );
            if (selectedLink) {
              selectedLink.click();
              onClose();
            }
          }
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, filteredLinks.length, selectedIndex]);

  useEffect(() => {
    setFilteredLinks(
      data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setSelectedIndex(-1);
  };

  const getHighlightedText = (text, highlight) => {
    if (!highlight.trim()) {
      return text;
    }
    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="text-blue-600 dark:text-[#149ECA]">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center dark:text-[#F6F7FA]">
      <div className="bg-white dark:bg-[#23272F] relative py-4 sm:rounded-xl lg:w-2/4 w-screen lg:top-[40px] top-0">
        <div className="flex justify-center lg:p-5">
          <label className="h-9 w-full pl-2 ml-5 rounded-xl bg-[#E2E2E2] dark:bg-[#374151] text-[#656464] dark:text-[#98A1B3] flex justify-start items-center">
            <HiOutlineSearch
              size={21}
              className="text-[#656464] dark:text-[#98A1B3] mr-2"
            />
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={handleChange}
              placeholder="Search..."
              className="w-full lg:mr-7 mr-2 bg-[#E2E2E2] dark:text-[#F6F7FA] dark:bg-[#374151] outline-none"
            />
          </label>

          <button onClick={onClose} className="flex items-center">
            <IoCloseSharp className="text-4xl dark:text-[#98A1B3] text-[#656464]" />
          </button>
        </div>
        <div className="max-h-[580px] lg:px-10 px-5 pt-7 overflow-y-auto">
          {searchTerm && filteredLinks.length > 0
            ? filteredLinks.map((link, index) => (
                <HashLink
                  key={index}
                  smooth
                  to={link.url}
                  onClick={onClose}
                  id={`hashlink-${index}`}
                  tabIndex={0}
                >
                  <div
                    className={`mb-4 bg-[#EDECEC] dark:bg-[#374151] px-4 rounded-xl py-2 ${
                      index === selectedIndex
                        ? "ring ring-blue-400 dark:ring-[#149ECA] ring-opacity-50"
                        : ""
                    }`}
                  >
                    <div className="lg:text-xl text-base font-bold">
                      {getHighlightedText(link.title, searchTerm)}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-[#979FB0]">
                      {link.url}
                    </div>
                  </div>
                </HashLink>
              ))
            : searchTerm &&
              filteredLinks.length === 0 && (
                <div className="flex justify-center">
                  <img src={noresult} alt="no result" />
                </div>
              )}
        </div>
        <div className="bg-[#FFFFFF] dark:bg-[#23272F] lg:w-auto w-full text-end px-5 h-10 md:text-xl fixed bottom-0 right-0 lg:right-auto text-lg text-[#656464] dark:text-[#99A1B3]">
          <p className="pt-2 lg:pt-0">
            Powered by{" "}
            <a
              className="font-bold"
              href="https://www.linkedin.com/in/mikayil-gamkharli-88b140203/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @mika7days
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
