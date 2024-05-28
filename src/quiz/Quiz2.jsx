// src/Quiz.js
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Quiz2 = ({ onClose }) => {
  const quizzes = [
    {
      question:
        "What technique is commonly used to improve the recommendations of collaborative filtering as more user data is gathered?",
      options: [
        "Matrix Factorization",
        "Memory-based filtering",
        "Model-based approach",
        "Alternating Least Squares",
      ],
      answer: 1,
    },
    {
      question: "What is the main drawback of collaborative filtering?",
      options: [
        "High computational complexity",
        "Limited personalization",
        "Difficulty in implementation",
        "Lack of accuracy in predictions",
      ],
      answer: 1,
    },
    {
      question:
        "What are the two main categories of methods for collaborative filtering?",
      options: [
        "Popularity-based and content-based",
        "Memory-based and model-based",
        "Item-based and user-based",
        "Classification-based and regression-based",
      ],
      answer: 1,
    },
    {
      question:
        "What technique is used in the model-based approach to collaborative filtering to predict user-item interactions?",
      options: [
        "Cosine similarity",
        "Matrix factorization",
        "K-means clustering",
        "Regression analysis",
      ],
      answer: 1,
    },
    {
      question: 'What is the "cold start problem" in collaborative filtering?',
      options: [
        "Difficulty in making accurate recommendations when there is a lack of user or item data",
        "Overfitting of the model to the training data",
        "Inconsistency in user preferences over time",
        "Inability to handle large datasets efficiently",
      ],
      answer: 0,
    },
    {
      question:
        "Which parameter in the ALS algorithm for collaborative filtering controls the level of regularization?",
      options: ["numBlocks", "rank", "lambda", "alpha"],
      answer: 2,
    },
    {
      question:
        "What is the purpose of the implicitPrefs parameter in the ALS algorithm?",
      options: [
        "To specify the number of latent factors in the model",
        "To determine whether to use the explicit or implicit feedback variant",
        "To control the initial level of confidence in the preference observations",
        "To specify the number of iterations to execute",
      ],
      answer: 2,
    },
    {
      question:
        "What method is used in memory-based collaborative filtering to generate recommendations for users?",
      options: [
        "Nearest Neighbor",
        "Matrix Factorization",
        "Deep learning",
        "Clustering",
      ],
      answer: 0,
    },
    {
      question:
        "What technique is used to evaluate the performance of a recommendation model by computing the RMSE on the test data?",
      options: [
        "Regression analysis",
        "Classification",
        "Cosine similarity",
        "Regression evaluator",
      ],
      answer: 3,
    },
    {
      question:
        "How do collaborative filtering recommendation systems generate predictions for new users or items?",
      options: [
        "By utilizing historical data from similar users or items",
        "By clustering users based on demographic information",
        "By using content-based filtering techniques",
        "By analyzing user behavior and preferences",
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

export default Quiz2;
