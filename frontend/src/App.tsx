import React from "react";
import Home from "./pages/Home/Home";
import Header from "./component/Header/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Activities from "./pages/Activities/Activities";
import Auth from "./pages/Auth/Auth";
import Card from "./pages/Card/Card";

const router = createBrowserRouter([
  { 
    // someProps: 'Hello World',
    element: (
      <div className="app-presentation">
        <Header />
        <Outlet/>
      </div>
    ), 
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cards/:card',
        element: <Card />
      },
      { 
        path: '/activities',
        element: <Activities />,
      },
      {
        path: '/activities/:activity',
        element: <>activity</>
      },
      { 
        path: '/auth',
        element: <Auth />
      }

    ]
  }
])


 export const App: React.FC = () => {
  
  
  return (
    <RouterProvider router={router}/>
  ); 
}


