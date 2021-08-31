import React from "react";
import Todo from "./Todo.js";

export default class List extends React.Component {
  render() {
    let filteredTodoes = this.props.todos;
    if ( this.props.show === "active") filteredTodoes = this.props.todos.filter ( (x) => x.completed === false );
    if ( this.props.show === "completed") filteredTodoes = this.props.todos.filter ( (x) => x.completed === true );
    const allTodosTrue = this.props.todos.every(todo=>todo.completed);
    return (
      <React.Fragment>
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          checked={ allTodosTrue }
          onClick={ (e) => this.props.makeDoneAllTodo(!allTodosTrue) }
          onChange={ () => {} }
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          { filteredTodoes.map( todo =>
              <Todo
                key={ todo.id }
                todo={ todo }
                toggleTodo = { this.props.toggleTodo }
                editTodoTitle = { this.props.editTodoTitle }
                remooveTodo = { this.props.remooveTodo }
              />
            )
          }
        </ul>
      </React.Fragment>
    );
  }
}
