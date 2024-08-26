import { Link } from "react-router-dom";

const Nav2 = ()=>{
    return(
        <div className="bg-green-400 p-3 flex justify-center items-center text-white gap-3 w-full  dark:bg-red-500 dark:hover:text-white border-2">
            <Link to="/"><p className="hover:text-black">Home</p></Link>
            <Link to="/featured"><p className="hover:text-black">Featured</p></Link>
            <Link to="/deals"><p className="hover:text-black">Deals</p></Link>
            <Link to="/reviewOutPut"><p className="hover:text-black">Reviews</p></Link>
            <Link to=""><p className="hover:text-black">Blogs</p></Link>
        </div>
    )
};

export default Nav2;