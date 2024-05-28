// src/Quiz.js
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Quiz4 = ({ onClose }) => {
  const quizzes = [
    {
      question: "What is the purpose of item-based collaborative filtering?",
      options: [
        "To estimate the rating a user would give to a specific item",
        "To predict the similarity between users",
        "To calculate the average rating of items",
        "To analyze user demographics",
      ],
      answer: 0,
    },
    {
      question:
        "What method is used to calculate item similarity in item-based collaborative filtering?",
      options: [
        "Jaccard similarity",
        "Pearson correlation",
        "Cosine similarity",
        "Euclidean distance",
      ],
      answer: 2,
    },
    {
      question:
        "What is the purpose of calculating the RMSE in recommendation systems?",
      options: [
        "To measure the similarity between items",
        "To evaluate the performance of recommendation models",
        "To fill in missing values in the ratings matrix",
        "To determine the neighborhood size",
      ],
      answer: 1,
    },
    {
      question:
        "What technique can be used to adjust the vote weight in item-based collaborative filtering?",
      options: [
        "Default voting",
        "Case amplification",
        "Imputation techniques",
        "Hybrid models",
      ],
      answer: 0,
    },
    {
      question:
        "What is one way to improve the item-based collaborative filtering model?",
      options: [
        "Focus on co-rated items instead of the overall list",
        "Reduce the significance of every vote",
        "Use linear regression for imputation",
        "Only use the item-based model without hybridization",
      ],
      answer: 0,
    },
    {
      question:
        "What does RMSE value of 1.045 indicate about the item-based collaborative filtering model?",
      options: [
        "It indicates perfect accuracy",
        "It indicates high accuracy",
        "It indicates low accuracy",
        "It indicates moderate accuracy",
      ],
      answer: 2,
    },
    {
      question:
        "What is the purpose of default voting in adjusting vote weight?",
      options: [
        "To reward high similarity ratings",
        "To focus on co-rated items",
        "To extend the user's voting history",
        "To reduce the significance of low ratings",
      ],
      answer: 2,
    },
    {
      question:
        "Which method is used to calculate the similarity between items in the provided Python code?",
      options: [
        "Jaccard similarity",
        "Pearson correlation",
        "Cosine similarity",
        "Euclidean distance",
      ],
      answer: 2,
    },
    {
      question: "What does the heatmap illustrate in the provided Python code?",
      options: [
        "The average rating of items",
        "The sparsity of data and its contribution to low data similarity",
        "The distribution of users",
        "The performance of the recommendation system",
      ],
      answer: 1,
    },
    {
      question:
        "What is one strategy mentioned to enhance the item-based collaborative filtering model?",
      options: [
        "Using only the item-based model without hybridization",
        "Focusing on reducing data sparsity",
        "Employing imputation techniques",
        "Decreasing the neighborhood size",
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

export default Quiz4;
