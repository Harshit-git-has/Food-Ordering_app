import RestaurantCard,{ withPromtedLabel } from "./RestaurantCard";
import {useState, useEffect, useContext} from  "react";
import Shimer from "./Shimer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import UserContext from "../utils/UserContext";
 



const Body = () => {

    const [listOfRestaurants, setListOfRestaurants]= useState([]);
    const [filteredRestaurants, setFilteredRestaurants]= useState([]);

    const [ searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

    // console.log("Body Rendered", listOfRestaurants);

     useEffect(() => {
     fetchData();
     },[]);

     const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        // console.log(json);

         setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants); 
         setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants);
     };

       const onlineStatus = useOnlineStatus();

       if(onlineStatus === false) 
         return (
         <h1> 
            You are now offline !! Please check your Internet Connection ||
         </h1>
        );

        const {loggedInUser, setUserName } = useContext(UserContext);
 

    return listOfRestaurants.length ===0 ?(
    <Shimer />
       ):(
        <div className="body">
        <div className="filter flex">
            <div className="search m-4 p-4">
                 <input 
                type="text"
                className="border border-solid border-black"
                value={searchText}
                onChange={(e) =>{
                      setSearchText(e.target.value);
                }}

                />
                <button className = " px-4 py-0.5 bg-green-200 m-2 rounded-lg"
                 onClick={() => {
                    console.log(searchText)
                const filteredRestaurants = listOfRestaurants.filter(
                    (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurants(filteredRestaurants);
                 }}
                >
                    Search
                    </button>
                </div>
                <div  className="search m-4 p-4 flex items-center">  
                <label> UserName: </label>    
                <input className = "   px-1 mx-1 border border-black"
                 value = {loggedInUser} 
                onChange ={(e) => setUserName(e.target.value)} 
            />
               </div>
                </div>
            <div className = " flex flex-wrap">
            {filteredRestaurants.map((restaurant)=> (
               <Link
               key={restaurant.info.id}
               to = {"/restaurants/"+ restaurant.info.id}
               >
            {
            restaurant.info.promoted ?(
             <RestaurantCardPromoted resData = {restaurant}/>
        ) : (
            <RestaurantCard resData={restaurant}/>
            )}



            </Link> 
            ))}
           
            </div>
        </div>
    );
 };

 export default Body;