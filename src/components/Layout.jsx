import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import { routes } from "../appRoutes/appRoutes";

const Layout = () => {
  return (
    <div className="h-screen bg-[rgb(5,177,201)] pt-3 pr-3 pb-2 flex">
      <Sidebar />
      <div
        className="flex-1 flex flex-col ml-16 md:ml-1/5"
      >
        <div className="flex-1 p-4 bg-white rounded-3xl overflow-auto">
          {/* Dynamically render routes */}
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Layout;
