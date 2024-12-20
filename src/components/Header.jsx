import {LOGO_URL} from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header =() => { 
const [btnNameReact, setBtnNameReact] = useState( "Login");

 const onlineStatus = useOnlineStatus();

 const{ loggedInUser}= useContext(UserContext);
//  console.log(loggedInUser);

//  subscribing to store using selector
const cartItems = useSelector((store) => store.cart.items);
   //  console.log(cartItems);


    return(
        <div className="flex  justify-between bg-pink-200 shadow-lg mb-2"> 
            <div className="logo-container">
            <img className="w-56" src = {LOGO_URL}/>
            </div>
            <div className="flex items-center ">
              <ul className = " flex p-5  m-5 " >
               
                 <li className = "px-4">
                    online Status: { onlineStatus ? "🟢" : "🔴"}
                 </li>

                 <li  className = "px-4">
                  <Link to = "/"> Home </Link>
                 </li>
                
                 <li className = "px-4">
                  <Link to ="/contact">Contact</Link>
                 </li>

                 <li className = "px-4">
                  <Link to = "/about">About</Link>
                 </li>

                  <li className = "px-4">
                    <Link to  = "/grocery"> Grocery</Link>
                  </li>

                                  
                  <li className = "px-4 font-bold text-xl">
                     <Link  to = "/Cart"> Cart - ({cartItems.length} items)
                  </Link>
                  </li>

                 <button 
                className="Login" 
                 onClick ={() => {
                    btnNameReact === "Login"
                    ? setBtnNameReact("Logout")
                    : setBtnNameReact("Login");
                 }} 
               > 
                 {btnNameReact}
                 </button>
                 <li className = "px-4 font-bold ">{loggedInUser}</li>
              </ul>
            </div>
        </div>
    );
};

export default Header;