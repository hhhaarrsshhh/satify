import { Link } from "react-router-dom";
import { quizData } from "./dataComponents/quizData"; 

const Quiz = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
      {/* Instructions Section */}
      <div className="bg-white w-full max-w-screen-lg shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Instructions</h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Read each question carefully before answering.</li>
          <li>You have limited time to complete the quiz.</li>
          <li>Ensure a stable internet connection for smooth performance.</li>
          <li>Each question carries equal marks, and no negative marking is applied.</li>
          <li>Click the "Start Quiz" button to begin.</li>
        </ul>
      </div>

      {/* Available Quizzes Section */}
      <div className="w-full max-w-screen-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Available Quizzes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizData.map((quiz) => (
            <div
              key={quiz.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{quiz.title}</h3>
                <p className="text-gray-600 text-sm mb-4">Duration: {quiz.time}</p>
                <div className="flex justify-between text-gray-600 text-sm mb-4">
                  <span>⏳ {quiz.questions.length} Questions</span>
                </div>
                <Link to={`/quiz/${quiz.id}`}>
                  <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 font-semibold transform hover:translate-y-1">
                    Start Quiz
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
