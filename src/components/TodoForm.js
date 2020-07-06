import React, { Component } from 'react'

export default class TodoForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      item: ""
    }
  }

  handleChanges = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.item);
    this.setState({
      item: ""
    });
  };

  render() {

    return (
      <div className="form-container">
        <form action=""  >
          <input
            type="text"
            name="item"
            value={this.state.item}
            onChange={this.handleChanges}
          />
          <button onClick={this.handleSubmit}>Add Task</button>
          <button onClick={this.props.clearComplete}>Clear Completed</button>
        </form>
      </div>
    )
  }
}
