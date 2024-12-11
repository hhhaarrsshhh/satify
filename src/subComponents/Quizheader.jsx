
const QuizHeader = () => {
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      {/* Progress Bar */}
      <div className="w-3/4 bg-gray-300 rounded-full h-4">
        <div className="bg-red-500 h-4 rounded-full" style={{ width: "50%" }}></div>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4">
        <div className="flex items-center text-red-500 gap-1 text-xl">
          ❤️ <span>5</span>
        </div>
        <div className="flex items-center text-yellow-500 gap-1 text-xl">
          ⭐ <span>3</span>
        </div>
      </div>
    </div>
  );
};

export default QuizHeader;
