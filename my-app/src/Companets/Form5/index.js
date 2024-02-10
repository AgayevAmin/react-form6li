import { useState } from "react";
import { validate } from "../helpers";
// import image from " ./sekil/aaaa.png";
import "./style.css"


  export  function Form5() {

    const [profileDatas, setProfileDatas] = useState({
      
      email: '',
      password: '',
      terms: true
    })
  
    const [errors, setErrors] = useState({
      
      email: "",
      password: "",
    
      terms: true,
    });
  
    const handleChange = (e) => {
      e.preventDefault()
      const { name, type, checked, value } = e.target;
  
      setProfileDatas({
        ...profileDatas,
        [name]: type === 'checkbox' ? checked : value
      })
  
      const error = validate(name, value)
  
      setErrors({
        ...errors,
        [name]: error
      })
  
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
  
      if (
        profileDatas.email.length > 0 &&
        profileDatas.password.length > 0 
      ) {
        console.log(profileDatas);
      } else {
        console.log("Form is invalid");
      }
  
    }
  
    return (
        <section> 
            
        <div className="Form5">
        <div className="header"> 
                <button className="btnlog">Sign in</button>
            </div>

            {/* <img src={image} className="image" alt="image"/> */}

      <form onSubmit={handleSubmit}>
        
  
        <div  className="input5" >
          <label> Email*</label>
          <input  className="input"  name="email" placeholder="mail" onChange={handleChange} />
          {errors.email && <p style={{color: 'red'}} >{errors.email}</p>}
  
        
          <label>Password*</label>
          <input   className="input" name="password" type="password" placeholder="password" onChange={handleChange} />
          {errors.password && <p style={{color: 'red'}} >{errors.password}</p>}
        </div>
  
  
        <div className="checkbox5">
          <input
            name="terms"
            type="checkbox"
            onChange={handleChange}
            defaultChecked={profileDatas.terms}
            />
          <label htmlFor="terms">Remember me</label>
          <a href="#">Forget Password</a>
          {errors.terms && <p style={{color: 'red'}} >{errors.terms}</p>}
        </div>
        <button  className="btn5" type="submit">Create account</button>

      </form>
      <span className="end5" >Don`t have an account ? <a href="#">Sign Up</a></span>
       <h4 className="h4">Or</h4>
   <button className="btnn">Google</button>
   <button className="btnn">Twitter</button>
 </div>
  </section>
    );
}