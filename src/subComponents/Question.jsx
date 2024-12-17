const Question = ({ question, nextQuestion }) => {
    const { question: text, options } = question;
  
    return (
      <div className="question">
        <p className="text-lg font-medium mb-4">{text}</p>
        <ul className="space-y-4">
          {options.map((option, index) => (
            <li key={index}>
              <button
                onClick={() => nextQuestion(option)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Question;
  