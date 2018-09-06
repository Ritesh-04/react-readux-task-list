import React, { Component } from "react";
import { connect } from "react-redux";
class Task extends Component {
  render() {
    return (
      <div className="container">
        <ul
          style={{
            "list-style-type": "none",
            margin: 0,
            padding: 0
          }}
        >
          <li className="alert alert-primary text-left" role="alert">
            {this.props.taskl.taskName}
            <button
              onClick={() =>
                this.props.dispatch({
                  type: "EDIT_TASK",
                  id: this.props.taskl.id
                })
              }
              className="btn 
             btn-primary btn-sm float-right"
            >
              Edit
            </button>
            <button
              onClick={() =>
                this.props.dispatch({
                  type: "DELETE_TASK",
                  id: this.props.taskl.id
                })
              }
              className="btn 
             btn-danger btn-sm float-right"
            >
              Delete
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
export default connect()(Task);
