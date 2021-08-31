import './App.css';
import React from "react";
import AppHeader from "./components/AppHeader.js";
import AppTodoList from "./components/AppTodoList.js";
import AppFooter from "./components/AppFooter.js";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        todos: [],
        show: 'all',
    };
  }
  createTodo = (title) => {
    if (title.trim()) this.setState({
      todos: [
        ...this.state.todos,
        {id: Date.now(), title, completed: false}
      ]
    });
  }
  toggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map(
        item =>
          item.id === id ?
          {...item, completed: !item.completed} :
          item
          )
      }
    );
  }
  remooveTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter ( (x) => x.id !== id )
      }
    );
  }
  clearCompletedTodo = () => {
    this.setState({
      todos: this.state.todos.filter ( (x) => !x.completed )
      }
    );
  }
  makeAllTodo = (m) => {
    this.setState({
      todos: this.state.todos.map(
          item => ({ ...item, completed: m })
        )
      }
    );
  }
  editTodoTitle = (id, newval) => {
    this.setState({
      todos: this.state.todos.map(
        item =>
          item.id === id ?
          {...item, title: newval} :
          item
          )
      }
    );
  }
  changeTodoFilter = (s, e) => {
    e.preventDefault();
    this.setState({ show: s });
  }
  render() {
    return (
      <section className="todoapp">
        <AppHeader
          createTodo={this.createTodo}
        />
        <section className="main" style={{display: 'block'}} >
          <AppTodoList
            show={ this.state.show }
            todos={ this.state.todos }
            toggleTodo={ this.toggleTodo }
            makeAllTodo={this.makeAllTodo}
            remooveTodo={ this.remooveTodo }
            editTodoTitle={ this.editTodoTitle }
          />
        </section>
        <AppFooter
          todos={ this.state.todos }
          show={ this.state.show }
          changeTodoFilter={ this.changeTodoFilter }
          clearCompletedTodo={ this.clearCompletedTodo }
        />
      </section>
    );
  }
}
