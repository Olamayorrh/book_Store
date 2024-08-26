import { useContext } from "react";
import ReviewOutput from "../Pages/ReviewOutput";
import Deals from "./Deals/Deals";
import Featured from "./Featured/Featured";
import Footer from "./Footer/Footer";
import Offer from "./Offer/Offer"

import Update from "./Update/Update";
import { CartContext } from "../Features/Context";

const Layout = ()=>{
    const {darkMode} = useContext(CartContext);
    return (
        <div >
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