import React, { Component } from "react";
import "./NavBar.css";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../img/logo.png";
import Switch from "react-switch";

class NavBar extends Component {
  render() {
    // let value=(this.props.pass) ? undefined : "";
    return (
      <div>
        {/* <nav id="main-nav">
          <img src={Logo} alt="" />
          <h3 className="navBar-username">Logout</h3>
          <h3 className="navBar-username">{this.props.loginInfo["Role"]}</h3>
        </nav> */}


            <Navbar bg="light" expand="lg" className="nav-bar" fixed="top"  id="main-nav">
        {/* <div className="container"> */}
         
  
        <h1 style={{textAlign:'center'}}>EasyAccess</h1>
        
            
           
            
         
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
       
         
        
        
          <Navbar.Collapse id="logout-navbar-nav">
            <Nav className="ml-auto">             
              <a  onClick={this.props.onClick} className="navbar-right-content">
                {/* Admin */}
            {this.props.loginInfo["Name"]}

                </a>
              <a onClick={this.props.onLogout} style={{"cursor":"pointer"}}className="navbar-right-content">Log Out</a>
            </Nav>
          </Navbar.Collapse>
       
        {/* </div> */}
      </Navbar>

{/* <Navbar id="main-nav">
  <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text>
    <Navbar.Text>
      Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text>
  </Navbar.Collapse>
  
</Navbar> */}
      </div>
    );
  }
}

export default NavBar;
