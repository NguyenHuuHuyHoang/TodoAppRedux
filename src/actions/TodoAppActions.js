import { CHECK_TODO, CHECK_TODO_ALL } from "../constants/TodoAppConstant";

export const checkTodoAction = (todo) => {
  return {
    type: CHECK_TODO,
    todo,
  };
};


export const checkTodoAllAction = (numberTodoLeft) => {
    return {
      type: CHECK_TODO_ALL,
      numberTodoLeft
    };
  };
