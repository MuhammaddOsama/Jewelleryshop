import React from 'react'
import { CiPhone } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
     <div className="footer">
            <div className="container-fluid-footer">
            <div className="row">

                <div className="col-lg-3 col-md-6">

                    <div className="section1">
                <img class="footer_logo-image" width="300" height="75" src="//nayabjewellery.com/cdn/shop/files/final_log_280_by_80-01_440x.png?v=1701266292" alt=""></img>
                <h4>Haroon Jeweller's</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iusto ex, assumenda consequatur libero ipsam!</p>
                 <div className="social-icon">
                    <span className='icons'><CiPhone /></span>
                    <span className='icons'><FaFacebook /></span>
                    <span className='icons'><FaSquareInstagram /></span>
                    <span className='icons'><FaTwitter /></span>
                </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-6">
                   <div className="footer-sec2">
                   <h4 className=''>Products</h4>
                    <ul>
                    <li> <Link to="">Necklace</Link></li>
                    <li> <Link to="">Bracelet </Link></li>
                    <li> <Link to="">Earing</Link></li>
                    <li><Link to="">Rings</Link></li>
                    <li><Link to="">Others</Link></li>
                    </ul>
                   </div>
                    
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="footer-sec2">
                   <h4 className=''>Our Menu</h4>
                    <ul>
                    <li> <Link to="">Home</Link></li>
                    <li> <Link to="">Our Products </Link></li>
                    <li> <Link to="">About</Link></li>
                    <li><Link to="">Contact Us</Link></li>
                     
                    </ul>
                   </div>
                </div>
                <div className="col-lg-3 col-md-6 ">
                     <div className="footer-sec4">
                        <h4>Customer Care</h4>
                          <div className="phone">
                            <h5><FiPhoneCall /></h5>
                            <p>+92333-9594739</p>
                          </div>
                          <div className=" email">
                            <h5><MdOutlineMailOutline /></h5>
                            <p>muhammadosamabangash@gmail.com</p>
                          </div>
                          <div className="location">
                            <h5><IoLocationOutline /></h5>
                            <p>Main Bazar Thall</p>
                          </div>
                     </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className=" col-lg-12">
                <p> &copy; designed bY M.Osama Khan</p>
            </div>

        </div>
     </div>
    </>
  )
}

export default Footer