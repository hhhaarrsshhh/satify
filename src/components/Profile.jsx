import React from "react";

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 234 567 8901",
    username: "johndoe123",
    avatar: "https://via.placeholder.com/150",
  };

  const levelStats = {
    pointsEarned: 1200,
    levelCompletedEnglish: 5,
    levelCompletedMath: 4,
  };

  const quizStats = {
    testsCompleted: 30,
    testsFailed: 5,
    testsPassed: 25,
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gradient-to-r from-blue-500 to-blue-400 p-10 rounded-lg shadow-2xl max-w-6xl mx-auto space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Left Section */}
      <div className="flex flex-col lg:w-3/4 space-y-8">
        {/* Avatar and Online Status */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={user.avatar}
              alt="User Avatar"
              className="w-36 h-36 rounded-full border-4 border-white shadow-lg"
            />
            <span className="absolute bottom-2 right-2 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></span>
          </div>

          {/* User Info */}
          <div className="text-left space-y-2">
            <h2 className="text-4xl font-extrabold text-white">{user.name}</h2>
            <p className="text-blue-200 text-lg">{user.email}</p>
            <p className="text-blue-200 text-lg">{user.phone}</p>
            <p className="text-blue-300 italic">@{user.username}</p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Level Stats */}
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Level Stats
            </h3>
            <div className="flex justify-between mb-2">
              <strong className="text-gray-600">Points Earned:</strong>
              <span className="text-blue-600">{levelStats.pointsEarned}</span>
            </div>
            <div className="flex justify-between mb-2">
              <strong className="text-gray-600">Completed (English):</strong>
              <span className="text-blue-600">
                {levelStats.levelCompletedEnglish}
              </span>
            </div>
            <div className="flex justify-between">
              <strong className="text-gray-600">Completed (Math):</strong>
              <span className="text-blue-600">
                {levelStats.levelCompletedMath}
              </span>
            </div>
          </div>

          {/* Quiz Stats */}
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Quiz Stats
            </h3>
            <div className="flex justify-between mb-2">
              <strong className="text-gray-600">Tests Completed:</strong>
              <span className="text-blue-600">{quizStats.testsCompleted}</span>
            </div>
            <div className="flex justify-between mb-2">
              <strong className="text-gray-600">Tests Failed:</strong>
              <span className="text-red-600">{quizStats.testsFailed}</span>
            </div>
            <div className="flex justify-between">
              <strong className="text-gray-600">Tests Passed:</strong>
              <span className="text-green-600">{quizStats.testsPassed}</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-start mt-6">
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg shadow hover:bg-red-600 transition-transform transform hover:scale-105">
            Logout
          </button>
          <button className="bg-white text-blue-500 px-6 py-3 rounded-lg shadow hover:bg-blue-100 transition-transform transform hover:scale-105">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/4">
        <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-8 rounded-lg shadow-md space-y-4">
          <h3 className="text-2xl font-bold">You're using the Beta version</h3>
          <p className="text-sm leading-relaxed">
            Take your learning to the next level — switch to premium today!
          </p>
          <ul className="text-sm list-disc ml-4 space-y-1">
            <li>Exclusive Test Papers</li>
            <li>Access to Premium Levels</li>
            <li>SAT Preparation Guide</li>
          </ul>
          <button className="bg-yellow-500 text-white px-4 py-3 rounded shadow hover:bg-yellow-600 w-full">
            Switch to Premium
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
