import React, { Component } from "react";
import { connect } from "react-redux";

class EditTask extends Component {
  handelUpdateTask = e => {
    e.preventDefault();
    const updatedTaskName = this.getUpdatedTaskName.value;
    const data = {
      id: new Date(),
      updatedTaskName
    };
    this.props.dispatch({
      type: "UPDATE_TASK",
      data
    });
  };
  rennder() {
    return (
      <div className="col-sm-12" key={this.props.taskl.id}>
        <h1 className="text-center">Update Task</h1>

        <form className="input-group" onSubmit={this.handelUpdateTask}>
          <input
            type="text"
            className="form-control"
            name="todo-update-box"
            required="true"
            defaultValue={this.props.taskl.taskName}
            ref={input => (this.getUpdatedTaskName = input)}
          />
          <div className="input-group-append">
            <button
              className="btn 
              btn-outline-primary"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(EditTask);
