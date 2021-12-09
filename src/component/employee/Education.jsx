import React, { Component } from "react";

import axios from "axios";
import EducationTable from "./EducationTable.jsx";
import EducationForm from "./EducationForm.jsx";
import EditEducationForm from "./EditEduForm.jsx";
class EmployeeEducation extends Component {
  state = {
    table: true,
    editForm: false,
    editData: {},

  };

  render() {
    return (
      <React.Fragment>
       

        {this.state.table ? (
          this.state.editForm ? (
            <EditEducationForm
              onEducationEditUpdate={this.handleEducationEditUpdate}
              onFormEditClose={this.handleEditFormClose}
              editData={this.state.editData}
            />
          ) : (
              <EducationTable
                onAddEducation={this.onAddEducation}
                onEduEdit={this.OnEditEducation}
                data={this.props.data}
                back={this.props.back}
              />
            )
        ) : (
            <EducationForm
              onEducationSubmit={this.onEducationSub}
              onFormClose={this.onFormClose}
              
            />
          )}
      </React.Fragment>
    );
  }
  onEducationSub = event => {
    event.preventDefault();
   
    this.setState({ table: true });

    let body = {

      SchoolUniversity: event.target[0].value,
      Degree: event.target[1].value,
      Grade: event.target[2].value,
      PassingOfYear: event.target[3].value,
    };
    axios
      .post(process.env.REACT_APP_API_URL + "/api/education/" + this.props.data["_id"], body, {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(res => {
        this.setState({ table: false });
        this.setState({ table: true });
      })
      .catch(err => {
        console.log(err);
      });
  };
  onAddEducation = () => {
   
    this.setState({ table: false });
  };
  OnEditEducation = e => {
    console.log(e);
    this.setState({ editForm: true });
    this.setState({ editData: e });
   
  };
  onFormClose = () => {
    
    this.setState({ table: true });
  };
  handleEditFormClose = () => {
    console.log("clicked5");
    this.setState({ editForm: false });
  };
 
  handleEducationEditUpdate = (info, newInfo) => {
    newInfo.preventDefault();
    
    let body = {
      SchoolUniversity: newInfo.target[0].value,
      Degree: newInfo.target[1].value,
      Grade: newInfo.target[2].value,
      PassingOfYear: newInfo.target[3].value,
    };
    console.log("update", body);
    axios
      .put(
        process.env.REACT_APP_API_URL + "/api/education/" + info["_id"],
        body, {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      }
      )
      .then(res => {
        this.setState({ table: false });
        this.setState({ table: true });
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({ editForm: false });
  };

}

export default EmployeeEducation;
