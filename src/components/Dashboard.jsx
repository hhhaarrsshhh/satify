import TestCard from "./TestCard";

const Dashboard = () => {
  const testData = [
    {
      title: "SAT Writing Test",
      category: "Writing",
      imgSrc: "https://via.placeholder.com/150",
    },
    {
      title: "SAT Reading Test",
      category: "Reading",
      imgSrc: "https://via.placeholder.com/150",
    },
    {
      title: "SAT Math Test",
      category: "Math",
      imgSrc: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-around mb-8">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          Practice
        </button>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          My SAT
        </button>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          Test
        </button>
      </div>

      <h2 className="text-2xl font-semibold mb-6">Resume Test</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testData.map((test, index) => (
          <TestCard key={index} test={test} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
