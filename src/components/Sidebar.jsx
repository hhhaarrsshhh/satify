import { useState } from "react";
import { Link } from "react-router-dom";
import imgP from "../assets/penguin.png";
import img1 from "../assets/mage_dashboard-fill (1).png";
import img2 from "../assets/material-symbols_castle.png";
import img3 from "../assets/Group 1.png";
import img4 from "../assets/iconamoon_profile-bold.png";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true); // initial collapsed state

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // shrink the sidebar
  const handleLinkClick = () => {
    setIsCollapsed(true);
  };

  return (
    <div
      className={`flex ${
        isCollapsed ? "w-16" : "w-1/5"
      } bg-[rgb(5,177,201)] text-white flex-col py-8 transition-all duration-300 fixed top-0 left-0 h-screen z-50`}
    >
      {/* Header Section */}
      <div className="flex items-start justify-between px-4">
        <img src={imgP} alt="Penguin" className="w-8 h-8 rounded-full mt-2" />
        <div
          className={`text-5xl font-crushed ${
            isCollapsed ? "hidden" : "block"
          } transition-all duration-300`}
        >
          SAT<span className="text-3xl">ify</span>
        </div>

        <button
          className="text-white text-xl focus:outline-none mt-2"
          onClick={toggleSidebar}
        >
          {isCollapsed ? "➡️" : "⬅️"}
        </button>
      </div>

      {/* Navigation Section */}
      <nav className="flex flex-col gap-6 text-lg mt-8 pl-4">
        {[
          { icon: <img src={img1} alt="Home" className="w-8 h-8 rounded-full" />, label: "Home", path: "/" },
          { icon: <img src={img3} alt="Level" className="w-6 h-7 rounded-full" />, label: "Level", path: "/level" },
          { icon: <img src={img2} alt="Quiz" className="w-8 h-8 rounded-full" />, label: "Quiz", path: "/quiz" },
          { icon: <img src={img4} alt="Profile" className="w-8 h-8 rounded-full" />, label: "Profile", path: "/profile" },
        ].map(({ icon, label, path }, index) => (
          <Link
            key={index}
            to={path}
            onClick={handleLinkClick} 
            className={`flex items-center gap-2 hover:text-yellow-400 ${
              isCollapsed ? "justify-center" : "items-start"
            }`}
          >
            <span>{icon}</span>
            {!isCollapsed && <span>{label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
