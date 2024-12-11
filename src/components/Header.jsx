import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-blue-200 px-8 py-4">
      <div className="text-xl font-semibold">
        Welcome to SATify, Your Ultimate SAT Preparation Companion!
      </div>
      <div className="flex items-center gap-6">
        <button className="bg-white p-2 rounded-full shadow-md">🔔</button>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <span>Hello Omar!</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
