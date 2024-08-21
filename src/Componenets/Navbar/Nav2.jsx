import { Link } from "react-router-dom";

const Nav2 = ()=>{
    return(
        <div className="bg-green-400 p-3 flex justify-center items-center text-white gap-3 w-full">
            <Link to="/"><p>Home</p></Link>
            <Link to="/featured"><p>Featured</p></Link>
            <Link to="/deals"><p>Deals</p></Link>
            <Link to="/reviewOutPut"><p>Reviews</p></Link>
            <Link to=""><p>Blogs</p></Link>
        </div>
    )
};

export default Nav2;