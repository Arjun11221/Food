import React, { lazy , Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import LoginContext from "./utils/LoginContext";
import { Provider, useSelector } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

const Grocery = lazy(()=> import("./components/Grocery"));


const AppLayout = () => {

  const[userInfo , setUserInfo] = useState();
  useEffect(()=>{
    const data = {
      name : "Arjun"
    }
    setUserInfo(data.name);
} , []);

  return (
    <Provider store={appStore} >
      <LoginContext.Provider value={{loginUser : userInfo}} >
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </LoginContext.Provider>
    </Provider>
  );
};

const appLayout = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>} ><Grocery /></Suspense>,
      },
      {
        path: "/restaurant/:resId",
        element : <RestaurantMenu/>
      },
      {
        path: "/cart",
        element : <Cart />
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appLayout} />);
