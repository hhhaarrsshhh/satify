import React, { useState } from "react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`flex ${
        isCollapsed ? "w-16" : "w-1/5"
      } bg-blue-500 text-white flex-col py-8 transition-all duration-300 relative`}
    >
      {/* Header Section */}
      <div className="flex items-start  justify-between px-4">
        <div
          className={`text-2xl   font-bold ${
            isCollapsed ? "hidden" : "block "
          } transition-all duration-300`}
        >
          SATify
        </div>
        <button
          className="text-white text-xl focus:outline-none"
          onClick={toggleSidebar}
        >
          {isCollapsed ? "➡️" : "⬅️"}
        </button>
      </div>

      {/* Navigation Section */}
<nav className="flex flex-col gap-6 text-lg mt-8 pl-4">
  {[
    { icon: "🏠", label: "Home" },
    { icon: "🛡️", label: "Level" },
    { icon: "📚", label: "Quiz" },
    { icon: "👤", label: "Profile" },
  ].map(({ icon, label }, index) => (
    <button
      key={index}
      className={`flex items-center gap-2 hover:text-yellow-400 ${
        isCollapsed ? "justify-center" : "items-start"
      }`}
    >
      <span>{icon}</span>
      {!isCollapsed && <span>{label}</span>}
    </button>
  ))}
</nav>

    </div>
  );
};

export default Sidebar;
