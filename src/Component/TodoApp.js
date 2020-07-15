import React, { Component } from "react";
import { connect } from "react-redux";

class TodoApp extends Component {
  renderToDo = (todoList) => {
    return todoList.map(todo => {
        return <li className="list-group-item" key={todo.id}>
        <input type="checkbox" className="mr-2" checked={todo.isCompleted}/>
        {todo.todo}
      </li>
    })
  };
  render() {
    return (
      <div>
        <h2>Todos</h2>
        <div className="container">
          <div className="row">
            <div className="col-5 m-auto shadow">
              <div className="d-flex align-items-center pl-4">
                <i class="fa fa-angle-down mr-2" aria-hidden="true"></i>
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="What needs to be done ?"
                />
              </div>
              <ul className="list-group list-group-flush text-left">
                {this.renderToDo(this.props.todoList)}
              </ul>
              <div className="d-flex justify-content-between align-items-center">
                <span>1 item left</span>
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
  };
};

export default connect(mapStateToProps)(TodoApp);
