import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import { Redirect } from "react-router-dom";
import Role from "../Role.jsx";
import NavBar from "../NavBar.jsx";
import RoleForm from "../RoleForm.jsx";
import Position from "../Position.jsx";
import Department from "../Department.jsx";
import Country from "../Country.jsx";
import State from "../State.jsx";
import City from "../City.jsx";
import Company from "../Company.jsx";
import Employee from "../Employee.jsx";
import Salary from "../Salary.jsx";
import LeaveApplicationHR from "./LeaveApplicationHR.jsx";
import NotFound404 from "../NotFound404.jsx";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faChair,
  faBuilding,
 faUser,
faUserTie,
faRupeeSign,
faFileAlt,
faCity,
faGlobeAmericas,
faPlaceOfWorship,
faArchway,
faUserCircle
} from "@fortawesome/free-solid-svg-icons";

function RoleHRF() {
  return <Role />;
}


function getPosition() {
  return <Position />;
}
function getDepartment() {
  return <Department />;
}
function getCountry() {
  return <Country />;
}
function getState() {
  return <State />;
}
function getCity() {
  return <City />;
}
function CompanyF() {
  return <Company />;
}
function EmployeeF() {
  return <Employee />;
}
function SalaryF() {
  return <Salary />;
}
function getLeaveApplication() {
  return <LeaveApplicationHR />;
}

class DashboardHR extends Component {
  state = {
    redirect: true,
    checked: true 
  };
  handleChange=(checked)=> {
    console.log("switch");
    // var sidebarV = this.refs.sidebar;
    // var sidebarV = React.findDOMNode( this.refs.sidebar);
    // sidebarV.style.disply="none";
    
    if(this.state.checked==true){ 
      document.getElementById("sidebar").setAttribute("class", "display-none");
    }else{document.getElementById("sidebar").setAttribute("class", "display-block");}   
    this.setState({ checked });
  }

  render() {
    return (
      <Router>
        
        <div id="outer-main-div">
          <div id="outer-nav">
            <NavBar loginInfo={this.props.data} checked={this.state.checked} handleChange={this.handleChange} onLogout={this.props.onLogout}/>

          </div>

          <div id="main-non-nav">
            <div id="sidebar">
              <div id="sidebar-top-content" />
              <div id="main-title">
                <FontAwesomeIcon icon={faUserCircle} className="sidebar-icon" />
                <h6 style={{textAlign:'center',marginTop:5}}>HR</h6>
              </div>
              <ul className="navbar-ul">
                <li>
                  <Link to="/hr/employee">
                    <FontAwesomeIcon icon={faUser} className="sidebar-icon" /> 
                    User 
                  </Link> 
                </li>
                <li>
                  <Link to="/hr/leave-application-hr">
                    <FontAwesomeIcon icon={faFileAlt} className="sidebar-icon" /> 
                    Leave Application 
                  </Link> 
                </li>
                <li>
                  <Link to="/hr/company">
                    <FontAwesomeIcon icon={faCity} className="sidebar-icon" /> 
                    company 
                  </Link> 
                </li>
                <li>
                  <Link to="/hr/role">
                    <FontAwesomeIcon icon={faUsers} className="sidebar-icon" /> 
                    Role 
                  </Link> 
                </li>
                
                <li>
                  <Link to="/hr/department">
                    <FontAwesomeIcon
                      icon={faBuilding}
                      className="sidebar-icon"
                    /> 
                    Department 
                  </Link> 
                </li>
                <li>
                  <Link to="/hr/country">
                    <FontAwesomeIcon icon={faGlobeAmericas} className="sidebar-icon" /> 
                    Country 
                  </Link> 
                </li>
                <li>
                  <Link to="/hr/state">
                    <FontAwesomeIcon icon={faPlaceOfWorship} className="sidebar-icon" /> 
                    State 
                  </Link> 
                </li>
                <li>
                  <Link to="/hr/city">
                    <FontAwesomeIcon icon={faArchway} className="sidebar-icon" /> 
                    City 
                  </Link> 
                </li>
                <li>
                 
                </li>
            </ul>
            </div>
            {/* <div id="sidebar-top-content" /> */}
            <div id="main-area">
              <div id="sidebar-top-content" />
             
              <Switch>
                <Route
                  path="/hr/employee"
                  
                  component={EmployeeF}
                />
              
                <Route
                  path="/hr/company"
                  exact
                  component={CompanyF}
                />
                <Route path="/hr/role" component={RoleHRF} />
                
                <Route
                  path="/hr/position"
                  exact
                  component={getPosition}
                />
                <Route
                  path="/hr/department"
                  exact
                  component={getDepartment}
                />
                <Route
                  path="/hr/country"
                  exact
                  component={getCountry}
                />
                <Route
                  path="/hr/state"
                  exact
                  component={getState}
                />
                <Route
                  path="/hr/city"
                  exact
                  component={getCity}
                />
                <Route
                  path="/hr/leave-application-hr"
                  exact
                  component={getLeaveApplication}
                />
               
                <Route
                  exact
                  path="/hr"
                  render={() => <Redirect to="hr/employee" />}
                />
                <Route render={() => <NotFound404/>} />
                
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default DashboardHR;
