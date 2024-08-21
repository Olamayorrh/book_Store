import { useContext } from "react";
import { Datae } from "../Data"
import { CartContext } from "../../Features/Context";
import {FaSearch} from "react-icons/fa";
import { Link } from "react-router-dom";
const Deals = ()=>{

    const {handleSearch, searchTerm, getInfo} = useContext(CartContext);

    
    
    
    return(
            <div className="flex md:flex-row flex-col gap-5 justify-around  p-5 border-2">
                
                <div className="flex flex-col gap-5 p-6 pt-10 ">

                        <div className="flex justify-center items-center p-2 border-2">
                            <form className="flex justify-center items-center ">
                                <input type="search" placeholder="search here...." id="search" name="search" onChange={(e)=> handleSearch(e)} className="md:text-[25px] p-2 outline-none "></input>
                                <label htmlFor="search" className=""><FaSearch /></label>
                            </form>
                        </div>

                        <h1 className="text-[55px] font-bold text-center">Category</h1>
                        
                        <button className="p-3  text-[30px] rounded-2xl active:text-green-400 duration-300" value="all"onClick={(e)=>handleSearch(e)}>All</button>
                        <button className="p-3  text-[30px] rounded-2xl active:text-green-400 duration-300"  value="science-fiction"onClick={(e)=>handleSearch(e)}>Science-fiction</button>
                        <button className="p-3  text-[30px] rounded-2xl active:text-green-400 duration-300" value="adventure" onClick={(e)=>handleSearch(e)}>Adventure</button>
                        <button className="p-3 text-[30px] rounded-2xl active:text-green-400 duration-300" value="fantasy" onClick={(e)=>handleSearch(e)}>Fantsy</button>
                        <button className="p-3  text-[30px] rounded-2xl active:text-green-400 duration-300" value="horror" onClick={(e)=>handleSearch(e)}>Horror</button>
                        <button className="p-3  text-[30px] rounded-2xl active:text-green-400 duration-300" value="romance" onClick={(e)=>handleSearch(e)}>Romance</button>
                </div>

                <div className="flex flex-col justify-center items-center p-5">

                    <h1 className="text-[30px] p-2 font-bold">Best Deal</h1>
                
                    <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5">

                        {
                            Datae
                            .filter((elem)=>{
                                if(searchTerm == "" || searchTerm == "all"){
                                    return  elem;

                                }else if((elem.cat.toLowerCase()).includes(searchTerm.toLowerCase()) || (elem.title.toLowerCase()).includes(searchTerm.toLowerCase()) || (elem.price).includes(`${searchTerm}`)){
                                    return elem;
                                }
                                
                            })
                            
                            .map((product)=>(
                                <div className="  mb-5" key={product.id}>
                                    <div>
                                        <img src={product.book} className="bg-cover w-full "></img>
                                    </div>
                                    <div className="flex flex-col justify-center items-center p-4">
                                        <p className="text-[20px] font-bold">{product.title}</p>
                                        <p className="text-[20px] font-bold">${product.price}.00</p>
                                        <p className="text-[20px] font-bold"> {product.cat}</p>
                                        <Link to={`product/${product.id}`}><button onClick={()=>getInfo(product)} className="bg-green-400 p-2 text-white mt-2">View More</button></Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
             </div>
        
            </div>
    )
};

export default Deals;