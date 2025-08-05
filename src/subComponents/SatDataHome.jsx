
const SATTests = () => {
  const testData = [
    {
      id: 1,
      name: "SAT 1",
      date: "25/2/2023",
      type: "WRITING",
      title: "Understanding Concept Of React",
    },
    {
      id: 2,
      name: "PSAT 2",
      date: "25/2/2023",
      type: "READING",
      title: "Understanding Concept Of React",
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto mt-10">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Your SAT Test's</h2>
        <a href="#" className="text-blue-600 font-medium hover:underline">
          See All
        </a>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          {/* Table Header */}
          <thead>
            <tr className="text-gray-600 text-sm border-b">
              <th className="py-2 px-4 text-left">TEST NAME AND DATE</th>
              <th className="py-2 px-4 text-left">TEST TYPE</th>
              <th className="py-2 px-4 text-left">TEST TITLE</th>
              <th className="py-2 px-4 text-left">ACTIONS</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {testData.map((test) => (
              <tr key={test.id} className="hover:bg-gray-50 text-gray-800">
                {/* Test Name & Date */}
                <td className="py-4 px-4 flex items-center space-x-2">
                  
                  <div>
                    <p className="font-medium">{test.name}</p>
                    <p className="text-sm text-gray-500">{test.date}</p>
                  </div>
                </td>

                {/* Test Type */}
                <td className="py-4 px-4">
                  <span className="bg-purple-200 text-purple-600 px-2 py-1 rounded-full text-xs font-medium">
                    {test.type}
                  </span>
                </td>

                {/* Test Title */}
                <td className="py-4 px-4">{test.title}</td>

                {/* Actions */}
                <td className="py-4 px-4">
                  <button className="bg-blue-100 text-blue-600 hover:bg-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                    SHOW DETAILS
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SATTests;
