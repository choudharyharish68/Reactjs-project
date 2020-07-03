import React, { Component } from 'react';
import  Login from './Login';
import ReactDOM from 'react-dom';
import './Home.css';
import Admin from './Admin';
import '../src/assets/bootstrap/css/bootstrap.min.css';
import '../src/assets/css/Footer-Dark.css';
import '../src/assets/css/Header-Blue.css';
import '../src/assets/css/Login-Form-Dark.css';
import  '../src/assets/fonts/font-awesome.min.css';
import  '../src/assets/fonts/ionicons.min.css';




class Home extends Component {
    constructor(props) {
        super(props);
        this.loginPage = this.loginPage.bind(this);
        this.AdminPage=this.AdminPage.bind(this);
    }


    loginPage() {
        ReactDOM.render(<Login />, document.getElementById('root'));
    }
    AdminPage(){
        ReactDOM.render(<Admin />, document.getElementById('root'));
    }

    render() {
        return (
               
                    
    <div class="header-blue" id="navb">  
                <div class="row">
                    <div class="col-12 col-lg-6 col-xl-5 offset-xl-1">
                        <nav class="navbar navbar-dark navbar-expand-md navigation-clean-search">
                        <button  type="submit" class="btn btn-default"  text='bold'  onClick={this.loginPage}  >User</button>
                        <button type="submit" onClick={this.AdminPage} class="btn btn-default"  text='bold' >Admin</button>

                          
                        </nav>

                        <h3>The revolution is here.</h3>
                        <p>BlockChain Cloud Storage :Decentralized Disruption of a Multi-Billion Dollar Industry </p></div>
                    <div class="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
                        <div class="iphone-mockup"><img class="device" src="assets/img/iphone.svg"/>
                            <div class="screen"> </div>
                        </div>
                </div>
            
        </div>

    <div class="text-dark" id="foot">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a class="text-dark" href="#">Storage</a></li>
                            <li><a class="text-dark" href="#">Development</a></li>
                            <li><a class="text-dark" href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a class="text-dark" href="#">Company</a></li>
                            <li class="text-dark"><a class="text-dark" href="#">Team</a></li>
                            <li><a class="text-dark" href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Company Name</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    <div class="col item social" id="icon_id"><a href="#"></a>
                        <p id="cpyrgt" class="copyright"></p>
                        <div class="row">
                            <div class="col">
                            </div>
                        </div> <a href="#"><i class="icon ion-social-facebook" id="facebookid"></i></a><a href="#"><i class="icon ion-social-twitter" id="twitterid"></i></a><a href="#"><i class="icon ion-social-snapchat visible" id="snapchatid"></i></a><a href="#"><i class="icon ion-social-instagram" id="instagramid"></i></a></div>
                </div>
            </div>
        </footer>
    </div>
    </div>


        );

    }

}

export default Home;