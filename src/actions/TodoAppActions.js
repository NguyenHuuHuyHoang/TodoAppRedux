import { CHECK_TODO, CHECK_TODO_ALL } from "../constants/TodoAppConstant";

export const checkToDoAction = (todo) => {
  return {
    type: CHECK_TODO,
    todo,
  };
};


export const checkToDoAllAction = () => {
    return {
      type: CHECK_TODO_ALL,
    };
  };
