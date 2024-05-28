import React from "react";
import { Link } from "react-router-dom";
import homepage1 from "../assets/homepage-1.svg";
import homepage2 from "../assets/homepage-2.svg";
import homepage3 from "../assets/homepage-3.svg";

import { SlArrowDown } from "react-icons/sl";
import { Footer } from "./Footer";
import { FloatingEmojis } from "./FloatingEmojis";

export const Body = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-24 lg:mt-40">
        <span className="dark:drop-shadow-[0_0_5px_#090808] w-[161px] lg:w-[200px] h-[160px] lg:h-[200px] bg-contain bg-[url('/src/assets/dark-reco-logo.svg')] dark:bg-[url('./assets/light-reco-logo.svg')]"></span>
        {/* <FloatingEmojis /> */}
        <p className="recoFont text-[#E57B0E] dark:text-[#E57B0E] font-bold text-2xl lg:text-3xl">
          RECOMMENDER
        </p>
        <p className="recoFont text-[#1F4F8F] dark:text-[#149FCA] font-bold text-5xl lg:text-6xl">
          SYSTEM
        </p>
        <p className="sloganFont text-[#404756] dark:text-[#EBECF0] text-[25px] sm:text-3xl text-xl pt-6 px-5 text-center font-medium">
          A system tailors suggestions for a better user experience
        </p>

        <div className="flex flex-col md:flex-row justify-center mt-10">
          <Link
            to={"/learn/introduction"}
            className="active:translate-y-1 text-center my-2 md:mx-4 font-medium py-3 lg:px-10 px-24 rounded-2xl lg:text-xl text-lg text-white dark:bg-[#149FCA] bg-[#1F4F8F]"
          >
            Learn
          </Link>

          <a
            href="#welcome"
            className="active:translate-y-1 text-center my-2 md:mx-4 font-medium py-3 lg:px-10 px-20 rounded-2xl lg:text-xl text-lg text-[#1F4F8F] dark:text-[#149FCA] border-2 dark:border-[#149FCA] border-[#1F4F8F]"
          >
            Explore Now
          </a>
        </div>

        <SlArrowDown className="md:hidden animate-bounce transition-all text-3xl mt-12 dark:text-[#EBECF0]" />

        <div
          id="welcome"
          className="flex flex-col lg:flex-row bg-[#F8F8F9] dark:bg-[#191B20] items-center mt-60 py-10 lg:py-20 dark:text-white"
        >
          <span className="flex flex-col">
            <p className="text-center text-3xl md:text-4xl lg:text-5xl">
              Welcome to Recommender System!
            </p>
            <p className="leading-8 mt-5 lg:mx-20 mx-5 text-lg md:text-xl">
              Explore a world where algorithms and personalization merge.
              Welcome to Recommender System – your digital guide to unraveling
              the mysteries of tailored suggestions and cutting-edge technology,
              whether you're a curious learner or a seasoned professional.
            </p>
          </span>

          <img
            className="mt-10 homepage_pic_animation pic_shadow"
            src={homepage1}
            alt="homepage-1"
          />
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center dark:bg-[#23272F] mt-20 lg:mt-36 py-10 lg:py-20 dark:text-white">
          <img
            className="mt-10 homepage_pic_animation pic_shadow"
            src={homepage2}
            alt="homepage-1"
          />
          <span className="flex flex-col">
            <p className="text-center text-3xl md:text-4xl lg:text-5xl">
              Unlocking the Power of Recommendations
            </p>
            <p className="leading-8 mt-5 lg:mx-20 mx-5 text-lg md:text-xl">
              Explore the mechanisms that power personalized suggestions across
              platforms. From movie streaming to e-commerce, delve into the
              intricate algorithms that transform data into meaningful insights.
              Unleash the power of recommendations and understand how they shape
              the digital landscape.
            </p>
          </span>
        </div>

        <div className="flex flex-col lg:flex-row bg-[#F8F8F9] dark:bg-[#191B20] items-center mt-36 lg:mt-36 py-10 lg:py-20 dark:text-white">
          <span className="flex flex-col">
            <p className="text-center text-3xl md:text-4xl lg:text-5xl">
              Your Guide to Personalized Experiences
            </p>
            <p className="leading-8 mt-5 lg:mx-20 mx-5 text-lg md:text-xl">
              Navigate the landscape of personalized experiences with
              confidence. Guide through the dynamic world of recommendation
              systems. Whether you're seeking to enhance user engagement,
              optimize content delivery, or simply understand the magic behind
              tailored suggestions, our platform is your companion in the
              pursuit of creating richer, more personalized digital experiences.
            </p>
          </span>

          <img
            className="mt-10 homepage_pic_animation pic_shadow"
            src={homepage3}
            alt="homepage-1"
          />
        </div>
      </div>
      <div className="mx-7">
        <Footer />
      </div>
    </>
  );
};
