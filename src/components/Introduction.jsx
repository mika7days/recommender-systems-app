import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
// import { BsArrowUpCircleFill } from "react-icons/bs";
import { FaRegQuestionCircle } from "react-icons/fa";

import { RxDrawingPinFilled } from "react-icons/rx";

import ScrollToTop from "./ScrollToTop";
import ZoomImage from "./ZoomImage";

import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import Quiz1 from "../quiz/Quiz1";

import recoIntro from "../assets/reco-intro.svg";
import illum1 from "../assets/illum1.svg";
import illum2 from "../assets/illum2.svg";

export const Introduction = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const handleCloseQuiz = () => {
    setShowQuiz(false);
  };

  return (
    <div className="aybala dark:text-white">
      <ScrollToTop />

      <main className="lg:ml-[380px] pt-10 mx-7 md:mx-14">
        <p className="lg:mt-10 text-3xl font-bold lg:text-4xl text-[#23272F] dark:text-[#F6F7F9]">
          Introduction
        </p>

        <div className="contFont bg-[#F6F7F9] dark:bg-[#343A46] dark:text-white rounded-xl border-2 dark:border-0 my-5 p-5 lg:p-7">
          <p className="text-xl font-bold mb-3">What you will learn</p>
          <ul className="list-disc ml-7 leading-7 font-light">
            <li>
              <a className="hover:pl-2" href="#basics-of-recommender-systems">
                Basics of recommender systems
              </a>
            </li>
            <li>
              <a
                className="hover:pl-2"
                href="#how-to-design-a-recommendation-system?"
              >
                How to design a recommendation system?
              </a>
            </li>
            <li>
              <a className="hover:pl-2" href="#popularity-based">
                Popularity based
              </a>
            </li>
            <li>
              <a className="hover:pl-2" href="#classification-based">
                Classification based
              </a>
            </li>
            <li>
              <a className="hover:pl-2" href="#collaborative-filtering">
                Collaborative filtering
              </a>
            </li>
            <li>
              <a className="hover:pl-2" href="#matrix-factorization">
                Matrix factorization
              </a>
            </li>
            <li>
              <a className="hover:pl-2" href="#hybrid-recommendation-systems">
                Hybrid Recommendation systems
              </a>
            </li>
          </ul>
        </div>

        <h1
          id="basics-of-recommender-systems"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] flex items-center"
        >
          <a
            className="flex items-center"
            href="#basics-of-recommender-systems"
          >
            Basics of recommender systems
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>

        <p className="leading-7 my-7 lg:max-w-4xl lg:text-lg">
          A recommendation system is an extensive class of web applications that
          involves predicting the user responses to the options.
          <br />
          <br />
          Recommender Systems, often referred to as recommendation engines, are
          straightforward algorithms designed to sift through vast amounts of
          information to provide users with the most relevant and accurate
          items. By discerning patterns in user data, these systems learn
          consumer preferences and deliver outcomes that align with their needs
          and interests.
          <br />
          <br />
          Real-world examples include Amazon, which utilizes a recommendation
          engine to suggest goods or products that customers may find appealing.
          <br />
          <br />
          You may have encountered the example image below illustrating Amazon's
          recommendation system.
          <br />
          <br />
          <span>
            <ZoomImage src={illum1} alt="illum1" />
          </span>
          <br />
          Indeed, Netflix employs a recommendation engine to suggest content
          that users might enjoy. Ultimately, the goal remains consistent across
          all major platforms: to effectively recommend items to customers,
          enhancing their experience and satisfaction.
        </p>
        <br />
        <br />
        <h1
          id="how-to-design-a-recommendation-system?"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] flex items-center"
        >
          <a
            className="flex items-center"
            href="#how-to-design-a-recommendation-system?"
          >
            How to design a recommendation system?
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          Certainly, while machine learning (ML) is a widely utilized method for
          constructing recommendation systems, it's not the sole option. There
          are various approaches that can be effective, especially in situations
          where data is scarce or a rapid, uncomplicated solution is required.
          <br />
          <br />
          For instance, in a simplified video recommendation system, we might
          recommend videos from the same authors or publications based on the
          user's viewing history. This straightforward method can offer relevant
          suggestions without the complexity of ML algorithms.
          <br />
          <br />
          <span className="flex flex-col ml-10">
            <span className="leading-9">1. popularity based</span>
            <span className="leading-9">2. classification based</span>
            <span className="leading-9">3. classification based</span>
          </span>
        </p>
        <br />
        <br />
        <h1
          id="popularity-based"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] flex items-center"
        >
          <a className="flex items-center" href="#popularity-based">
            Popularity based
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          The simplest method to construct a recommendation system is
          popularity-based, where products are recommended solely based on their
          popularity. Identifying popular products entails determining those
          that are purchased the most.
          <br />
          <br />
          For instance, in a shopping store, popular dresses can be suggested by
          considering their purchase count. This approach recommends items that
          have been bought frequently, making it a straightforward yet effective
          way to provide recommendations.
        </p>
        <br />
        <br />
        <h1
          id="classification-based"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] flex items-center"
        >
          <a className="flex items-center" href="#classification-based">
            Classification based
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          Another method to construct a recommendation system is through a
          classification model. This approach involves using features from both
          users and products to predict whether a particular user will like a
          certain product.
          <br />
          <br />
          When new users join, our classifier assigns a binary value indicating
          whether the user is likely to like a particular product. This allows
          us to recommend products to users based on their predicted
          preferences.
          <br />
          <br />
          <span>
            <ZoomImage src={recoIntro} alt="reco-intro" />
          </span>
          <br />
          In the example provided, user features such as age and gender, along
          with product features like cost, quality, and product history, are
          utilized as input for our classifier. This classifier then generates a
          binary value indicating whether the user is likely to like the product
          or not. Based on this boolean output, we can recommend products to
          customers accordingly.
        </p>
        <br />
        <br />
        <h1
          id="collaborative-filtering"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] flex items-center"
        >
          <a className="flex items-center" href="#collaborative-filtering">
            Collaborative filtering
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          Collaborative filtering models operate under the assumption that
          individuals tend to like items similar to those they have already
          enjoyed, as well as items favored by others with similar tastes. There
          are two main types of collaborative filtering models:
          <br />
          <br />
          <b>Nearest Neighbor:</b> This approach recommends items by identifying
          other users who are most similar to the target user and suggesting
          items they have liked or enjoyed.
          <br />
          <br />
          <b>Matrix Factorization:</b> This method decomposes the user-item
          interaction matrix into two lower-dimensional matrices, capturing
          latent features of users and items. It then predicts user-item
          interactions based on the dot product of these latent feature vectors.
        </p>
        <br />
        <br />
        <h1
          id="matrix-factorization"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] flex items-center"
        >
          <a className="flex items-center" href="#matrix-factorization">
            Matrix factorization
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          Matrix factorization is a key technique in recommendation systems,
          particularly in model-based collaborative filtering.
          <br />
          <br />
          Here's an abstract explanation of matrix factorization:
          <br />
          <br />
          When users provide feedback for movies they've watched (such as rating
          them on a scale of one to five), this feedback can be organized into a
          matrix. In this matrix, each row represents a user, and each column
          represents a different movie. Since not every user watches every
          movie, the matrix will be sparse, reflecting the diverse tastes of
          users.
          <br />
          <br />
          <br />
          <ZoomImage src={illum2} alt="illum2" />
        </p>
        <br />
        <br />
        <h1
          id="hybrid-recommendation-systems"
          className="group lg:mt-10 text-2xl font-bold lg:text-3xl text-[#23272F] dark:text-[#F6F7F9] flex items-center"
        >
          <a
            className="flex items-center"
            href="#hybrid-recommendation-systems"
          >
            Hybrid Recommendation systems
            <RxDrawingPinFilled className="ml-2 text-2xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h1>
        <p className="lg:mt-6 mt-6 lg:max-w-4xl lg:text-lg leading-7">
          Hybrid recommendation systems that combine collaborative and
          content-based approaches can often yield more effective results. These
          systems leverage the strengths of both methods to enhance
          recommendation accuracy.
          <br />
          <br />
          One common approach to implementing hybrid systems is to generate
          predictions separately using both content-based and
          collaborative-based methods. These predictions are then combined using
          various techniques, such as weighted averages or machine learning
          algorithms, to produce a final set of recommendations. This blending
          of approaches can mitigate the limitations of individual methods and
          provide more personalized and accurate recommendations to users.
        </p>
        <br />
        <br />

        {/* QUIZ SECTION */}
        <div className="flex flex-col p-7 rounded-xl bg-[#e0e2f8] dark:bg-[#26353A] lg:mt-6 mt-6 lg:max-w-4xl text-sm lg:text-base leading-7">
          <p className="mb-5 font-bold text-xl flex justify-center">
            <FaRegQuestionCircle className="text-2xl mr-4" />
            <span className="lg:text-xl text-lg">
              Let's Check Your Knowledge!
            </span>
          </p>
          <div className="flex justify-center">
            <button
              className="bg-[#1F4F8D] text-white px-4 py-2 rounded transition ease-in-out  hover:-translate-y-1 hover:scale-110 hover:bg-[#EF720A] duration-100"
              onClick={handleStartQuiz}
            >
              Start Quiz
            </button>
            {showQuiz && <Quiz1 onClose={handleCloseQuiz} />}
          </div>
        </div>

        {/* NAVIGATION */}

        <div className="flex justify-end my-24 text-right lg:mx-20 lg:text-lg text-sm">
          <div className="hover:bg-[#E2E2E2] dark:hover:bg-[#343A46] p-5 rounded-xl">
            <Link to={"/learn/collaborative-filtering"}>
              <p className="pr-10">NEXT</p>
              <span className="flex justify-end">
                <IoIosArrowForward />
              </span>
              <p className="text-[#0A7EA3] dark:text-[#58C4DC] pr-10">
                Collaboraitve Filtering
              </p>
            </Link>
          </div>
        </div>
      </main>

      <div className="lg:ml-[380px] mx-7">
        <Footer />
      </div>
    </div>
  );
};
