import { createBrowserRouter } from "react-router-dom";
import Root from "./Layout/Root";
import Spinar from "./Components/Loading/Spinar";
import App from "./App";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Registration/SignUp";
import NotFound from "./Components/Error/NotFound";

const route = createBrowserRouter([
   {
      path: '/',
      element: <Root />,
      hydrateFallbackElement: <Spinar />,
      errorElement: <NotFound />,
      children: [
         {
            path: '/', element: <App />,
            hydrateFallbackElement: <Spinar />
         },
         {
            path: '/signin', element: <Login />,
            hydrateFallbackElement: <Spinar />
         },
         {
            path: '/signup', element: <SignUp />,
            hydrateFallbackElement: <Spinar />
         }
      ],
   }
])
export default route;
