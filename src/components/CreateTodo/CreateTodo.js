import React, { Component } from "react";
import axios from 'axios';
export default class CreateTodo extends Component {
  state = {
    todo_description: "",
    todo_responsible: "",
    todo_priority: "",
    todo_completed: false
  };
  onChangeDescription(e) {
    console.log(e.target.value);
    this.setState({ todo_description: e.target.value });
  }
  onChangeResponsible(e) {
    this.setState({ todo_responsible: e.target.value });
  }
  onChangePriority(e) {
    this.setState({ todo_priority: e.target.value });
  }
  onSubmit() {
    console.log(`Form submitted:`);
    console.log(`Todo Description: ${this.state.todo_description}`);
    console.log(`Todo Responsible: ${this.state.todo_responsible}`);
    console.log(`Todo Priority: ${this.state.todo_priority}`);

    const newTodo={
           todo_description: this.state.todo_description,
           todo_responsible: this.state.todo_responsible,
           todo_priority: this.state.todo_priority,
           todo_completed: this.state.todo_completed
    }


    axios.post('http://localhost:4000/todos/add',newTodo).then(
    res=>console.log(res.data)
    )

    this.setState({
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false
    });
  }
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New Todo</h3>
        <form></form>
        <label>Description</label>
        <input
        value={this.state.todo_description}
          type="text"
          className="form-control"
          onChange={event => this.onChangeDescription(event)}
        />
        <div className="form-group">
          <label>Responsible: </label>
          <input
            type="text"
            className="form-control"
            value={this.state.todo_responsible}

            onChange={event => this.onChangeResponsible(event)}
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityLow"
              value="Low"
              onChange={event => this.onChangePriority(event)}
            />
            <label className="form-check-label">Low</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityMedium"
              value="Medium"

              onChange={event => this.onChangePriority(event)}
            />
            <label className="form-check-label">Medium</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityHigh"
              value="High"

              onChange={event => this.onChangePriority(event)}
            />
            <label className="form-check-label">High</label>
          </div>
        </div>

        <div className="form-group">
          <button className="btn btn-primary" onClick={() => this.onSubmit()}>
            Create Todo
          </button>
        </div>
      </div>
    );
  }
}
