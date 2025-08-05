const Level = ({ level, subject, characterImg, activeLevel, onLevelClick }) => {
  return (
    <div className="flex-1 flex flex-col items-center bg-blue-300 p-6 rounded-lg shadow-lg">
      {/* Level Title */}
      <h1 className="text-4xl font-bold text-yellow-600 mb-4">{`Level ${level}`}</h1>
      <h2 className="text-2xl text-blue-900 mb-6">{subject}</h2>

      {/* Interactive Levels */}
      <div className="flex items-center gap-4 flex-wrap justify-center mb-6">
        {[1, 2, 3, 4, 5].map((lvl) => (
          <div
            key={lvl}
            onClick={() => onLevelClick(lvl)} 
            className={`w-16 h-16 cursor-pointer ${
              lvl === activeLevel
                ? "bg-yellow-400 text-white"
                : "bg-gray-300 text-gray-700"
            } text-center text-2xl rounded-full flex items-center justify-center font-bold transition-all hover:scale-110`}
          >
            {lvl}
          </div>
        ))}
      </div>

    
    </div>
  );
};

export default Level;
