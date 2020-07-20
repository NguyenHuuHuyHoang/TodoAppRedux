import {
  CHECK_TODO,
  CHECK_TODO_ALL,
  SHOW_ACTIVE_TODO,
  SHOW_COMPLETED_TODO,
  SHOW_ALL_TODO,
  CLEAR_COMPLETED_TODO,
} from "../constants/TodoAppConstant";

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

export const showActiveTodo = () => {
  return {
    type: SHOW_ACTIVE_TODO,
  };
};

export const showCompletedTodo = () => {
  return {
    type: SHOW_COMPLETED_TODO,
  };
};

export const showAllTodo = () => {
  return {
    type: SHOW_ALL_TODO,
  };
};

export const clearCompletedTodo = () => {
  return {
    type: CLEAR_COMPLETED_TODO,
  };
};
