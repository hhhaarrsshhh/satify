import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Level from "./components/Level";
import Scoreboard from "./subComponents/Scoreboard";
import Quiz from "./components/Quiz";

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <Dashboard />
        <Level/>
        <Scoreboard/>
        <Quiz/>
      </div>
    </div>
  );
};

export default App;
