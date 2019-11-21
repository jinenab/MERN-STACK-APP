import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { TodoList, EditTodo, CreateTodo } from "./components";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>MERN-Stack Todo App</h2>
        <TodoList></TodoList>
        <EditTodo></EditTodo>
        <CreateTodo></CreateTodo>
      </div>
    );
  }
}

export default App;
