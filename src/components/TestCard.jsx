
const TestCard = ({ test }) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <img
        src={test.imgSrc}
        alt={test.title}
        className="w-full h-32 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-bold">{test.title}</h3>
      <p className="text-sm text-gray-600">{test.category}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Resume
      </button>
    </div>
  );
};

export default TestCard;
