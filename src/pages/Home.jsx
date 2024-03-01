import React from 'react'
import img from "../images/1.jpg"
import "./Home.css"
import { FaArrowRight } from "react-icons/fa";
import Product from './Product/Product';
import About from './About/About'

 const Home = () => {
  return (
  <>
        <div className="home">
        <div className="container-fluid">
        <div className="row">
          <div className="text-sec col-lg-6">
            <h2 className='Home-h2'>Elevate your beauty with jewellery</h2>
            <button className='Home-btn btn btn-outline-warning mt-3 '>BUY NOW <FaArrowRight /> </button>
            <p className='Home-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ut soluta deserunt officiis aperiam reprehenderit. Dolorum velit dicta quis nostrum repudiandae, aspernatur vero blanditiis explicabo, sapiente quidem officia doloribus nobis.</p> </div>
          <div className="img-sec col-lg-6"> 
          {<img src={img} class="img-fluid" alt="..."></img>}
          </div>

        </div>
        
      </div>  
        </div>
        <Product />
        <About />
  </>
  )
}
export default Home