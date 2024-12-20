import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemsList";
import { clearCart } from "../utils/cartSlice";




const Cart = () => {
    const cartItems= useSelector((store)  => store.cart.items);

   const dispatch = useDispatch();

    const handleClearCart= () => {
     dispatch(clearCart());
    };

    return (
        <div className = " text-center m-5 p-5"> 
           <h1 className=" text-2xl font-bold">Cart</h1>
        <div className = " te w-6/12 m-auto  ">
        <button 
         className ="p-2 m-5 bg-pink-400 text-black rounded-lg   "
         onClick={handleClearCart}
       >
           Clear Cart
         </button> 
         { cartItems.length === 0 && <h1 className =" text-center p-3 m-4">  Cart is empty.    Add items to the cart</h1>}
        <ItemList items  = {cartItems}/>
      </div> 
    </div>
 );
};

export default Cart;