import { createBrowserRouter } from "react-router-dom";
import Root from "./Layout/Root";
import Spinar from "./Components/Loading/Spinar";
import App from "./App";

const route = createBrowserRouter([
   {
      path: '/', element: <Root />, hydrateFallbackElement: <Spinar />,
      children: [
         { path: '/', element: <App /> }
      ]
   }
])


export default route;
