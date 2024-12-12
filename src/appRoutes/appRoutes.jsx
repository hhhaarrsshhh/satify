
import Level from "../components/Level";
import Profile from "../components/Profile";
import Quiz from "../components/Quiz";
import Home from "../components/Home";

export const routes = [
    { path: "/", element: <Home /> },
    { path: "/level", element: <Level /> },
    { path: "/quiz", element: <Quiz /> },
    { path: "/profile", element: <Profile/> },
  ];
  