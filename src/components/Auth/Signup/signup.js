import React from 'react';

import Button from '../../button/button';
import Input from '../../input/input';
import './signup.scss';

class SignUp extends React.Component{
   state={
       firstName: '',
       lastName: '',
       email: '',
       password: '',
   }
   onChangeFirstName =(e) =>{
       this.setState({firstName: e.target.value});
   }
   onChangeLastName = (e) =>{
       this.setState({lastName: e.target.value});
   }
   onChangeEmail = (e) => {
       this.setState({email: e.target.value});
   }
   onChangePassword = (e) => {
       this.setState({password: e.target.value});
   }
   signUp = () =>{
       return(alert("hello"+ this.state.firstName+this.state.lastName));
   }
   render(){
       return(
            <div className="SignUp">
                <Input type="text" placeholder="First Name" onChange={this.onChangeFirstName} value={this.state.firstName}></Input>
                <Input type="text" placeholder="Last Name" onChange={this.onChangeLastName} value={this.state.lastName}></Input>
                <Input type="email" placeholder="Email" onChange={this.onChangeEmail} value={this.state.email}> </Input>
                <Input type="password" placeholder="Password" onChange={this.onChangePassword} value={this.state.password}> </Input>  
                <Button onClick={ this.signUp }>Sign Up</Button>
            </div>
       )
   }
}
export default SignUp;