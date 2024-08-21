import { useContext, useState } from "react";
import { Data } from "../Componenets/Data";
import { CartContext } from "../Features/Context";

const Product = ()=>{

    
   
    const {info,dispatch} = useContext(CartContext)
    return(
        <div className=" w-full flex justify-center items-center pt-[80px] gap-[40px]">
        {
            info.map((product)=>(
                <div key={product.id} className=" flex justify-center w-full">

                    <div className=" w-full flex justify-center">
                        <img src={product.book} className="2xl:w-[500px]"></img>
                    </div>


                    <div className="w-full flex flex-col justify-start pt-[60px] p-2">
                        <h1 className="text-[40px] font-bold">{product.title}</h1>
                        <p className="text-[30px] font-bold">${product.price}.00</p>
                        <p className="text-[30px] font-bold italic ">{product.des}</p>
                        <button className="border-2 mt-[30px] p-3 text-[25px] rounded-2xl bg-green-400 text-white" onClick={()=> dispatch({type:"Add", product:product})}>Add to cart</button>

                       
                    </div>
                </div>
            ))
        }

              
    </div>
    )
};

export default Product;