import React, { Component } from "react";
import { connect } from "react-redux";

import { checkTodoAction, checkTodoAllAction } from "../actions/TodoAppActions";
import { countTodoLeft } from "../selectors/TodoAppSelector";

class TodoApp extends Component {
  renderToDo = (todoList) => {
    return todoList.map((todo, index) => {
      return (
        <li
          className="list-group-item"
          key={index}
          onClick={() => this.props.checkTodo(todo)}
        >
          <input
            type="checkbox"
            className="mr-2"
            checked={todo.isCompleted}
            readOnly
          />
          {todo.todo}
        </li>
      );
    });
  };
  render() {
    return (
      <div>
        <h2>Todos</h2>
        <div className="container">
          <div className="row">
            <div className="col-5 m-auto shadow">
              <div className="d-flex align-items-center pl-4">
                <i
                  className="fa fa-angle-down mr-2"
                  onClick={() => {
                    this.props.checkTodoAll(this.props.countTodoLeft);
                  }}
                ></i>
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="What needs to be done ?"
                />
              </div>
              <ul className="list-group list-group-flush text-left">
                {this.props.todoListShow.length === 0
                  ? this.renderToDo(this.props.todoList)
                  : this.renderToDo(this.props.todoListShow)}
              </ul>
              <div className="d-flex justify-content-between align-items-center">
                <span>{this.props.countTodoLeft} item left</span>
                <div className="d-flex">
                  <button className="btn btn-default">All</button>
                  <button className="btn btn-default">Active</button>
                  <button className="btn btn-default">Completed</button>
                </div>
                <span className="clear">Clear completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.TodoAppReducer.todoList,
    countTodoLeft: countTodoLeft(state.TodoAppReducer.todoList),
    todoListShow: state.TodoAppReducer.todoListShow,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkTodo: (todo) => dispatch(checkTodoAction(todo)),
    checkTodoAll: (numberTodoLeft) =>
      dispatch(checkTodoAllAction(numberTodoLeft)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
