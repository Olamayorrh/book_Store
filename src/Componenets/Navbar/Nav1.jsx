import { useContext } from "react";


import { FaBook, FaSearch, FaHeart, FaUser} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CartContext } from "../../Features/Context";
const Nav1 = ()=>{

    const {cart, handleSearch, toggleDarkMode} = useContext(CartContext);
    console.log(toggleDarkMode);
    
    return(
        <div className="flex justify-between items-center p-2 border-2 ">
                <div className="flex justify-center items-center p-2 dark:text-white">
                    <Link to='/' ><FaBook className="hover:text-green-400 " size="40px"/></Link>
                    <Link to="/"><h2 className="hover:text-green-400 text-[25px] dark:text-white">BookWorm</h2></Link>
                </div>
                
               

                <div className="flex justify-center items-center p-2 gap-3 dark:text-white"> 
                  <FaHeart />
                   <Link to="/cart"><div className="flex justify-center items-center"><FaCartShopping size="30px"/> <p className="text-[25px]">{cart.length}</p></div></Link>
                   <button onClick={toggleDarkMode}><FaUser /></button>
                </div>
        </div>
    )
};
export default Nav1;