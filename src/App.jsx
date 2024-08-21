

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav1 from "./Componenets/Navbar/Nav1"
import Nav2 from "./Componenets/Navbar/Nav2"
import Layout from "./Componenets/Layout"
import Cart from "./Pages/Cart"
import Product from "./Pages/Product"
import Review from "./Pages/Review"
import ReviewOutput from "./Pages/ReviewOutput"
import Summary from "./Pages/Summary"
import Featured from "./Componenets/Featured/Featured"
import Deals from "./Componenets/Deals/Deals"


const App = ()=>{
   
  //     <Offer />
  //     <Featured/>
  //     <Update/>
  

  return (
    <div>
        
            <Nav1 />
            <Nav2 />
            <Routes>
                <Route path='/' element={<Layout/>}/>
                <Route path='/cart' element={<Cart />}/>
                <Route path='/product/:productid' element={<Product />} />
                <Route path='/review' element={<Review />}/>
                <Route path="/reviewOutPut" element={<ReviewOutput />}></Route>
                <Route path='/summary' element={<Summary />}/>
                <Route path='/featured' element={<Featured />}/>
                <Route path='/deals' element={<Deals />}/>

            </Routes>
        
    </div>
  )
}

export default App
