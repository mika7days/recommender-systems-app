// src/Quiz1.jsx
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Quiz1 = ({ onClose }) => {
  const quizzes = [
    {
      question: "What are recommendation systems also known as?",
      options: [
        "Suggestion Engines",
        "Query Engines",
        "Ranking Systems",
        "Decision Engines",
      ],
      answer: 0,
    },
    {
      question:
        "What is the main drawback of a popularity-based recommendation system?",
      options: [
        "Limited personalization",
        "High computational complexity",
        "Difficulty in implementation",
        "Inaccuracy in predicting user preferences",
      ],
      answer: 2,
    },
    {
      question: "What is the primary goal of recommendation systems?",
      options: [
        "Increase platform traffic",
        "Enhance user experience and satisfaction",
        "Maximize advertising revenue",
        "Improve website design",
      ],
      answer: 1,
    },
    {
      question:
        "Which type of recommendation system uses user-item interaction data to generate predictions?",
      options: [
        "Content-based filtering",
        "Collaborative filtering",
        "Hybrid recommendation systems",
        "Popularity-based filtering",
      ],
      answer: 2,
    },
    {
      question:
        "Which approach is used in a classification-based recommendation system to predict whether a user will like a certain product?",
      options: [
        "Nearest Neighbor",
        "Matrix Factorization",
        "Regression Analysis",
        "Decision Trees",
      ],
      answer: 2,
    },
    {
      question:
        "What features are utilized in a classification-based recommendation system to predict user preferences?",
      options: [
        "User age and gender",
        "Product popularity",
        "Purchase history",
        "User demographics and product features",
      ],
      answer: 3,
    },
    {
      question:
        "In collaborative filtering, what assumption do models operate under?",
      options: [
        "Users have diverse tastes",
        "Users prefer items that are least liked by others",
        "Users like items similar to those they have enjoyed",
        "Users' preferences do not change over time",
      ],
      answer: 2,
    },
    {
      question:
        "What technique is commonly used in hybrid recommendation systems to combine collaborative and content-based approaches?",
      options: [
        "Weighted averages",
        "Singular Value Decomposition",
        "Principal Component Analysis",
        "Naive Bayes Classifier",
      ],
      answer: 0,
    },
    {
      question:
        "What is matrix factorization primarily used for in recommendation systems?",
      options: [
        "Cleaning data",
        "Clustering users",
        "Generating predictions",
        "Analyzing user behavior",
      ],
      answer: 2,
    },
    {
      question:
        "How do hybrid recommendation systems leverage both collaborative and content-based approaches?",
      options: [
        "By using only collaborative filtering",
        "By using only content-based filtering",
        "By combining predictions from both approaches",
        "By selecting one approach based on user preferences",
      ],
      answer: 2,
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

export default Quiz1;
