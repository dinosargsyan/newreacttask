import React, { isValidElement } from "react";

export const validateName = (val) => {
      if (val.length > 0 && val == " ") {
         const errorText = "Please write your First Name"
          return errorText ;
      }
}
export const validateLastName = (val) => {
    if (val.length > 0 && val == " ") {
       const errorText = "Please write your Last Name"
        return errorText ;
    }
}
export const validatePassword = (val) => {
    if (val.length > 0 && val.length <8) {
       const errorText = "You should write more than 7 letters"
        return errorText ;
    }
}