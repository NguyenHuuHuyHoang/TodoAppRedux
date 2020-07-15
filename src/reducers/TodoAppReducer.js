import { CHECK_TODO } from "../constants/TodoAppConstant";

const initialState = {
  todoList: [
    {
      id: 1,
      todo: "di cho",
      isCompleted: false,
    },
    {
      id: 2,
      todo: "di ngu",
      isCompleted: false,
    },
  ],
};

export const TodoAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_TODO:
       const todoListNew = state.todoList.map(todo => {
            if (todo.id === action.todo.id) {
               todo.isCompleted = !todo.isCompleted
            }
            return todo
        })
        console.log(todoListNew)
      return { ...state, todoList : todoListNew };

    default:
      return state;
  }
};
