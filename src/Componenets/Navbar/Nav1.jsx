import { useContext } from "react";


import { FaBook, FaSearch, FaHeart, FaUser} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CartContext } from "../../Features/Context";
const Nav1 = ()=>{

    const {cart, handleSearch} = useContext(CartContext);
    return(
        <div className="flex justify-between items-center p-2 ">
                <div className="flex justify-center items-center p-2 ">
                    <Link to='/' ><FaBook className="hover:bg-green-400 " size="40px"/></Link>
                    <Link to="/"><h2 className="hover:bg-green-400 text-[25px]">BookWorm</h2></Link>
                </div>
                
               

                <div className="flex justify-center items-center p-2 gap-3"> 
                  <FaHeart />
                   <Link to="/cart"><div className="flex justify-center items-center"><FaCartShopping size="30px"/> <p className="text-[25px]">{cart.length}</p></div></Link>
                   <FaUser />
                </div>
        </div>
    )
};
export default Nav1;