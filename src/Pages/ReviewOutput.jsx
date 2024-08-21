import { useContext } from "react";
import { CartContext } from "../Features/Context";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";


const ReviewOutput = ()=>{

    const settings = {
    
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            
            
            {
                breakpoint: 1536,
                settings: {
                
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 1024,
                settings: {
                  
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 768,
                settings: {
                  
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
      };

    const {saveReview} = useContext(CartContext);

    return(

        <div className="flex flex-col justify-center">
        <div className=" px-[20px] pt-[50px]">

            <Slider {...settings}  >            
            {
                saveReview.map((each)=>(
                    <div key={each.id} className=" flex  rounded-2xl border-2 md:gap-[20px] p-2">
                        <img src={each.image} className="w-[100px] h-[100px] rounded-full "></img>
                        <h1 className="text-[30px] font-bold">{each.name}</h1>
                        <p className="font-[30px] italic">{each.body}</p>
                    </div>
                ))
            }
            </Slider>

             
        </div>
          <Link to="/review"><button className="bg-green-400 text-white p-3 text-[30px] mt-[50px] mb-[30px] border border-red-400">Add Review</button></Link> 
        </div>
    )
};

export default ReviewOutput;