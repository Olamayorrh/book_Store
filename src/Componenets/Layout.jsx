import ReviewOutput from "../Pages/ReviewOutput";
import Deals from "./Deals/Deals";
import Featured from "./Featured/Featured";
import Footer from "./Footer/Footer";
import Offer from "./Offer/Offer"

import Update from "./Update/Update";

const Layout = ()=>{
    return (
        <div className="p-[20px]">
            <Offer />
            <Featured />
            <Update />
            <Deals />
            <ReviewOutput />
            <Footer />
        </div>
    )
};

export default Layout;