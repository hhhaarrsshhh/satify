import React from "react";
import { useNavigate } from "react-router-dom";

const QuizCompletion = ({ score, totalQuestions, onRetake }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-blue-300 text-white">
      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 w-96 text-center">
        <div className="text-yellow-500 text-4xl mb-4">★ ★ ★ ★ ★</div>
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
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Retake Quiz
          </button>
          <button
            onClick={() => navigate("/quiz")}
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
          >
            Go to Quizes
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizCompletion;
