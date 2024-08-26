import { FaFacebook,FaInstagram, FaTwitter,FaGooglePlus} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = ()=>{
    return(
        <div className=" bg-green-400 p-5 flex  flex-col md:justify-start *:justify-center items-center gap-[20px] w-full dark:bg-red-500 ">
             <div className="flex gap-3">
                <Link to="#"><FaFacebook /></Link>
                <Link to="#"><FaInstagram /></Link>
                <Link to="#"><FaTwitter /></Link>
                <Link to="#"><FaGooglePlus /></Link> 
             </div>

             <div className="flex gap-5">
                  <Link to="/"><p className="dark:hover:text-white">Home</p></Link>
                  <Link to="/featured"><p className="dark:hover:text-white">Featured</p></Link>
                  <Link to="/deals"><p className="dark:hover:text-white">Deals</p></Link>
                  <Link to="/reviewOutPut"><p className="dark:hover:text-white">Reviews</p></Link>
                  <Link to=""><p className="dark:hover:text-white">Blogs</p></Link>
             </div>

             <div>
                <p>&copy;Mayowa 2024</p>
             </div>

        </div>
    )
};

export default Footer;