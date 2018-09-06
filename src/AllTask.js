import React, { Component } from "react";
import { connect } from "react-redux";

class AllTask extends Component {
  render() {
    return (
      <div>
        <p>All Task</p>
        {console.log(this.props.addtask)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addtask: state
  };
};

export default connect(mapStateToProps)(AllTask);
