// src/Quiz.js
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Quiz6 = ({ onClose }) => {
  const quizzes = [
    {
      question:
        "What type of recommender system focuses on recommending items based on a user’s behavior within a specific session or time frame?",
      options: [
        "Session-based recommender system",
        "Content-based recommender system",
        "Collaborative filtering recommender system",
        "Popularity-based recommender system",
      ],
      answer: 0,
    },
    {
      question:
        "What is the main advantage of a session-based recommender system?",
      options: [
        "It provides recommendations based on long-term preferences.",
        "It has high computational complexity.",
        "It requires a large amount of user information.",
        "It can provide recommendations even when there is limited or no information about the user’s long-term preferences.",
      ],
      answer: 3,
    },
    {
      question:
        "What technique is commonly used in session-based recommender systems to build a simple Recommendation System?",
      options: [
        "Word2Vec",
        "Logistic Regression",
        "Random Forest",
        "K-Means Clustering",
      ],
      answer: 0,
    },
    {
      question:
        "What is one of the main reasons for using Word2Vec in session-based recommendation systems?",
      options: [
        "To predict user demographics",
        "To analyze user preferences",
        "To interpret words according to their context",
        "To improve computational efficiency",
      ],
      answer: 2,
    },
    {
      question:
        "In session-based recommendation systems, how are sessions typically defined?",
      options: [
        "As a sequence of events within a user's lifetime",
        "As a sequence of interactions within a specific session",
        "As a sequence of user preferences",
        "As a sequence of collaborative filtering results",
      ],
      answer: 1,
    },
    {
      question:
        "What type of data preprocessing is performed before using the data in a Word2Vec model?",
      options: [
        "Feature engineering",
        "Normalization",
        "Cleaning missing values",
        "Dimensionality reduction",
      ],
      answer: 2,
    },
    {
      question:
        "What parameter is used in Word2Vec to ensure the model trains only on products that appear at least a certain number of times in the dataset?",
      options: ["Vector size", "Window size", "Min count", "Number of epochs"],
      answer: 2,
    },
    {
      question:
        "What type of products does the Word2Vec model recommend for a given product ID based on its similarity?",
      options: [
        "Products with the highest price",
        "Products with the lowest rating",
        "Products with similar characteristics",
        "Products with the highest sales volume",
      ],
      answer: 2,
    },
    {
      question: "How are products represented in the Word2Vec model?",
      options: [
        "As images",
        "As text descriptions",
        "As numerical vectors",
        "As audio files",
      ],
      answer: 2,
    },
    {
      question:
        "What is one potential future direction for refining and evaluating the Word2Vec-based recommender system?",
      options: [
        "Experimenting with different training input parameters",
        "Using deep learning for training",
        "Applying reinforcement learning techniques",
        "Collecting more user demographic data",
      ],
      answer: 0,
    },
  ];

  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const handleOptionClick = (index) => {
    setSelectedOption(selectedOption === index ? null : index);
  };

  const handleNextClick = () => {
    if (selectedOption === quizzes[currentQuiz].answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQuiz < quizzes.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRetakeClick = () => {
    setCurrentQuiz(0);
    setScore(0);
    setSelectedOption(null);
    setShowResult(false);
    setShowAnswers(false);
  };

  const toggleAnswers = () => {
    setShowAnswers(!showAnswers);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-90 overflow-auto">
      <div className="bg-white lg:my-20 border-2 border-[#1F4F8D] rounded-lg p-8 max-w-lg relative">
        <button
          className="absolute top-0 right-0 text-black text-4xl px-2 py-1"
          onClick={onClose}
        >
          <IoCloseSharp />
        </button>
        {showResult ? (
          // Result view
          <div className="max-h-[70vh]">
            {/* Fixed part */}
            <div className="mb-8">
              <h2 className="lg:text-2xl text-xl font-bold mb-4 dark:text-black">
                Quiz Result
              </h2>
              <p className="lg:text-xl text-lg mb-4 dark:text-black">
                Your score: {score} / {quizzes.length}
              </p>
              <button
                className="bg-[#1F4F8D] text-white lg:px-4 px-2 py-2 lg:text-base text-sm rounded mr-2 active:translate-y-1"
                onClick={handleRetakeClick}
              >
                Retake Quiz
              </button>
              <button
                className="bg-green-500 text-white lg:px-4 px-2 py-2 lg:text-base text-sm rounded active:translate-y-1"
                onClick={toggleAnswers}
              >
                {showAnswers ? "Hide Answers" : "View Answers"}
              </button>
            </div>
            {/* Scrollable list of correct answers */}
            {showAnswers && (
              <div className="max-h-[50vh] overflow-y-auto scroll_bar_design dark:text-black">
                <h3 className="text-lg font-bold mb-2">Correct Answers:</h3>
                <ul className="list-disc text-sm md:text-base pr-2">
                  {quizzes.map((quiz, index) => (
                    <li key={index}>
                      <span>
                        {index + 1}. {quiz.question}
                      </span>
                      <br />
                      <span className="font-bold">
                        ✅ {quiz.options[quiz.answer]}
                      </span>
                      <br />
                      <br />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          // Quiz view
          <div>
            <h2 className="lg:text-2xl sm:text-lg text-sm font-bold mb-4 dark:text-black">
              {quizzes[currentQuiz].question}
            </h2>
            <div className="space-y-4">
              {quizzes[currentQuiz].options.map((option, index) => (
                <button
                  key={index}
                  className={`w-full px-4 py-2 text-left border rounded text-sm lg:text-base ${
                    selectedOption === index
                      ? "bg-[#1F4F8D] text-white"
                      : "bg-gray-200 dark:text-black"
                  }`}
                  onClick={() => handleOptionClick(index)}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <button
                className="bg-[#EE720A] text-white lg:px-4 lg:text-base text-sm px-2 py-2 rounded active:translate-y-1"
                onClick={handleRetakeClick}
              >
                Retake Quiz
              </button>
              <button
                className="bg-[#1F4F8D] text-white lg:px-4 lg:text-base text-sm px-2 py-2 rounded active:translate-y-1"
                onClick={handleNextClick}
              >
                {currentQuiz < quizzes.length - 1 ? "Next" : "Submit"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz6;
