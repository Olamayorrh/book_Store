import img1 from "../../assets/images/ladyread.jpg"
const Update = ()=>{
    return (
        <div className="update w-full" style={{backgroundImage: `url(${img1})`}}>
            <form className="cursor-pointer w-full  flex justify-center 2xl:justify-start pt-[250px]  2xl:pl-[250px]">
                <div className="flex flex-col justify-center items-center p-3 gap-2 ">
                    <label htmlFor="subscribe" className="2xl:text-[40px] text-[20px] font-bold">Subscribe For Latest Update</label>
                    <input type="text" placeholder="Enter your email" id="subscribe" name="subscribe" className="w-full p-3 text-[25px]"></input>
                    <button className="bg-green-400 text-white p-2 2xl:text-[30px] rounded-xl" >Subscribe</button>
                </div>
            </form>
        </div>
    )
};

export default Update;