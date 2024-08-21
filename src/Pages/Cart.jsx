import { useContext } from "react";
import { CartContext } from "../Features/Context";
import { Link } from "react-router-dom";


const Cart = ()=>{

    const {cart, dispatch, Increase, Decrease} = useContext(CartContext);

    console.log(cart);
    

   

    return(
        <div className="flex justify-around p-5">
            <div>
                {
                    cart.map((cartItem)=>(
                        <div key={cartItem.id} className="flex gap-3 p-5 items-center">
                            <div className="">
                                <img src={cartItem.book} alt="prodImage" className="w-[450px] h-[300px]"></img>
                            </div>

                            <div>
                                <p className="text-[30px] font-bold">{cartItem.title}</p>
                                <p className="text-[30px] font-bold">${(cartItem.price)}</p>
                                <div className="flex items-center gap-3 py-3">
                                    <button className="text-[30px] font-bold border-2 border-black p-2 w-[40px] h-[40px] rounded-full flex justify-center items-center" onClick={()=>Decrease(cartItem.id)}>-</button>
                                    <button className="text-[30px] font-bold w-[40px] border-2 rounded-xl">{cartItem.quantity}</button>
                                    <button className="text-[30px] font-bold border-2 border-black p-2 w-[40px] h-[40px] rounded-full flex justify-center items-center" onClick={()=>Increase(cartItem.id)}>+</button>
                                    
                                </div>
                                <button className="p-2 bg-green-400 text-white" onClick={()=> dispatch({type: "Remove",id: cartItem.id})}>Remove</button>
                                <Link to="/summary"><button className="p-2 bg-green-400 text-white m-5" >ORDER NOW</button></Link>
                            </div>
                        </div>
                    ))
                }
            </div>

           
        </div>
    )
};

export default Cart;