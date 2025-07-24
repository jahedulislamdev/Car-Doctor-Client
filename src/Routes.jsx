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
import AddServices from "./Pages/Add Services/AddServices";
import Orders from "./Pages/My Orders/Orders";
import ServicesDashboard from "./Pages/Add Services/ServicesDashboard";

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
         },
         {
            path: '/add-services', element: <AddServices />,
            hydrateFallbackElement: <Spinar />
         },
         {
            path: "/orders", element: <Orders />,
            loader: () => fetch("http://localhost:5000/orders"),
            hydrateFallbackElement: <Spinar />
         },
         {
            path: "services-dashboard", element: <ServicesDashboard />,
            loader: () => fetch("http://localhost:5000/services"),
            hydrateFallbackElement: <Spinar />
         }
      ],
   }
])
export default route;
