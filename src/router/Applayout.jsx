import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Service from "../pages/service/Service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"",
        element:<Home/>
      },

      {
        path:"/about",
        element:<About/>
      },

      {
         path:"/service",
         element:<Service/>
      },

      {
        path:"/contact",
        element:<Contact/>
      }

    ]
  },
]);



export default router;
