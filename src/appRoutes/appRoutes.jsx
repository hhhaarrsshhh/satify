
import Levels from "../components/Levels";
import Profile from "../components/Profile";
import Quiz from "../components/Quiz";
import Home from "../components/Home";
import QuizDetail from "../components/QuizDetail";
export const routes = [
    { path: "/", element: <Home /> },
    { path: "/level", element: <Levels /> },
    { path: "/quiz", element: <Quiz /> },
    { path: "/profile", element: <Profile/> },
    { path:"/quiz/:quizId" ,element:<QuizDetail />} 

  ];
  