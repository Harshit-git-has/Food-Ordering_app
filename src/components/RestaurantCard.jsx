import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const{resData}=props;

    const { loggedInUser} = useContext(UserContext);
    
     return (
         <div className = "m-4 p-4 w-[230px] rounded-lg  bg-gray-200 hover:bg-green-100 " >
             <img
              className="rounded-lg w-35"
              alt="res-logo"
              src ={CDN_URL + resData.info.cloudinaryImageId} 
             />
             <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
             <h4>{resData.info.cuisines.join(", ")}</h4>
             <h4>{resData.info.avgRating} stars</h4>
             <h4>{resData.info.costForTwo}</h4>
             <h4>{resData.info.sla.deliveryTime} Minutes</h4>
             <h4> User: {loggedInUser} </h4>
         </div>
     );
 };




  export const withPromtedLabel = ( RestaurantCard) => {

     return( props) =>{
        return (

            <div>
                <label> Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
     };
 };


 export default RestaurantCard;