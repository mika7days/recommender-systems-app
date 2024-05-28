// src/Quiz.js
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Quiz3 = ({ onClose }) => {
  const quizzes = [
    {
      question:
        "What method is used to generate recommendations based on similar user preferences in collaborative filtering?",
      options: [
        "Item-based collaborative filtering",
        "User-based collaborative filtering",
        "Matrix factorization",
        "Content-based filtering",
      ],
      answer: 1,
    },
    {
      question: "How is social proof used in making recommendations?",
      options: [
        "By analyzing user demographics",
        "By comparing item popularity",
        "By asking known individuals for suggestions",
        "By utilizing machine learning algorithms",
      ],
      answer: 2,
    },
    {
      question:
        "What formula is used to mathematically express the rating for item i for user u in collaborative filtering?",
      options: [
        "Total number of users / Sum of ratings for item i",
        "Sum of ratings for item i / Total number of users",
        "Total number of users / Sum of absolute values of weights",
        "Sum of absolute values of weights / Total number of users",
      ],
      answer: 1,
    },
    {
      question:
        "How is the degree of similarity between two users determined in collaborative filtering?",
      options: [
        "By calculating the Pearson correlation coefficient",
        "By computing the cosine similarity",
        "By using the Jaccard similarity index",
        "By analyzing user behavior",
      ],
      answer: 0,
    },
    {
      question:
        "What technique is used to normalize ratings in collaborative filtering?",
      options: [
        "Subtracting the mean rating of each user from their ratings",
        "Adding the mean rating of each item to all ratings",
        "Multiplying all ratings by a constant factor",
        "Taking the square root of all ratings",
      ],
      answer: 0,
    },
    {
      question:
        "What is the purpose of selecting a neighborhood in collaborative filtering?",
      options: [
        "To increase computational complexity",
        "To decrease the accuracy of predictions",
        "To reduce memory space usage",
        "To improve forecast accuracy",
      ],
      answer: 3,
    },
    {
      question:
        "Which method can be used to select users within a neighborhood?",
      options: [
        "Selecting users with the highest ratings",
        "Selecting users with the lowest ratings",
        "Selecting users with similar tastes",
        "Selecting users randomly",
      ],
      answer: 2,
    },
    {
      question:
        "What libraries are commonly used for implementing collaborative filtering in Python?",
      options: [
        "Pandas and NumPy",
        "Matplotlib and Seaborn",
        "Scikit-learn and TensorFlow",
        "NLTK and SpaCy",
      ],
      answer: 0,
    },
    {
      question:
        "What metric is commonly used to evaluate the performance of recommendation models?",
      options: [
        "Mean Absolute Error (MAE)",
        "Root Mean Squared Error (RMSE)",
        "Precision and Recall",
        "F1 Score",
      ],
      answer: 1,
    },
    {
      question:
        "What is the purpose of computing the Pearson correlation coefficient in collaborative filtering?",
      options: [
        "To measure the similarity between items",
        "To fill in missing values in the ratings matrix",
        "To determine the neighborhood size",
        "To calculate the rating for user-item pairs",
      ],
      answer: 3,
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

export default Quiz3;
