import { useContext } from "react";
import { CartContext } from "../Features/Context";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = ()=>{

    const {handleReview, setLname, setBodyy,} = useContext(CartContext)
    return(
        <div className="p-5">

            <h1 className="text-[40px] font-bold">Add A Review</h1>
            <form onSubmit={(e)=>e.preventDefault()} className="border-2 p-5 min-w-[500px]">
                <div className="">
                    <label htmlFor="name" className="text-[30px]">Name:</label>
                    <input type="text" name="name" id="name" onChange={(e)=>setLname(e.target.value)} className="w-[70%] p-3 text-[30px]"></input>
                </div>
               
                <div>
                    <label htmlFor="review"className="text-[30px]">Review:</label>
                    <input type="text" name="review" id="review" onChange={(e)=>setBodyy(e.target.value)} className="w-[70%] p-3 text-[30px]"></input>
                </div>

                {/* <div>
                    <label htmlFor="img">Pic for reference</label>
                    <input type="file" name="img" id="img" onChange={(e)=>setImg((e.target.files[0]))}></input>
                </div> */}
                <div >
                    <button type="submit" onClick={handleReview} className="bg-green-400 text-white text-[30px] p-3 my-[10px]">ADD REVIEW</button>
                </div>
            </form>
        </div>
    )
};

export default Review;