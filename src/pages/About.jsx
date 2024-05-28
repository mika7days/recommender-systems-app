import React, { useState } from "react";
import { Search } from "../components/Search";

export const About = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openSearchPopup = () => {
    setIsSearchOpen(true);
  };

  const closeSearchPopup = () => {
    setIsSearchOpen(false);
  };

  return (
    <div className="dark:bg-[#23272F] grid justify-items-center mt-24 lg:mt-40">
      <button
        onClick={openSearchPopup}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Click Me
      </button>
      {isSearchOpen && (
        <div className="fixed top-50 z-50 bg-black flex items-center justify-center">
          <div className="relative w-[700px] bg-white rounded-lg shadow-lg">
            <button
              onClick={closeSearchPopup}
              className="absolute top-2 right-2 text-black p-2 bg-red-400 z-30"
            >
              Close
            </button>

            <Search />
          </div>
        </div>
      )}
    </div>
  );
};

const searchData = [
  { title: "Introduction", url: "/learn/introduction" },
  { title: "Collaborative Filtering", url: "/learn/collaborative-filtering" },
  {
    title: "User-based Collaborative Filtering",
    url: "/learn/user-based-filtering",
  },
  {
    title: "Item-based Collaborative Filtering",
    url: "/learn/item-based-filtering",
  },
  {
    title: "Content-based Collaborative Filtering",
    url: "/learn/content-based-filtering",
  },
  {
    title: "Session-based Recommender Systems",
    url: "/learn/session-based-recommender-systems",
  },
  {
    title: "Basics of recommender systems",
    url: "/learn/introduction#basics-of-recommender-systems",
  },
  {
    title: "How to design a recommendation system?",
    url: "/learn/introduction#how-to-design-a-recommendation-system?",
  },
  { title: "Popularity based", url: "/learn/introduction#popularity-based" },
  {
    title: "Classification based",
    url: "/learn/introduction#classification-based",
  },
  {
    title: "Collaborative filtering",
    url: "/learn/introduction#collaborative-filtering",
  },
  {
    title: "Matrix factorization",
    url: "/learn/introduction#matrix-factorization",
  },
  {
    title: "Hybrid Recommendation systems",
    url: "/learn/introduction#hybrid-recommendation-systems",
  },
  {
    title: "What is Collaborative Filtering?",
    url: "/learn/collaborative-filtering#what-is-collaborative-filtering?",
  },
  {
    title: "Types of collaborative filtering",
    url: "/learn/collaborative-filtering#types-of-collaborative-filtering",
  },
  {
    title: "Model-based collaborative approach",
    url: "/learn/collaborative-filtering#model-based-collaborative-approach",
  },
  {
    title: "Memory-based collaborative approach",
    url: "/learn/collaborative-filtering#memory-based-collaborative-approach",
  },
  {
    title: "Cold Start Problem",
    url: "/learn/collaborative-filtering#cold-start-problem",
  },
  {
    title: "Recommender System using Pyspark",
    url: "/learn/collaborative-filtering#recommender-system-using-pyspark",
  },
  {
    title: "User-Item Ratings Table",
    url: "/learn/collaborative-filtering#user-item-ratings-table",
  },
  {
    title: "What is recommender system",
    url: "/learn/user-based-filtering#what-is-recommender-system",
  },
  {
    title: "Neighbourhoods",
    url: "/learn/user-based-filtering#neighbourhoods",
  },
  { title: "Python codes", url: "/learn/user-based-filtering#python-codes" },
  { title: "In summary", url: "/learn/user-based-filtering#in-summary" },
  {
    title: "Item-based collaborative filtering",
    url: "/learn/item-based-filtering#item-based-collaborative-filtering",
  },
  { title: "Python codes", url: "/learn/item-based-filtering#python-codes" },
  {
    title: "Building the Recommendation System",
    url: "/learn/item-based-filtering#building-the-recommendation-system",
  },
  {
    title: "Default Voting",
    url: "/learn/item-based-filtering#default-voting",
  },
  {
    title: "Case Amplification",
    url: "/learn/item-based-filtering#case-amplification",
  },
  {
    title: "Imputation Boosted CF",
    url: "/learn/item-based-filtering#imputation-boosted-cf",
  },
  { title: "Hybrid Model", url: "/learn/item-based-filtering#hybrid-model" },
  { title: "In summary", url: "/learn/item-based-filtering#in-summary" },
  {
    title: "Content-based collaborative filtering",
    url: "/learn/content-based-filtering#content-based-collaborative-filtering",
  },
  {
    title: "Term Frequency & Inverse Document Frequency",
    url: "/learn/content-based-filtering#term-frequency&inverse-document-frequency",
  },
  {
    title: "How does Vector Space Model Works?",
    url: "/learn/content-based-filtering#how-does-vector-space-model-works?",
  },
  {
    title: "How to Calculate TF – IDF?",
    url: "/learn/content-based-filtering#how-to-calculate-tf–idf?",
  },
  {
    title: "Term Frequency (TF)",
    url: "/learn/content-based-filtering#term-frequency-tf",
  },
  {
    title: "Inverse Document Frequency (IDF)",
    url: "/learn/content-based-filtering#inverse-document-frequency-idf",
  },
  {
    title: "Creating Binary Representation",
    url: "/learn/content-based-filtering#creating-binary-representation",
  },
  {
    title: "Building a Content Based Recommender for Analytics Vidhya (AV)",
    url: "/learn/content-based-filtering#building-a-content-based-recommender-for-analytics-vidhya-av",
  },
  { title: "In summary", url: "/learn/content-based-filtering#in-summary" },
  {
    title: "Session-based collaborative filtering",
    url: "/learn/session-based-recommender-systems#session-based-collaborative-filtering",
  },
  {
    title: "Session-Based Recommender Systems with Word2Vec",
    url: "/learn/session-based-recommender-systems#session-based-recommender-systems-with-word2vec",
  },
  {
    title: "Why use Word2Vec?",
    url: "/learn/session-based-recommender-systems#why-use-word2vec?",
  },
  {
    title: "Python codes",
    url: "/learn/session-based-recommender-systems#python-codes",
  },
  {
    title: "Data Preprocessing",
    url: "/learn/session-based-recommender-systems#data-preprocessing",
  },
  {
    title: "Building the W2V Recommender System",
    url: "/learn/session-based-recommender-systems#building-the-w2v-recommender-system",
  },
  {
    title: "Training the Model",
    url: "/learn/session-based-recommender-systems#training-the-model",
  },
  {
    title: "Testing and Visualization",
    url: "/learn/session-based-recommender-systems#testing-and-visualisation",
  },
  {
    title: "Visualisation",
    url: "/learn/session-based-recommender-systems#visualisation",
  },
  {
    title: "In summary",
    url: "/learn/session-based-recommender-systems#in-summary",
  },
];
