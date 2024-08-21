import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Features/Context";

const Summary = ()=>{
    const {cart,totalItem, totalPrice} = useContext(CartContext)
    return (
        <div className="w-[500px] min-h-[200px] border-2 rounded-2xl p-5 text-[30px] flex flex-col gap-5 justify-start bg-gray-300 mt-[20px]">
                <p className="text-[20px] 2xl:text-[40px] font-bold">Total items: {totalItem(cart)}</p>
                <p className="text-[20px] 2xl:text-[40px] font-bold">Total Amount: ${Number(totalPrice(cart))}.00</p>
                <Link to="/"><button className="bg-green-400 p-2 mt-[150px] flex justify-center items-center w-full">Checkout</button></Link>
        </div>
        
    )
};

export default Summary;