
const Level = () => {
  return (
    <div className="flex-1 flex flex-col items-center bg-blue-300 p-4 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-yellow-600 mb-4">Level 1</h1>
      <h2 className="text-2xl text-blue-900 mb-8">ENGLISH</h2>
      
      {/* Interactive Elements */}
      <div className="flex items-center gap-4 flex-wrap justify-center">
        <div className="w-16 h-16 bg-yellow-400 text-center text-2xl rounded-full flex items-center justify-center font-bold">1</div>
        <div className="w-16 h-16 bg-gray-300 text-center text-2xl rounded-full flex items-center justify-center font-bold">2</div>
        <div className="w-16 h-16 bg-gray-300 text-center text-2xl rounded-full flex items-center justify-center font-bold">3</div>
        <div className="w-16 h-16 bg-gray-300 text-center text-2xl rounded-full flex items-center justify-center font-bold">4</div>
        <div className="w-16 h-16 bg-gray-300 text-center text-2xl rounded-full flex items-center justify-center font-bold">5</div>
      </div>

      {/* Character */}
      <div className="mt-8">
        <img
          src="/path-to-character-image.png"
          alt="Character"
          className="w-24 h-24"
        />
      </div>
    </div>
  );
};

export default Level;
