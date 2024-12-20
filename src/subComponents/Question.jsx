const Question = ({ question, nextQuestion }) => {
  const { question: text, options } = question;

  return (
    <div className="question">
      <p className="text-lg font-medium mb-4">{text}</p>
      <ul className="space-y-4">
        {options.map((option, index) => {
          const optionLabel = String.fromCharCode(65 + index); 
          return (
            <li key={index} className="flex items-center">
              {optionLabel}.
              <button
                onClick={() => nextQuestion(option)}
                className="bg-blue-500 text-white px-4 py-2 ml-4 rounded-lg hover:bg-blue-600 transition"
              >
                <span className="font-medium text-white mr-2"></span>
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Question;
