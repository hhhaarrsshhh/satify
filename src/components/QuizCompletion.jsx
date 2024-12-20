import React from "react";
import { useNavigate } from "react-router-dom";

const QuizCompletion = ({ score, totalQuestions, onRetake }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center text-white">
      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 w-96 text-center">
        {/* Large Stars */}
        <div className="text-yellow-500 text-6xl mb-4">
          ★ ★ ★ ★ ★
        </div>

        <h3 className="text-2xl font-semibold mb-4">Quiz Completed!</h3>
        <p className="text-lg mb-4">
          <span className="font-bold text-green-600">Correct: {score}</span>{" "}
          <span className="mx-2">/</span>
          <span className="font-bold text-red-600">
            Incorrect: {totalQuestions - score}
          </span>
        </p>
        <div className="flex justify-around mt-6">
          <button
            onClick={onRetake}
            className="bg-white text-blue-500 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-50 transition"
          >
            Retake Quiz
          </button>
          <button
            onClick={() => navigate("/quiz")}
            className="bg-white text-blue-500 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-50 transition"
          >
            Go to Quizzes
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizCompletion;
