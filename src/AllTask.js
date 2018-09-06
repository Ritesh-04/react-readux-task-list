import React, { Component } from "react";
import { connect } from "react-redux";
import Task from "./Task";
import EditTask from "./EditTask";

class AllTask extends Component {
  render() {
    return (
      <div>
        <p>All Task</p>
        {this.props.alltask.map(task => (
          <div key={task.id}>
            {task.editing ? (
              <EditTask taskl={task} key={task.id} />
            ) : (
              <Task key={task.id} taskl={task} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    alltask: state
  };
};

export default connect(mapStateToProps)(AllTask);
