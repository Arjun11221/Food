import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = ()=>{
    dispatch(clearCart());
  }
  return (
    <div className="m-5 p-5 text-center">
      <h1 className="text-3xl font-semibold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="bg-black text-white p-2 m-2 rounded-md flex flex-wrap"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <hr className="border-black m-4"></hr>
        {cartItems.length ===0 ? <h1 className="text-xl font-semibold" >Cart is Empty!! Eat something and Cart...</h1> : 
        <ItemList items={cartItems} /> }
      </div>
    </div>
  );
};

export default Cart;
