const TestCard = ({ test }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
      {/* Test Image */}
      <img
        src={test.imgSrc}
        alt={test.title}
        className="w-full h-36 object-cover rounded-t-md mb-4"
      />

      {/* Category Tag */}
      <span className="bg-purple-200 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">
        {test.category.toUpperCase()}
      </span>

      {/* Test Title */}
      <h3 className="text-lg font-semibold mt-2">{test.title}</h3>

      {/* Author Section */}
      <div className="flex items-center mt-4">
        <img
          src="https://via.placeholder.com/32"
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover"
        />
        <p className="ml-2 text-sm text-gray-500">Omar Khan</p>
      </div>

      {/* Progress Bar */}
      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-purple-500 h-2.5 rounded-full"
            style={{ width: `${test.progress}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 text-right mt-1">{test.progress}% Complete</p>
      </div>
    </div>
  );
};

export default TestCard;
