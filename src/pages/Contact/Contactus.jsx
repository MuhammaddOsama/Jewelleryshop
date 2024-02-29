import React from 'react'
import "./Contactus.css"
const Contactus = () => {

  return (
     <>
     
      <div className="contact_us">
        <div className="container">
           <div className="row justify-content-center">
            <div className="col-lg-6">
              <form className='form'>
                <h2>Contact us</h2>
                <div className="mb-5">
                  <input type='text' className="form-control text-white bg-transparent border-warning"name="name" placeholder='Enter Your Name...' />
                </div>
                <div className="mb-5">
                  <input type='text' className="form-control text-white bg-transparent border-warning"name="email" placeholder='Enter Your Email...' />
                </div>
                <div className="mb-5">
                  <textarea type='text' className="form-control text-white bg-transparent border-warning"name="text" placeholder='Text here ...' />
                </div>
                <input className="submit " onClick={()=>alert('Form submitted Successfully')} type='submit' />
              </form>
            </div>
           </div>
        </div>
        </div>    
     </>
  )
}

export default Contactus




























// import React, { useState } from 'react'
// import "./Contactus.css"
// const Contactus = () => {
 
//   const [email,Setemail] = useState('');
//   const [password,Setpassword] = useState('');

//   const [err,SetErr] = useState(false);
//   const [passerr,SetpassErr] = useState(false);
//   function LoginForm(e){
// if(email.length <5 || password.length < 8){
//   alert("please fill form in a right way");
// }else{
//   console.log(email);
//   console.log(password);
//   alert("Thanks for Submission");
// }
//     e.preventDefault();
//   }
//   function emailthandler(e){
// //console.log(e.target.value.length)
// let element = e.target.value;
// if(element.length <5){
//  // console.log("minimum 5 letters required");
// SetErr(true);
// }
// else{ 
// SetErr(false);
// }
// Setemail(element)
//   }
 
//   function passhandler(e){
//     //console.log(e.target.value.length)
//     let element = e.target.value;
//     if(element.length <8){
//      // console.log("minimum 5 letters required");
//     SetpassErr(true);
//     }
//     else{ 
//     SetpassErr(false);
//     }
//    Setpassword(element)
//       }
//   return (
    
//     <>
//     <h1 ClassName='contactush1'>contactus</h1>
// <div className="container">

// <form onSubmit={LoginForm}>
// <input type='text'placeholder='Enter your Email' onChange={emailthandler}></input>
// {err ? <span>minimum 5 letters required!!!</span> : <spaan></spaan>}
// <br></br>
// <br></br>
// <input type='text'placeholder='Enter your  Password' onChange={passhandler}></input>
// {passerr ? <span>minimum 8 letters required!!!</span> : <spaan></spaan>}
// <br></br>
// <br></br>
// <button type='submit'>Submit</button>

// </form>
// </div>
//     </>
//   )
// }

// export default Contactus