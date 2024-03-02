import React from 'react'
import './About.css'
import cardimg from "../../images/cardimg.webp"
const About = () => {
  return (
    <>
    <div id='about'>
    <h1 className='Abouth1'>About us</h1>
     <div className="Aboutcontainer">
       
        <h2 className='Abouth2'> History </h2>
        <p className='AboutP'>
        Originally created by a designer and a developer at Twitter, Bootstrap has become one of the most popular front-end frameworks and open source projects in the world.Bootstrap was created at Twitter in mid-2010 by @mdo and @fat. Prior to being an open-sourced framework, Bootstrap was known as Twitter Blueprint. A few months into development, Twitter held its first Hack Week and the project exploded as developers of all skill levels jumped in without any external guidance. It served as the style guide for internal tools development at the company for over a year before its public release, and continues to do so today. 
        </p>
        <h2 className='Abouth2'> Team </h2>
        <p className='AboutP'>
        Learn more about the team maintaining the Quality, how and why the order started, and how to get involved. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptates maiores harum cum blanditiis molestias ex nostrum nemo architecto accusamus suscipit, autem vel iure deleniti quia qui dolor amet similique?
        </p>

 <div className="container">
  <div className="row">
    <div className="col-lg-6 col-md-6 col-sm-12">
    <div class="contactcard w-50  " >
  <img src={cardimg} class="card-img-top image-fluid" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-warning">Mr Ijaz udin</h5>
    <p class="card-text text-white">Cheif Excutive Officer</p>
    <a href="#" class="btn btn-warning">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-12">
    <div class="contactcard w-50 " >
  <img src={cardimg} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-warning">Mr Haroon Riaz</h5>
    <p class="card-text text-white">Managing Director </p>
    <a href="#" class="btn btn-warning">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
 </div>
     </div>
     </div>
    </>
  )
}

export default About