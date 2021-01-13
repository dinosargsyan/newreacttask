import React from 'react';

import Button from '../../button/button';
import Input from '../../input/input';
import './login.scss';


class Login extends React.Component{
   state={
       email: '',
       password: '',
   }
   onChangeEmail = (e) => {
       this.setState({email: e.target.value});
   }
   onChangePassword = (e) => {
       this.setState({password: e.target.value});
   }
   login = () =>{
       return(alert("hello "+ this.state.firstName+" " +this.state.email));
   }
   render(){
       return(
            <div className="Login">
                <Input type="email" placeholder="Email" onChange={this.onChangeEmail} value={this.state.email}> </Input>
                <Input type="password" placeholder="Password" onChange={this.onChangePassword} value={this.state.password}> </Input>
               
                <Button onClick={ this.login }>Login</Button>
            </div>
       )
   }
}
export default Login;