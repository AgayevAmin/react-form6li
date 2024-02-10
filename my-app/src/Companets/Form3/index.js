import { useState } from "react";
import { validate } from "../helpers";
// import image from " ./sekil/aaaa.png";
import "./style.css"


export  function Form3() {

    const [profileDatas, setProfileDatas] = useState({
        address :" "
    })
  
    const [errors, setErrors] = useState({
        address :" "
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
        profileDatas.address.length > 0 
       
      ) {
        console.log(profileDatas);
      } else {
        console.log("Form is invalid");
      }
  
    }
  
    return (
        <section> 
        <div className="Form1">
            <h2>Add adress</h2>
    
      <form onSubmit={handleSubmit}>
        
  
        <div  className="input1" >
       
          <input  className="input"  name="addres" placeholder="Search for address" onChange={handleChange} />
          <p> Your address is not visible to other users</p>
          {errors.address && <p style={{color: 'red'}} >{errors.address}</p>}
  
        </div>
  
  
        <button  className="btn3" type="submit">Use current location</button>
        <button  className="btn4" type="submit">Add mannualy</button>
        

        
      </form>
     <h2> Sharing your address showas:</h2>
      <span className="end3" >People near you</span>
      <span className="end3" >Estimade deliveri time </span>
      <span className="end3" >Estimate shipping costs</span>
 </div>
  </section>
    );
}