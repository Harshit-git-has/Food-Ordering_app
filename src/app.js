import React, { lazy , useContext, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// import Grocery from "./components/Grocery";


const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));


 const AppLayout = () => {
       const [userName, setUserName] = useState();

    useEffect (()  => {
        const data = {
            name:"Harshit katiyar",
        }
        setUserName(data.name);
    }, [])

    return ( 
        <Provider store = {appStore}>
        <UserContext.Provider value = {{ loggedInUser : userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
    </UserContext.Provider>
    </Provider>
   );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[

            {
                path:"/",
                element:<Body/>
            },

            {
                path:"/about",
                element: <About />,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },

            {
               path: "/grocery",
               element: (
               <suspense fallback ={<h1>Loading...... </h1>}>
                <Grocery />
                </suspense>

               ),
            },
        
            {
                path: "/Cart",
                element: <Cart/>,
            },

            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>,
            },
        ],
        errorElement: <Error/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);













