import { React } from "react";

import { IoIosArrowForward } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";

export const Learn = () => {
  return (
    <>
      <div className="mt-16">
        <aside className="fixed dark:text-[#E0E2E6] lg:block hidden w-[300px] flex-col overflow-scroll h-screen">
          <div className="flex flex-col mt-7 mb-40">
            <p className="pl-7 py-4 text-sm dark:text-[#98A1B3] text-[#7C8396]">
              GET STARTED
            </p>
            <NavLink
              to={"introduction"}
              className={({ isActive }) =>
                isActive
                  ? "dark:text-[#149FCA] bg-[#CDEDFC] dark:bg-[#283541] text-[#23272F] aybala pl-7 flex justify-between items-center rounded-r-2xl dark:hover:bg-[#283541] hover:bg-[#CDEDFC] py-4"
                  : "aybala pl-7 flex justify-between items-center rounded-r-2xl dark:text-[#EBECF0] text-[#23272F] dark:hover:bg-[#343A46] hover:bg-[#edecec] py-4"
              }
            >
              Introduction
            </NavLink>
            <p className="pl-7 py-4 mt-4 text-sm dark:border-[#343A46] dark:text-[#98A1B3] text-[#7C8396] border-t-2">
              LEARN
            </p>
            {LearnItems.map((item, index) => {
              return (
                <NavLink
                  to={item.link}
                  key={index}
                  className={({ isActive }) =>
                    isActive
                      ? "dark:text-[#149FCA] bg-[#CDEDFC] dark:bg-[#283541] text-[#23272F] aybala font-extrabold pl-7 flex justify-between items-center rounded-r-2xl dark:hover:bg-[#283541] hover:bg-[#CDEDFC] py-4"
                      : "aybala font-extrabold pl-7 flex justify-between items-center rounded-r-2xl dark:text-[#EBECF0] text-[#23272F] dark:hover:bg-[#343A46] hover:bg-[#edecec] py-4"
                  }
                >
                  <p>{item.label}</p>
                  <IoIosArrowForward className="mr-3" />
                </NavLink>
              );
            })}
          </div>
        </aside>
        <Outlet />
      </div>
    </>
  );
};

const LearnItems = [
  {
    label: "Collaborative Filtering",
    link: "collaborative-filtering",
  },
  {
    label: "User-based Filtering",
    link: "user-based-filtering",
  },
  {
    label: "Item-based Filtering",
    link: "item-based-filtering",
  },
  {
    label: "Content-based Filtering",
    link: "content-based-filtering",
  },
  {
    label: "Session-based Recommender Systems",
    link: "session-based-recommender-systems",
  },
];
