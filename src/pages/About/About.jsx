import React from 'react'
import './About.css'
import { CiPhone } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
const About = () => {
  return (
    <>
    <h1 className='Abouth1'>About us</h1>
     <div className="Aboutcontainer">
        <h2 className='Abouth2'>
        Team
        </h2>
        <p className='AboutP'>
        Learn more about the team maintaining the Quality, how and why the order started, and how to get involved. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptates maiores harum cum blanditiis molestias ex nostrum nemo architecto accusamus suscipit, autem vel iure deleniti quia qui dolor amet similique?
        </p>
        <h2 className='Abouth2'>
         History
        </h2>
        <p className='AboutP'>
        Originally created by a designer and a developer at Twitter, Bootstrap has become one of the most popular front-end frameworks and open source projects in the world.

Bootstrap was created at Twitter in mid-2010 by @mdo and @fat. Prior to being an open-sourced framework, Bootstrap was known as Twitter Blueprint. A few months into development, Twitter held its first Hack Week and the project exploded as developers of all skill levels jumped in without any external guidance. It served as the style guide for internal tools development at the company for over a year before its public release, and continues to do so today.

Originally released on Friday, August 19, 2011, we’ve since had over twenty releases, including two major rewrites with v2 and v3. With Bootstrap 2, we added responsive functionality to the entire framework as an optional stylesheet. Building on that with Bootstrap 3, we rewrote the library once more to make it responsive by default with a mobile first approach.

With Bootstrap 4, we once again rewrote the project to account for two key architectural changes: a migration to Sass and the move to CSS’s flexbox. Our intention is to help in a small way to move the web development community forward by pushing for newer CSS properties, fewer dependencies, and new technologies across more modern browsers.

Our latest release, Bootstrap 5, focuses on improving v4’s codebase with as few major breaking changes as possible. We improved existing features and components, removed support for older browsers, dropped jQuery for regular JavaScript, and embraced more future-friendly technologies like CSS custom properties as part of our tooling.
        </p>
       <div className='Followmore'>
       <h2 className='Abouth2'>
            For more Follow us
        </h2>
          <div className='row'>
            <div className='col-lg3 About'>
                 <a href="#"><CiPhone /></a>
                 <a href=""><FaFacebook /></a>
                 <a href=""><FaSquareInstagram /></a>
                 <a href=""><FaTwitter /></a>
            </div>
          </div>
       </div>
     </div>

    </>
  )
}

export default About