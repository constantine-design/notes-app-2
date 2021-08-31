import React from "react";

export default class AppFooter extends React.Component {
  render() {
    return (
      <footer className="footer" style={{display: 'block'}}>
        <span className="todo-count">
          <strong>
            { this.props.todos.filter ( (x) => x.completed === false ).length }
          </strong>
          &nbsp;items left
        </span>
        <ul className="filters">
          <li>
            <a
              href="#all"
              className={ this.props.show==="all" ? "selected" : ""  }
              onClick={ (e) => this.props.changeTodoFilter("all", e) }
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#selected"
              className={ this.props.show==="active" ? "selected" : ""  }
              onClick={ (e) => this.props.changeTodoFilter("active", e) }
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#completed"
              className={ this.props.show==="completed" ? "selected" : ""  }
              onClick={ (e) => this.props.changeTodoFilter("completed", e) }
            >
              Completed
            </a>
          </li>
        </ul>
        <button
          className="clear-completed"
          onClick={ (e) => this.props.clearCompletedTodo() }
          style={{
            display: this.props.todos.filter((x)=>(x.completed)).length ? "block" : "none"
          }}
        >
          Clear completed
        </button>
      </footer>
    );
  }
}
