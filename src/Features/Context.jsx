import { createContext, useEffect, useReducer, useState } from "react";
import CartReducer from "./CartReducer";

import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";

export const CartContext = createContext();


const Context = ({children})=>{
    
    const navigate = useNavigate()
    
    const [cart, dispatch] = useReducer(CartReducer, [])

    // Reducer function to increase quantity
    const Increase = (id)=>{
        const Index = cart.findIndex(item => item.id === id);
        if(cart[Index].quantity <= 10) {
           return dispatch({type: "Increase", id})
        }
    };

    // Reducer function to reduce quantity
    const Decrease = (id)=>{
        const Index = cart.findIndex(item => item.id === id);
        if(cart[Index].quantity > 1) {
           return dispatch({type: "Decrease", id})
        }
    };

    // function used to remove items from cart
    const totalItem = (cart)=>{
        return cart.reduce((sum,item)=> sum + item.quantity, 0)
    }

    const totalPrice = (cart)=>{
        return cart.reduce((total,product)=> total + product.quantity * product.price, 0)
    }


    // function handling search word(s)
   
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = (e)=>{
        setSearchTerm(e.target.value)
        
    };

   // console.log(searchTerm);


    const [info, setInfo] = useState([{}])

      const getInfo = (data)=>{
        setInfo(()=>[{...data}])
    };


    // Handling reviews

    const saveReview = JSON.parse(localStorage.getItem("reviews") || "[]")

    const [revieew, setRevieew] = useState(saveReview);

    const [lname, setLname] = useState("")
   
    const [bodyy, setBodyy] = useState("")
    const [img, setImg] = useState("")

    const handleReview= (e)=>{
        const reviewSubmitted = ()=>{
            Swal.fire({
                title: "Successful!",
                text:"Your review has been successfully sent",
                icon: 'success'
            });
        };

        const addReview = {
            id: revieew.length + 1,
            name: lname,
            body: bodyy,
            image: "../../src/assets/images/avatar.png"
            
          
        }
        
             setRevieew((prevData)=>{
                return  [...prevData, addReview]
            });

            reviewSubmitted()
            navigate("/")
      }

      useEffect(()=>{
        localStorage.setItem('reviews', JSON.stringify(revieew))
 
    },[revieew]);
    
     
      console.log(saveReview);
      
    
    return(

       <CartContext.Provider value={{cart,dispatch, Increase, Decrease,totalItem,totalPrice, searchTerm,handleSearch,info, getInfo, setLname, setBodyy, handleReview,saveReview }}>

            {children}

       </CartContext.Provider>
    )
};
export default Context;