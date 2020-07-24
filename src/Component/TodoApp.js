import React, { Component } from "react";
import { connect } from "react-redux";

import {
  checkTodoAction,
  checkTodoAllAction,
  showAllTodoAction,
  showActiveTodoAction,
  showCompletedTodoAction,
  clearCompletedTodoAction,
  addNewTodoAction,
} from "../actions/TodoAppActions";
import { countTodoLeft } from "../selectors/TodoAppSelector";

class TodoApp extends Component {
  componentDidMount() {
    this.props.showAllTodo();
  }

  filterToDo = (filter, todoList) => {
    switch (filter) {
      case "all": {
        return todoList.filter((todo) => {
          return todo;
        });
      }
      case "active": {
        return todoList.filter((todo) => {
          return !todo.isCompleted;
        });
      }
      case "completed": {
        return todoList.filter((todo) => {
          return todo.isCompleted;
        });
      }
      default:
        return [];
    }
  };

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

  handleKeyUp = (evt) => {
    const { value } = evt.target;
    const { keyCode } = evt;
    if (keyCode === 13) {
      this.props.addNewTodo(value);
      evt.target.value = "";
    }
    return;
  };

  render() {
    const { countTodoLeft, filter, todoList } = this.props;
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
                    this.props.checkTodoAll(countTodoLeft);
                  }}
                ></i>
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="What needs to be done ?"
                  onKeyUp={(evt) => this.handleKeyUp(evt)}
                />
              </div>
              <ul className="list-group list-group-flush text-left">
                {this.renderToDo(this.filterToDo(filter, todoList))}
              </ul>
              <div className="d-flex justify-content-between align-items-center">
                <span>{this.props.countTodoLeft} item left</span>
                <div className="d-flex">
                  <button
                    className="btn btn-default"
                    onClick={() => this.props.showAllTodo()}
                  >
                    All
                  </button>
                  <button
                    className="btn btn-default"
                    onClick={() => this.props.showActiveTodo()}
                  >
                    Active
                  </button>
                  <button
                    className="btn btn-default"
                    onClick={() => this.props.showCompletedTodo()}
                  >
                    Completed
                  </button>
                </div>
                {this.props.countTodoLeft < this.props.todoList.length && (
                  <span
                    className="clear"
                    onClick={() => {
                      this.props.clearCompletedTodo();
                    }}
                  >
                    Clear completed
                  </span>
                )}
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
    filter: state.TodoAppReducer.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkTodo: (todo) => dispatch(checkTodoAction(todo)),
    checkTodoAll: (numberTodoLeft) =>
      dispatch(checkTodoAllAction(numberTodoLeft)),
    showAllTodo: () => dispatch(showAllTodoAction()),
    showActiveTodo: () => dispatch(showActiveTodoAction()),
    showCompletedTodo: () => dispatch(showCompletedTodoAction()),
    clearCompletedTodo: () => dispatch(clearCompletedTodoAction()),
    addNewTodo: (todoContent) => dispatch(addNewTodoAction(todoContent)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
