import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  function Clicked(e){
     e.preventDefault();
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark py-3 sticky-top">
  <div className="container-fluid">
    <img class="header__logo-image" width="300" height="75" src="//nayabjewellery.com/cdn/shop/files/final_log_280_by_80-01_440x.png?v=1701266292" alt></img>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active text-white" aria-current="page " href="#">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#product">Our Products  </a>
        </li>
        <li className="nav-item ">
        <a className="nav-link text-white" href="#about">About</a>
            </li>
        <li className="nav-item">
          <Link to={"/contactus"} className="nav-link text-white" href="#" tabindex="-1" > Contact Us</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control bg-transparent text-white me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-warning" onClick={Clicked} type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  
    </>
  )
}
export default Navbar