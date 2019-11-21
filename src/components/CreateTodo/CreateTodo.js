import React, { Component } from "react";

export default class CreateTodo extends Component {
  state = {
    description: "",
    responsible: "",
    priority: "",
    completed: false
  };
  onChangeDescription(e) {
    console.log(e.target.value);
    this.setState({ description: e.target.value });
  }
  onChangeResponsible(e) {
    this.setState({ responsible: e.target.value });
  }
  onChangePriority(e) {
    this.setState({ priority: e.target.value });
  }
  onSubmit() {
    console.log(`Form submitted:`);
    console.log(`Todo Description: ${this.state.description}`);
    console.log(`Todo Responsible: ${this.state.responsible}`);
    console.log(`Todo Priority: ${this.state.priority}`);

    this.setState({
      description: "",
      responsible: "",
      priority: "",
      completed: false
    });
  }
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New Todo</h3>
        <form></form>
        <label>Description</label>
        <input
          type="text"
          className="form-control"
          onChange={event => this.onChangeDescription(event)}
        />
        <div className="form-group">
          <label>Responsible: </label>
          <input
            type="text"
            className="form-control"
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
