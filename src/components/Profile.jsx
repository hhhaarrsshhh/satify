import React from "react";

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 234 567 8901",
    username: "johndoe123",
    avatar: "https://via.placeholder.com/150", // Replace with an actual image URL
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
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* Avatar */}
      <img
        src={user.avatar}
        alt="User Avatar"
        className="w-24 h-24 rounded-full mb-4"
      />

      {/* User Info */}
      <h2 className="text-2xl font-semibold mb-2">{user.name}</h2>
      <p className="text-gray-500 mb-1">{user.email}</p>
      <p className="text-gray-500 mb-1">{user.phone}</p>
      <p className="text-gray-500 mb-4">{user.username}</p>

      {/* Statistics Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Level Stats */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Level Stats</h3>
          <div className="mb-2">
            <strong>Points Earned: </strong>
            <span>{levelStats.pointsEarned}</span>
          </div>
          <div className="mb-2">
            <strong>Level Completed (English): </strong>
            <span>{levelStats.levelCompletedEnglish}</span>
          </div>
          <div className="mb-2">
            <strong>Level Completed (Math): </strong>
            <span>{levelStats.levelCompletedMath}</span>
          </div>
        </div>

        {/* Quiz Stats */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Quiz Stats</h3>
          <div className="mb-2">
            <strong>Tests Completed: </strong>
            <span>{quizStats.testsCompleted}</span>
          </div>
          <div className="mb-2">
            <strong>Tests Failed: </strong>
            <span>{quizStats.testsFailed}</span>
          </div>
          <div className="mb-2">
            <strong>Tests Passed: </strong>
            <span>{quizStats.testsPassed}</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
