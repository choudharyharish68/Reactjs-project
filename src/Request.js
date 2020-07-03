import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './Search.css';
import ReactDOM from 'react-dom';
import fire from './config/fire';



class Request extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.requestpage=this.requestpage.bind(this);
    
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  
requestpage(e){
  var str1;
  var str2;
  str1=this.search.value;
  

  }



  
  render() {
    return (
        
        <html>
          <head>
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous"/>
    </head>
    <body>
      <div class="container">
        <div class="row justify-content-center">
                              <div class="col-12 col-md-10 col-lg-8">
                                  <form class="card card-sm">
                                      <div class="card-body row no-gutters align-items-center">
                                          <div class="col-auto">
                                              <i class="fas fa-search h4 text-body"></i>
                                          </div>
                                          <div class="col">
                                              <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords" ref={input => this.search = input} required/>
                                          </div>
                                          <div class="col-auto">
                                              <button class="btn btn-lg btn-success" type="submit" onClick={this.requestpage}>Search</button>
                                          </div>
                                      </div>
                                  </form>
                              </div>
        </div>
      </div>
        </body>
        </html>
        
    );
  }
}
export default Request;