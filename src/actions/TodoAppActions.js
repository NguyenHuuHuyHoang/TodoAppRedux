import { CHECK_TODO } from "../constants/TodoAppConstant";

export const checkToDoAction = (todo) => {
  return {
    type: CHECK_TODO,
    todo,
  };
};
