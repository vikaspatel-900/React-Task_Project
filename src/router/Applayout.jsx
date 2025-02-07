import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Service from "../pages/service/Service";
import WhyChoose from "../pages/why_choose_us/WhyChoose";
import HowItsWork from "../pages/how_its_work/HowItsWork";

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
        path:"/whyChooseUs",
        element:<WhyChoose/>
      },

      {
        path:"/howitswork",
        element:<HowItsWork/>
      },

      {
        path:"/contact",
        element:<Contact/>
      }

    ]
  },
]);



export default router;
