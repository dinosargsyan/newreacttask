import React from 'react';
import Login from './Login/login';
import SignUp from './Signup/signup';
import { useState } from "react";


const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const onChangeIsLogin = () =>{
     setIsLogin(!isLogin);
    }
    return(
    <>
    <span onClick={onChangeIsLogin}> Go to { isLogin ? "Login" : "SignUp"}</span>
       {isLogin ?
       <SignUp/>
        :
       <Login />
       }
       </>
    )
}
export default Auth;