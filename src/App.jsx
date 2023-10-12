import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import RooTLayout from './layout/RootLayout';
import './App.css'

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/about",
  //     element: <AboutUs />
  //   },
  //   {
  //     path: "/contact",
  //     element: <Contact />
  //   }
  // ])
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RooTLayout/>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <AboutUs />,
        },
        {
          path: "contact",
          element: <Contact />,
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
