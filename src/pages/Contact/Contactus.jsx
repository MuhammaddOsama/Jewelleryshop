import React from 'react'
import "./Contactus.css"
import { useFormik } from 'formik'
import {FormValidation} from './FormSchema'

const Contactus = () => {

  const inilValues = {
    name :" ",
    email:"",
    msg:""

   }
  const {handleSubmit,handleChange,errors,values, handleBlur,touched}= useFormik({
       initialValues:inilValues,
       validationSchema:FormValidation,
       onSubmit:(values) =>{
        console.log(values)
      
        alert("form succesfully submitedd thanks user ! :)")
      
       }
  });

  return (
     <>
     
      <div className="contact_us">
        <div className="container">
           <div className="row justify-content-center">
            <div className="col-lg-6">
              <form className='form' onSubmit={handleSubmit}>
                <h2>Leave a Comment</h2>
                <div className="mb-5">
                  <input type='text' className="form-control text-white bg-transparent border-warning"name="name" placeholder='Enter Your Name...' value={values.name} 
                  onChange={handleChange} onBlur={handleBlur}/>
                  {errors.name && touched.name ? <span className='text-danger'>{errors.name}</span>: null}
                </div>
                <div className="mb-5">
                  <input type='text' className="form-control text-white bg-transparent border-warning"name="email" placeholder='Enter Your Email...' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                  
                  {errors.email && touched.email? <span className='text-danger'>{errors.email}</span>:null}
                </div>
                <div className="mb-5">
                  <textarea type='text' className="form-control text-white bg-transparent border-warning"name="msg" placeholder='Text here ...' value={values.msg}onChange={handleChange} onBlur={handleBlur}/>
                  {errors.msg && touched.msg? <span className='text-danger'>{errors.msg}</span>: null}
                </div>
                <input className="submit " value={"submit"} type='submit' />
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