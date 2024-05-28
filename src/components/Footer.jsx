import React from "react";
import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="text-sm lg:text-base lg:flex lg:justify-around grid grid-cols-2 border-t-2 gap-10 dark:text-white border-[#EBECF0] lg:py-16 py-10">
        <div className="lg:leading-10">
          <p>
            <Link
              onClick={scrollToTop}
              to={"/learn/introduction"}
              className="leading-10 font-bold text-[#149ECA]"
            >
              Learn
            </Link>
          </p>
          <p className="pb-3">
            <Link onClick={scrollToTop} to={"/learn/collaborative-filtering"}>
              Collaborative Filtering
            </Link>
          </p>
          <p className="pb-3">
            <Link onClick={scrollToTop} to={"/learn/item-based-filtering"}>
              Item-based Filtering
            </Link>
          </p>
          <p className="pb-3">
            <Link onClick={scrollToTop} to={"/learn/content-based-filtering"}>
              Content-based Filtering
            </Link>
          </p>
          <p className="pb-3">
            <Link onClick={scrollToTop} to={"/learn/user-modeling"}>
              User Modelling
            </Link>
          </p>
          <p className="pb-3">
            <Link onClick={scrollToTop} to={"/learn/session-based"}>
              Session-based
            </Link>
          </p>
        </div>

        <div className="leading-10 pl-10 lg:pl-0">
          <p className="font-bold text-[#149ECA]">More</p>
          <p>
            <Link onClick={scrollToTop} to={"/blog"}>
              Blog
            </Link>
          </p>
          <p>
            <Link onClick={scrollToTop} to={"/about"}>
              About
            </Link>
          </p>
        </div>

        <div className="lg:leading-10">
          <p className="font-bold text-[#149ECA]">Recomender Systems</p>
          <p className="font-mono text-sm leading-10">Copyright ©2024</p>
          <p>All rights reserved.</p>
        </div>

        <div className="leading-10 pl-10 lg:pl-0">
          <p className="font-bold text-[#149ECA] lg:text-center">Contact</p>
          <div className="flex gap-2">
            <FaGithub size={25} />

            <FaFacebook size={25} />

            <FaXTwitter size={25} />
          </div>
        </div>
      </div>
    </>
  );
};
