import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { quizData } from "./dataComponents/quizData";
import Question from "../subComponents/Question";

const QuizDetail = () => {
  const { quizId } = useParams(); // Get quiz ID from URL
  const quiz = quizData.find((q) => q.id === parseInt(quizId));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  // Timer state (30 minutes)
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  if (!quiz) {
    return <div className="text-center text-red-500">Quiz not found</div>;
  }

  const { questions } = quiz;

  // Countdown timer effect
  useEffect(() => {
    if (isQuizCompleted) return; // Stop timer if quiz is completed

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setIsQuizCompleted(true); // Auto-complete quiz when time runs out
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [isQuizCompleted]);

  // Format time as MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const nextQuestion = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizCompleted(true); // Mark quiz as completed
    }
  };

  const handleSubmit = () => {
    setIsQuizCompleted(true); // Mark quiz as completed
    alert("Test submitted successfully!");
  };

  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="quiz-detail p-4">
      <h2 className="text-2xl font-semibold text-center mb-6">{quiz.title}</h2>

      {/* Timer */}
      <div className="text-center text-red-500 font-semibold mb-4">
        Time Left: {formatTime(timeLeft)}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
        <div
          className="bg-blue-500 h-4 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Quiz Questions or Final Score */}
      {!isQuizCompleted ? (
        <>
          <h3 className="text-lg text-center mb-4">
            Question {currentQuestionIndex + 1} of {questions.length}
          </h3>
          <Question
            question={questions[currentQuestionIndex]}
            nextQuestion={nextQuestion}
          />
          <div className="flex justify-center mt-6">
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
            >
              Submit Test
            </button>
          </div>
        </>
      ) : (
        <div className="final-score text-center mt-6">
          <h3 className="text-2xl font-semibold mb-4">Quiz Completed!</h3>
          <p className="text-lg mb-4">
  <span className="font-bold">Correct: {score}</span> 
  <span className="mx-2">/</span>
  <span className="font-bold">Incorrect: {questions.length - score}</span>
</p>

          <button
            onClick={() => window.location.reload()} 
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizDetail;
