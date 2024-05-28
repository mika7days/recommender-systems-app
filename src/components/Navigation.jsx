import { NavLink, useLocation } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { PiMoonFill } from "react-icons/pi";
import { MdSunny } from "react-icons/md";
import "../App.css";

import SearchModal from "./SearchModal";
import SearchComponent from "./SearchComponent";

import lightrecologo from "../assets/light-reco-logo.svg";
import darkrecologo from "../assets/dark-reco-logo.svg";

import lightsearch from "../assets/light-search-logo.svg";
import darksearch from "../assets/search-logo.svg";

import lightnavicon from "../assets/light-navicon.svg";
import darknavicon from "../assets/navicon.svg";

import lightnavbarclose from "../assets/light-close-navicon.svg";
import darknavbarclose from "../assets/close-navicon.svg";

export const Navigation = () => {
  const location = useLocation();

  // -------------------------------- Search Box open & close --------------------------------

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // -------------------------------- Check user Browser OS --------------------------------

  const [isMacOS, setIsMacOS] = useState(false);

  useEffect(() => {
    const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
    setIsMacOS(isMac);
  }, []);

  // -------------------------------- Scroll to top for Top-left RECO Icon --------------------------------

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // -------------------------------- Mobile Navbar open & close --------------------------------
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // -------------------------------- Theme Change --------------------------------
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme || "light");

  useEffect(() => {
    // Set the initial theme to 'light' if no theme is stored
    if (!storedTheme) {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }, [storedTheme]);

  const handleThemeSwitch = () => {
    // Toggle between 'dark' and 'light' themes
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    // Apply theme to the document element
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  // -------------------------------- Navigation panel scroll to change colour --------------------------------
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 20) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <>
      {/* -------------------------------- Desktop Navbar -------------------------------- */}

      <nav
        className={` ${
          color || isOpen ? "shadow-md dark:bg-[#212933]" : ""
        } flex justify-between px-5 lg:justify-between py-2 w-full fixed top-0 z-10 bg-white dark:bg-[#23272F]`}
      >
        <div className="flex justify-start items-center">
          {/* Logo LINK */}
          <NavLink to="/">
            <img
              onClick={scrollToTop}
              className="bg-white dark:bg-[#23272F] rounded-3xl w-14 active:translate-y-1"
              src={`${theme === "dark" ? lightrecologo : darkrecologo}`}
              alt="reco-logo"
            />
          </NavLink>
          <span
            id="search-button"
            onClick={handleSearchClick}
            className="ml-4 md:hidden active:translate-y-1"
          >
            <img
              src={`${theme === "dark" ? lightsearch : darksearch}`}
              alt="search"
            />
          </span>
          {/* SearchBar Component PopUP */}
          <button id="search-button" onClick={handleSearchClick}>
            <label className="cursor-pointer h-9 w-[410px] pl-2 ml-5 rounded-xl bg-[#E2E2E2] dark:bg-[#374151] text-[#656464] dark:text-[#98A1B3] md:flex justify-start items-center hidden">
              <HiOutlineSearch
                size={21}
                className="text-[#656464] dark:text-[#98A1B3] mr-2"
              />
              <span>Search here</span>
              {/* SearchBar Keyboard Shortcut */}
              <span className="flex items-center ml-52 text-[#656464] dark:text-[#99A1B3]">
                <kbd className="bg-[#FFFFFF] dark:bg-[#23272F] px-1 w-6 h-6 rounded text-lg">
                  {isMacOS ? "⌘" : "ctrl"}
                </kbd>
                <kbd className="mx-0.5">+</kbd>
                <kbd className="bg-[#FFFFFF] dark:bg-[#23272F] px-1 w-6 h-6 rounded aybala">
                  k
                </kbd>
              </span>
            </label>
          </button>
          {isModalOpen && <SearchComponent onClose={handleCloseModal} />}
        </div>

        <div className="navFont lg:flex items-center hidden">
          <ul className="flex items-center px-4 text-xl text-[#1F4F90] dark:text-[#EBECF0] font-medium">
            {NavItems.map((item, index) => {
              return (
                // NAVBAR MENU ITEMS LINK
                <NavLink
                  key={index}
                  to={item.link}
                  className={(() => {
                    if (location.pathname.startsWith("/learn") && index === 0) {
                      // If current location starts with /learn and it's the Learn navigation item
                      return "text-white bg-[#EF720A] rounded-t-3xl rounded-br-3xl mx-6 p-2 active:translate-y-1";
                    } else if (
                      location.pathname === item.link ||
                      location.pathname.startsWith(item.link + "/")
                    ) {
                      // If current location matches the Blog or About page or any subpage
                      return "text-white bg-[#EF720A] rounded-t-3xl rounded-br-3xl mx-6 p-2 active:translate-y-1";
                    } else {
                      return "mx-6 p-2 active:translate-y-1";
                    }
                  })()}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </ul>
          <span
            className="cursor-pointer active:translate-y-1"
            onClick={handleThemeSwitch}
          >
            {theme === "dark" ? (
              <MdSunny size={30} color="#EBECF0" />
            ) : (
              <PiMoonFill size={30} color="#1F4F8E" />
            )}
          </span>
        </div>

        {/* -------------------------------- Mobile Navbar -------------------------------- */}

        <div className="flex items-center lg:hidden">
          <span
            className="mr-6 active:translate-y-1"
            onClick={handleThemeSwitch}
          >
            {theme === "dark" ? (
              <MdSunny size={30} color="#EBECF0" />
            ) : (
              <PiMoonFill size={30} color="#1F4F8E" />
            )}
          </span>

          <span onClick={toggleNavbar} className="active:translate-y-1">
            {isOpen ? (
              <img
                src={`${theme === "dark" ? lightnavbarclose : darknavbarclose}`}
                alt="navbar-close"
              />
            ) : (
              <img
                src={`${theme === "dark" ? lightnavicon : darknavicon}`}
                alt="navbar-icon"
              />
            )}
          </span>
        </div>

        {isOpen && (
          <div className="bg-[#FFFFFF] dark:bg-[#23272F] dark:text-[#EBECF0] w-full h-screen left-0 absolute top-16 overflow-y-auto">
            <ul className="flex items-center justify-between py-4 text-xl border-b-2 font-medium">
              {NavItems.map((item, index) => {
                return (
                  <NavLink
                    onClick={toggleNavbar}
                    key={index}
                    to={item.link}
                    className={(() => {
                      if (
                        location.pathname.startsWith("/learn") &&
                        index === 0
                      ) {
                        // If current location starts with /learn and it's the Learn navigation item
                        return "bg-[#cdedfc] dark:bg-[#23272F] dark:text-[#149ECA] rounded-xl mx-6 p-2 active:translate-y-1";
                      } else if (
                        location.pathname === item.link ||
                        location.pathname.startsWith(item.link + "/")
                      ) {
                        // If current location matches the Blog or About page or any subpage
                        return "bg-[#cdedfc] dark:bg-[#23272F] dark:text-[#149ECA] rounded-xl mx-6 p-2 active:translate-y-1";
                      } else {
                        return "mx-6 p-2 active:translate-y-1";
                      }
                    })()}
                  >
                    {item.label}
                  </NavLink>
                );
              })}
            </ul>

            <ul className="flex flex-col mt-5 text-xl mb-44">
              {LearnItems.map((item, index) => {
                return (
                  <NavLink
                    onClick={toggleNavbar}
                    key={index}
                    to={item.link}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-[#cdedfc] dark:bg-[#283541] dark:text-[#149ECA] px-5 py-4 font-semibold active:translate-y-1"
                        : "px-5 py-4 active:translate-y-1"
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

const NavItems = [
  {
    label: "Learn",
    link: "/learn/introduction",
  },
  {
    label: "Blog",
    link: "/blog",
  },
  {
    label: "About",
    link: "/about",
  },
];

const LearnItems = [
  {
    label: "Introduction",
    link: "/learn/introduction",
  },
  {
    label: "Collaborative Filtering",
    link: "/learn/collaborative-filtering",
  },
  {
    label: "User-based Filtering",
    link: "/learn/user-based-filtering",
  },
  {
    label: "Item-based Filtering",
    link: "/learn/item-based-filtering",
  },
  {
    label: "Content-based Filtering",
    link: "/learn/content-based-filtering",
  },
  {
    label: "Session-based Recommender Systems",
    link: "/learn/session-based-recommender-systems",
  },
];
