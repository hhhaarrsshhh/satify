
const QuizInstructions = ({ onStartQuiz }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Quiz Instructions</h2>
        <p className="mb-4">1. You have 30 minutes to complete the quiz.</p>
        <p className="mb-4">2. You can only answer each question once.</p>
        <p className="mb-4">3. Choose the correct answer for each question to get a score.</p>
        <button
          onClick={onStartQuiz}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizInstructions;
