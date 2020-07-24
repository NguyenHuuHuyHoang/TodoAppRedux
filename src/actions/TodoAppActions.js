import {
  CHECK_TODO,
  CHECK_TODO_ALL,
  SHOW_ACTIVE_TODO,
  SHOW_COMPLETED_TODO,
  SHOW_ALL_TODO,
  CLEAR_COMPLETED_TODO,
  ADD_NEW_TODO,
  DELETE_TODO,
} from "../constants/TodoAppConstant";

export const addNewTodoAction = (todoContent) => {
  return {
    type: ADD_NEW_TODO,
    todoContent,
  };
};

export const checkTodoAction = (todo) => {
  return {
    type: CHECK_TODO,
    todo,
  };
};

export const checkTodoAllAction = (numberTodoLeft) => {
  return {
    type: CHECK_TODO_ALL,
    numberTodoLeft,
  };
};

export const showActiveTodoAction = () => {
  return {
    type: SHOW_ACTIVE_TODO,
  };
};

export const showCompletedTodoAction = () => {
  return {
    type: SHOW_COMPLETED_TODO,
  };
};

export const showAllTodoAction = () => {
  return {
    type: SHOW_ALL_TODO,
  };
};

export const clearCompletedTodoAction = () => {
  return {
    type: CLEAR_COMPLETED_TODO,
  };
};

export const deleteTodoAction = (todo) => {
  return {
    type: DELETE_TODO,
    todo
  }
}
