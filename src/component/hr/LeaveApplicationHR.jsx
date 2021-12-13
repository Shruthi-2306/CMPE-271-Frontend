import React, { Component } from "react";
import axios from "axios";
import LeaveApplicationHRTable from "./LeaveApplicationHRTable.jsx";
import LeaveApplicationHRFormEdit from "./LeaveApplicationHRFormEdit.jsx";
class LeaveApplicationHR extends Component {
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
            <LeaveApplicationHRFormEdit
              onLeaveApplicationHREditUpdate={this.handleLeaveHREditUpdate}
              onFormEditClose={this.handleEditFormClose}
              editData={this.state.editData}
            />
          ) : (
              <LeaveApplicationHRTable
                onAddLeaveApplicationHR={this.handleAddLeaveHR}
                onEditLeaveApplicationHR={this.handleEditLeaveHR}
                data={this.props.data}
              />
            )
        ) : (
            <div></div>
          
          )}
      </React.Fragment>
    );
  }

  handleLeaveHRSubmit = event => {
    event.preventDefault();
    console.log("id", event.target[0].value, event.target[1].value);
    this.setState({ table: true });

    let body = {
      Leavetype: event.target[0].value,
      FromDate: event.target[1].value,
      ToDate: event.target[2].value,
      Reasonforleave: event.target[3].value,
      Status: event.target[4].value,
    };
    axios
      .post(process.env.REACT_APP_API_URL + "/api/leave-application-hr/" + this.props.data["_id"], body, {
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

  handleAddLeaveHR = () => {
    this.setState({ table: false });
  };

  handleEditLeaveHR = e => {
    this.setState({ editForm: true });
    this.setState({ editData: e });
    this.setState({ editFormGender: e["Gender"] })
  };

  handleFormClose = () => {
    this.setState({ table: true });
  };

  handleEditFormClose = () => {
    this.setState({ editForm: false });
  };
  
  handleLeaveHREditUpdate = (info, newInfo) => {
    newInfo.preventDefault();
    
    let body = {
      Status: newInfo.target[4].value,
    };
    
    axios
      .put(
        process.env.REACT_APP_API_URL + "/api/leave-application-hr/" + info["_id"],
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

export default LeaveApplicationHR;
