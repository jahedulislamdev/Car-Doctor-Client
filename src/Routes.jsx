import { createBrowserRouter } from "react-router-dom";
import Root from "./Layout/Root";
import Spinar from "./Components/Loading/Spinar";
import App from "./App";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Registration/SignUp";
import NotFound from "./Components/Error/NotFound";
import Services from "./Pages/Home/Services";
import ServiceDetail from "./Pages/Home/ServiceDetail";
import Checkout from "./Pages/Checkout/Checkout";

const route = createBrowserRouter([
   {
      path: '/',
      element: <Root />,
      hydrateFallbackElement: <Spinar />,
      // errorElement: <NotFound />,
      children: [
         {
            path: '/', element: <App />,
            loader: () => fetch('http://localhost:5000/services'),
            hydrateFallbackElement: <Spinar />
         },
         {
            path: '/signin', element: <Login />,
            hydrateFallbackElement: <Spinar />
         },
         {
            path: '/signup', element: <SignUp />,
            hydrateFallbackElement: <Spinar />
         },
         {
            path: '/services', element: <Services />,
            loader: () => fetch("http://localhost:5000/services"),
            hydrateFallbackElement: <Spinar />,
         },
         {
            path: '/service/:id', element: <ServiceDetail />,
            loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
            hydrateFallbackElement: <Spinar />
         },
         {
            path: '/checkout/:id', element: <Checkout />,
            loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
            hydrateFallbackElement: <Spinar />
         }
      ],
   }
])
export default route;
