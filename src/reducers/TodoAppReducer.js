import { CHECK_TODO, CHECK_TODO_ALL } from "../constants/TodoAppConstant";

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
    case CHECK_TODO: {
      const todoListNew = state.todoList.map((todo) => {
        if (todo.id === action.todo.id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
      return { ...state, todoList: todoListNew };
    }
    case CHECK_TODO_ALL: {
      console.log(action.numberTodoLeft)
      
      if (
        action.numberTodoLeft === 0 ||
        action.numberTodoLeft === state.todoList.length
      ) {
        const todoListNew = state.todoList.map((todo) => {
          return !todo.isCompleted
        });
        console.log(todoListNew)
        return { ...state, todoList: todoListNew };
      }
      const todoListNew = state.todoList.map((todo) => {
        if (!todo.isCompleted) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
      return { ...state, todoList: todoListNew };
    }

    default:
      return state;
  }
};
