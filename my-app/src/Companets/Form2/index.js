import { useState } from "react";
import { validate } from "../helpers";

import "./style.css"


  export  function Form2() {

    const [profileDatas, setProfileDatas] = useState({
        fullname: '',
        number: '',
        gender: ' ',
        date: '',
        
      
      
    })
  
    const [errors, setErrors] = useState({
        fullname: '',
        number: '',
        gender: '',
        date: '',
    
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
        profileDatas.fullname.length > 0 &&
        profileDatas.number.length > 0 &&
        profileDatas.date.length > 0 &&
        profileDatas.gender.length > 0
      ) {
        console.log(profileDatas);
      } else {
        console.log("Form is invalid");
      }
  
    }
  
    return (
        <section >

        <div className="Form2" >
            <div className="header">
                <h2>Personal information</h2>
                
            </div>

            <form   onSubmit={handleSubmit}>
                <input type="text" name="fullname" placeholder="Full name" onChange={handleChange}/>
                {errors.fullname && <p style={{color: 'red'}} >{errors.fullname}</p>}
                <div className="genders">
                    <span >Gender:</span>
                    <input  type="radio"  name="gender" value="Male" onChange={handleChange}/>
                    <label htmlFor="gender">Male</label>


                    <input type="radio" name="gender" value="Female" onChange={handleChange}/>
                    <label htmlFor="gender">Female</label>

                {errors.date && <p style={{color: 'red'}} >{errors.date}</p>}
                </div>


                <h4> The phone number and birthday are only visible to you</h4>



                <div className="number">
                    <select className="option"  onChange={handleChange}>
                        <option value="+994">+589</option>
                        <option value="+777">+994</option>
                        <option value="+0551">+01</option>
                    </select>
                    

                    <input type="number"  name="number"  placeholder="Phone number"onChange={handleChange}/> 
                </div>
                {errors.number && <p style={{color: 'red'}} >{errors.number}</p>}
                <input  type="date" name="date"  placeholder="birthday" onChange={handleChange}/>
                  {errors.date && <p style={{color: 'red'}} >{errors.date}</p>}


                <span className="text">Let us know about your birthday so as not to miss a gift</span>

                <button className="btn2" type="submit">Save information</button>

            </form>
        </div>

    </section>
    );
}