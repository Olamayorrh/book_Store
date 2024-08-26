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
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
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

        <div className="w-full flex flex-col justify-center gap-[10px] pl-[25%]">
        <div className="">

            <Slider {...settings} className=" w-[80%] p-3" >            
            {
                saveReview.map((each)=>(
                    <div key={each.id} className=" flex justify-center items-center rounded-2xl border-2 md:gap-[20px] p-2  dark:text-white">
                        <img src={each.image} className="w-[100px] h-[100px] rounded-full "></img>
                        <h1 className="text-[20px] font-bold">{each.name}</h1>
                        <p className="font-[20px] italic">{each.body}</p>
                    </div>
                ))
            }
            </Slider>

             
        </div>
          <Link to="/review"><button className="bg-green-400 text-white p-3 text-[30px] mt-[50px] mb-[30px]">Add Review</button></Link> 
        </div>
    )
};

export default ReviewOutput;