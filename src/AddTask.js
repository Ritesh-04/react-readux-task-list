import React, { Component } from "react";
import { connect } from "react-redux";

class AddTask extends Component {
  handelAddTask = e => {
    e.preventDefault();
    const taskName = this.getTaskName.value;
    const data = {
      id: new Date(),
      taskName
    };
    this.props.dispatch({
      type: "ADD_TASK",
      data
    });
    this.getTaskName.value = "";
  };

  render() {
    return (
      <div className="col-sm-12">
        <h1 className="text-center">Task List</h1>

        <form className="input-group" onSubmit={this.handelAddTask}>
          <input
            type="text"
            className="form-control"
            placeholder="Task Name"
            name="todo-input-box"
            required="true"
            ref={input => (this.getTaskName = input)}
          />
          <div className="input-group-append">
            <button
              className="btn 
              btn-outline-primary"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(AddTask);
