import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { quizData } from "./dataComponents/quizData";
import Question from "../subComponents/Question";
import QuizCompletion from "./QuizCompletion";
import QuizInstructions from "./QuizInstructions";

const QuizDetail = () => {
  const { quizId } = useParams();
  const quiz = quizData.find((q) => q.id === parseInt(quizId));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [isInstructionVisible, setIsInstructionVisible] = useState(true);

  const [timeLeft, setTimeLeft] = useState(30 * 60);

  if (!quiz) {
    return <div className="text-center text-red-500 text-xl">Quiz not found</div>;
  }

  const { questions } = quiz;

  useEffect(() => {
    if (isQuizCompleted) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setIsQuizCompleted(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isQuizCompleted]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const nextQuestion = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    setIsQuizCompleted(true);
    alert("Test submitted successfully!");
  };

  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleRetakeQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsQuizCompleted(false);
    setTimeLeft(30 * 60);
  };

  const handleStartQuiz = () => {
    setIsInstructionVisible(false);
  };

  return (
    <div className="quiz-detail p-8 max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
      {isInstructionVisible ? (
        <QuizInstructions onStartQuiz={handleStartQuiz} />
      ) : (
        <>
          {!isQuizCompleted ? (
            <>
              <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">{quiz.title}</h2>
              <div className="text-center text-red-500 font-semibold text-xl mb-4">
                Time Left: {formatTime(timeLeft)}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
                <div
                  className="bg-gradient-to-r from-blue-500 to-teal-500 h-4 rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <h3 className="text-lg font-medium text-center mb-4 text-gray-800">
                Question {currentQuestionIndex + 1} of {questions.length}
              </h3>
              <Question
                question={questions[currentQuestionIndex]}
                nextQuestion={nextQuestion}
              />
              <div className="border-t border-gray-300 my-6"></div> {/* Thin line separator */}
              <div className="flex justify-center mt-6 space-x-4">
                <button
                  onClick={prevQuestion}
                  disabled={currentQuestionIndex === 0}
                  className="bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-500 transition disabled:opacity-50"
                >
                  Previous
                </button>

                <button
                  onClick={() => nextQuestion()}
                  className="bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                  Next
                </button>
              </div>
              <div className="flex justify-center mt-6">
                <button
                  onClick={handleSubmit}
                  className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition"
                >
                  Submit Test
                </button>
              </div>
            </>
          ) : (
            <QuizCompletion
              score={score}
              totalQuestions={questions.length}
              onRetake={handleRetakeQuiz}
            />
          )}
        </>
      )}
    </div>
  );
};

export default QuizDetail;
