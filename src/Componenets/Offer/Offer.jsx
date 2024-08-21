import mg1 from "../../assets/images/fantasy1.jpeg"
import mg2 from "../../assets/images/adventure5.jpeg"
import mg3 from "../../assets/images/horror4.jpeg"

import { Data } from '../Data';
const imagees = [
                {
                    id:1,
                    img:mg1
                },
                {
                    id:2,
                    img:mg2
                },
                {
                    id:3,
                    img:mg3
                }
]



// console.log("../../assets/images/"`${data[0].book}`);


const Offer = ()=>{
    return(
        <div className="flex flex-col 2xl:flex-row justify-center items-center w-full p-3 ">
                <div className="w-full gap-2 flex flex-col justify-start p-2 2xl:text-[25px]">
                    
                    <h1 className="2xl:text-[35px] font-bold">Up to 55% Offers</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatum exercitationem atque, 
                        optio vitae eveniet aliquam aut voluptate sed iur.
                    
                    </p>
                    <button className="border-2 bg-green-400 text-white p-1 w-[150px]">Shop Now</button>
                </div>
                
                <div className="flex justify-center items-center gap-5 w-full p-3">
                    {
                        imagees.map((item)=>(
                            <div id='item.id' className="shadow-2xl transform hover:ease-in-out transition duration-150 hover:scale-90">
                                <img src={item.img} alt="book" className="min-w-[00px]"></img>
                               
                            </div>
                        ))
                    }
                </div>
        </div>
    )
};

export default Offer;