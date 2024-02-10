
import { useState } from "react";
import { validate } from "../helpers";
// import image from " ./sekil/aaaa.png";
import "./style.css"


  export  function Form4() {

    const [profileDatas, setProfileDatas] = useState({
      
        Street:"",
        Apartament:"",
        city:""
    })
  
    const [errors, setErrors] = useState({
        Street:"",
        Apartament:"",
        city:""

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
        profileDatas.Street.length > 0 &&
        profileDatas.Apartament.length > 0 &&
        profileDatas.city.length > 0
      ) {
        console.log(profileDatas);
      } else {
        console.log("Form is invalid");
      }
  
    }
  
    return (
        <section> 
            
        <div className="Form1">
            <h2>
                Add adress
            </h2>

      <form onSubmit={handleSubmit}>
        
  
        <div  className="input1" >
       
          <input  className="input"  name="Street" placeholder="Street adress" onChange={handleChange} />
          {errors.Street && <p style={{color: 'red'}} >{errors.Street}</p>}
          <input  className="input"  name="Apartament" placeholder="Apartament" onChange={handleChange} />
          {errors.Apartament && <p style={{color: 'red'}} >{errors.Apartament}</p>}
          <input  className="input"  name="city" placeholder="city" onChange={handleChange} />
          {errors.city && <p style={{color: 'red'}} >{errors.city}</p>}
        
        </div>
        <input  className="inputs"  name="Street" placeholder=" State" onChange={handleChange} />
          {errors.Street && <p style={{color: 'red'}} >{errors.Street}</p>}
          <input  className="inputs"  name="Apartament" placeholder="Zip code" onChange={handleChange} />
          {errors.Apartament && <p style={{color: 'red'}} >{errors.Apartament}</p>}


        <button  className="btn1" type="submit">Save infarmation</button>
      </form>
 </div>
  </section>
    );
}