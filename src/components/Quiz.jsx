import { Link } from "react-router-dom";

const quizzes = [
  { id: 1, title: "Math Quiz" },
  { id: 2, title: "Science Quiz" },
  { id: 3, title: "History Quiz" },
  { id: 4, title: "Geography Quiz" },
];

const Quiz = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="my-6 w-full max-w-screen-xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Available Quizzes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {quizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl"
            >
              <div className="p-6 text-center">
                <h3 className="text-2xl text-start font-semibold text-gray-700 mb-4">{quiz.title}</h3>
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
