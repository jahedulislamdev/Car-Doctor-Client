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
import EditService from "./Pages/Add Services/EditService";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Overview from "./Pages/Dashboard/Overview";
import Users from "./Pages/Dashboard/Users";
import AllService from "./Pages/Add Services/AllService";
import Private from "./Private/Private";
import Bookings from "./Pages/My Bookings/Bookings";


const route = createBrowserRouter([
   {
      path: '/',
      element: <Root />,
      hydrateFallbackElement: <Spinar />,
      errorElement: <NotFound />,
      children: [
         {
            path: '/', element: <App />,
            loader: () => fetch('https://car-doctor-server-2k6l.onrender.com/services'),
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
            path: '/services', element: <Private><Services /></Private>,
            loader: () => fetch("https://car-doctor-server-2k6l.onrender.com/services"),
            hydrateFallbackElement: <Spinar />,
         },
         {
            path: "/all-service", element: <AllService />,
            loader: () => fetch("https://car-doctor-server-2k6l.onrender.com/services"),
            hydrateFallbackElement: <Spinar />,

         },
         {
            path: '/service/:id', element: <ServiceDetail />,
            loader: ({ params }) => fetch(`https://car-doctor-server-2k6l.onrender.com/services/${params.id}`),
            hydrateFallbackElement: <Spinar />
         },
         {
            path: '/checkout/:id', element: <Private><Checkout /></Private>,
            loader: ({ params }) => fetch(`https://car-doctor-server-2k6l.onrender.com/services/${params.id}`),
            hydrateFallbackElement: <Spinar />
         },
         {
            path: "/my-bookings", element: <Private> <Bookings /></Private>,
            hydrateFallbackElement: <Spinar />
         },
      ],
   },
   {
      path: "/dashboard", element: <Private><Dashboard /></Private>,
      hydrateFallbackElement: <Spinar />,
      children: [
         {
            index: true,
            element: <Private><Overview /></Private>
         },
         {
            path: "orders", element: <Orders />,
            loader: () => fetch("https://car-doctor-server-2k6l.onrender.com/orders"),
            hydrateFallbackElement: <Spinar />
         },
         {
            path: 'add-services', element: <AddServices />,
            hydrateFallbackElement: <Spinar />
         },
         {
            path: "services", element: <ServicesDashboard />,
            loader: () => fetch("https://car-doctor-server-2k6l.onrender.com/services"),
            hydrateFallbackElement: <Spinar />
         },
         {
            path: 'services/edit/:id', element: <EditService />,
            loader: ({ params }) => fetch(`https://car-doctor-server-2k6l.onrender.com/services/${params.id}`),
            hydrateFallbackElement: <Spinar />
         },
         {
            path: 'users', element: <Users />,
            hydrateFallbackElement: <Spinar />

         }

      ]
   }
])
export default route;
