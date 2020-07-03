import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import fire from './config/fire';
import ReactDOM from 'react-dom';
import Search from './Search';
import './Admin.css';
class Admin extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        ReactDOM.render(<Search />, document.getElementById('root'));


    }).catch((error) => {
        console.log(error);

      });
  }

  
  render() {
    return (
      <div class="login-dark">
      <h2>SignIn </h2>
      <form >
          <img src="../../assets/fire.svg" /><br></br>
        <label for="email">Email:</label>
        <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
        <label for="password">Password:</label>
        <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control"  placeholder="Password" />
    
        <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
    
    
      </form> 
      </div>
    );
  }
}
export default Admin;