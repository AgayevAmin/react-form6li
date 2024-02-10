import { useState } from "react";
import { validate } from "../helpers";
// import image from " ./sekil/aaaa.png";
import "./style.css"


  export  function Form1() {

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
            
        <div className="Form1">
        <div className="header"> 
                <button className="btnregister">Register</button>
                <button className="btnlog">Log in</button>
            </div>

            {/* <img src={image} className="image" alt="image"/> */}

      <form onSubmit={handleSubmit}>
        
  
        <div  className="input1" >
       
          <input  className="input"  name="email" placeholder="mail" onChange={handleChange} />
          {errors.email && <p style={{color: 'red'}} >{errors.email}</p>}
  
        
       
          <input   className="input" name="password" type="password" placeholder="password" onChange={handleChange} />
          {errors.password && <p style={{color: 'red'}} >{errors.password}</p>}
        </div>
  
  
        <button  className="btn1" type="submit">Create account</button>

        <div className="checkbox1">
          <input
            name="terms"
            type="checkbox"
            onChange={handleChange}
            defaultChecked={profileDatas.terms}
            />
          <label htmlFor="terms">Send me news and promotions</label>
          {errors.terms && <p style={{color: 'red'}} >{errors.terms}</p>}
        </div>
      </form>
      <span className="end" >By continuing I agre with the <a href="#">Therms & Conditions, Privacy Policy</a></span>
 </div>
  </section>
    );
}