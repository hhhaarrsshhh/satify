import  { useState } from "react";

const QuestionSection = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex-1 p-8">
      {/* Question */}
      <h2 className="text-xl font-bold mb-4">Question 1</h2>
      <p className="text-gray-700 mb-6">
        A common assumption among art historians is that the invention of
        photography displaced the painted portrait in the public consciousness.
        Based on the text, what can be concluded about the diminishing
        popularity of the portrait miniature's decline?
      </p>

      {/* Options */}
      <div className="flex flex-col gap-4">
        {["A", "B", "C", "D"].map((option) => (
          <button
            key={option}
            onClick={() => handleOptionClick(option)}
            className={`p-4 rounded-lg text-left border-2 ${
              selectedOption === option
                ? "bg-green-100 border-green-500"
                : "bg-white border-gray-300 hover:bg-gray-100"
            }`}
          >
            {option === "A" && (
              <p>
                <strong>A:</strong> Factors other than the rise of photography
                may be more directly responsible for the portrait miniature's
                decline.
              </p>
            )}
            {option === "B" && (
              <p>
                <strong>B:</strong> Although portrait miniatures became less
                common than photographs, they were widely regarded as having
                more artistic merit.
              </p>
            )}
            {/* Add other options as needed */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionSection;
