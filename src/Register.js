import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import fire from './config/fire';
import  Upload from './Upload';
import ReactDOM from 'react-dom';
import './Register.css';
import Login from './Login';

class Register extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });

  }

  login(e) {
    e.preventDefault();
    console.log("hii");
    ReactDOM.render(<Login />, document.getElementById('root'));

        ;
  }

  signup(e){
    e.preventDefault();
    console.log("hello signup");
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        ReactDOM.render(<Upload />, document.getElementById('root'));

    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }

    
  
  render() {
    return (
      <div class="login-dark">
      <h2>Register </h2>
      <form >
          <img src="../../assets/fire.svg" /><br></br>
        <label for="email">Email:</label>
        <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
        <label for="password">Password:</label>
        <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control"  placeholder="Password" />
    
        <button type="submit" onClick={this.signup} class="btn btn-primary">SignUp</button>
        <p class="message">Already Have an Account? <a href="#"  onClick={this.login}>Login</a></p>

    
      </form> 
      </div>
    );
  }
}
export default Register;