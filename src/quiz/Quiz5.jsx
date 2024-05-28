// src/Quiz.js
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Quiz5 = ({ onClose }) => {
  const quizzes = [
    {
      question: "What is a key advantage of Content-based recommender systems?",
      options: [
        "They rely solely on user ratings",
        "They create user profiles based on user actions",
        "They require no user interaction",
        "They are highly dependent on user engagement",
      ],
      answer: 1,
    },
    {
      question:
        "What does TF-IDF stand for in the context of recommender systems?",
      options: [
        "Term Frequency - Inverse Document Feature",
        "Term Focus - Integrated Document Format",
        "Total Frequency - Inverse Distribution Frequency",
        "Term Frequency - Inverse Document Frequency",
      ],
      answer: 3,
    },
    {
      question:
        "In the Vector Space Model, how is similarity between items and user profiles computed?",
      options: [
        "By counting the number of shared words",
        "By calculating the cosine of the angle between vectors",
        "By summing the TF-IDF scores",
        "By averaging the Euclidean distances",
      ],
      answer: 1,
    },
    {
      question:
        "What is the purpose of normalizing vectors in the TF-IDF process?",
      options: [
        "To reduce the impact of high-frequency terms",
        "To improve computational efficiency",
        "To increase the weight of rare terms",
        "To ensure consistent scaling across documents",
      ],
      answer: 0,
    },
    {
      question:
        "Which Excel function is commonly used to create user profiles in content-based recommenders?",
      options: ["VLOOKUP", "INDEX", "MATCH", "SUMPRODUCT"],
      answer: 3,
    },
    {
      question: "How are user profiles created in content-based recommenders?",
      options: [
        "By summing the TF-IDF scores of all articles",
        "By taking the dot product of user actions and article attributes",
        "By averaging the ratings of similar users",
        "By clustering users based on their preferences",
      ],
      answer: 1,
    },
    {
      question:
        "What role does the Vector Space Model play in content-based recommenders?",
      options: [
        "It determines user engagement with articles",
        "It calculates the similarity between articles",
        "It computes the average rating of each article",
        "It identifies outliers in user behavior",
      ],
      answer: 1,
    },
    {
      question:
        "How are weighted scores for articles calculated in content-based recommenders?",
      options: [
        "By summing the IDF values for each attribute",
        "By taking the dot product of article vectors and IDF vectors",
        "By dividing TF scores by IDF values",
        "By averaging user ratings for each article",
      ],
      answer: 1,
    },
    {
      question:
        "Which representation is commonly used for user engagement in content-based recommenders?",
      options: [
        "Count data",
        "Binary representation",
        "TF-IDF scores",
        "Euclidean distances",
      ],
      answer: 1,
    },
    {
      question:
        "What is the main advantage of using TF-IDF weighting in content-based recommenders?",
      options: [
        "It increases the importance of high-frequency terms",
        "It allows for faster computation of similarity",
        "It neutralizes the impact of high-frequency terms",
        "It reduces the need for user engagement data",
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

export default Quiz5;
