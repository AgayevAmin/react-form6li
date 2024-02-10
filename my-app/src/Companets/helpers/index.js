export const validate = (name, value) => {
    let error = "";
  
    switch (name) {
      case "city":
        if (!value) {
          error = "City is required";
        }
        break;
        case "Apartament":
          if (!value) {
            error = "Apartament is required";
          }
          break;
      case "Street":
        if (!value) {
          error = "Street is required";
        }
        break;
      case "fullname":
        if (value.length < 3) {
          error = "Fullname must be at least 3 characters";
        }
        break;
      case "address":
          if (!value) {
            error = "Address is required";
          }
          break;
      case "gender":
        if (!value) {
          error = "Gender is required";
        }
        break;
      case "number":
          if (!value.includes("")) {
            error = "Phone number must include +";
          }
          break;
      case "date":
            if (!value) {
              error = "Birthday is required";
            }
            break;
      case "email":
        if (!value.includes("@")) {
          error = "Email must include @";
        }
        break;
      case "password":
        let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        if (!regex.test(value)) {
          error =
            "Password must be at least 8 characters, including uppercase, lowercase and number";
        }
        break;
      case "ageRange":
        if (!value) {
          error = "Age Range is required";
        }
        break;
      default:
        break;
    }
  
    return error;
  };
  