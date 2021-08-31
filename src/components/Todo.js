import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleValue: this.props.todo.title
    }
  }
  render () {
    return (
      <li
        className={ this.props.todo.completed ? "completed" : "" }
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={ this.props.todo.completed }
            onChange={ (e) => this.props.toggleTodo(this.props.todo.id) }
          />
          <input
            className="todo"
            type="text"
            value={ this.state.titleValue }
            onChange={ (e) => this.setState({titleValue: e.target.value}) }
            onBlur={ () => this.props.editTodoTitle(this.props.todo.id, this.state.titleValue) }
          />
          <button className="destroy" onClick={ (e) => this.props.remooveTodo(this.props.todo.id) } />
        </div>
      </li>
    );
  }
}
