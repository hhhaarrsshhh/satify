import TestCard from "./TestCard";
import Header from "./Header";
import SATTests from "../subComponents/SatDataHome";
import img1 from '../assets/Frame 23.png'
import img2 from '../assets/Frame 25.png'
import img3 from '../assets/Frame 31.png'
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
    <div className="p-4 md:p-8">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        {/* Left Section */}
        <div>
          {/* Header */}
          <Header />

          {/* Buttons */}
          <div className="flex max-sm:h-10 max-sm:w-28 max-sm:flex-justify-center md:justify-around gap-4 my-6 ">
           <img src={img2} className="h-18 w-18"/>
           <img src={img1} className="h-18 w-18 rounded-lg"/>

           <img src={img3} className="h-18 w-18"/>

          </div>

          {/* Resume Test Heading */}
          <h2 className="text-xl md:text-2xl max-sm:text-start font-semibold mb-4 ml-4 text-center md:text-left">
            Resume Test
          </h2>

          {/* Test Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testData.map((test, index) => (
              <TestCard key={index} test={test} />
            ))}
          </div>

          {/* SATTests Component */}
          <div className="mt-8">
            <SATTests />
          </div>
        </div>

        {/* Right Sidebar Section */}
        <div className="w-full">
          <div className="bg-white shadow-md rounded-lg p-6">
            {/* Profile Section */}
            <div className="flex flex-col items-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-4xl text-gray-600 font-bold">OK</span>
              </div>
              <h2 className="mt-4 text-lg font-semibold">Omar Khan</h2>
            </div>

            {/* Test Progress */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2 text-center lg:text-left">
                Your Test Progress
              </h3>
              <div className="grid grid-cols-5 gap-2 items-end h-24">
                {[30, 50, 70, 90, 80].map((height, index) => (
                  <div
                    key={index}
                    className="bg-purple-400 rounded-md"
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Completed Test Section */}
            <div>
              <h3 className="text-lg font-medium mb-2 text-center lg:text-left">
                Completed Tests
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span className="font-medium">Reading</span>
                  <span className="text-green-600 font-bold">100%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">Writing and Language</span>
                  <span className="text-green-600 font-bold">100%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
