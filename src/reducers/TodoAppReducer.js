import {
  CHECK_TODO,
  CHECK_TODO_ALL,
  SHOW_ALL_TODO,
  SHOW_ACTIVE_TODO,
  SHOW_COMPLETED_TODO,
  CLEAR_COMPLETED_TODO,
  ADD_NEW_TODO,
} from "../constants/TodoAppConstant";

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
    { id: 3, todo: "di choi", isCompleted: true },
  ],
  filter: "all"
};

export const TodoAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_TODO: {
      const todoListNew = state.todoList.map((todo) => {
        if (todo.id === action.todo.id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
     
      return { ...state, todoList: todoListNew};
    }

    case CHECK_TODO_ALL: {
      if (
        action.numberTodoLeft === 0 ||
        action.numberTodoLeft === state.todoList.length
      ) {

        const todoListNew = state.todoList.map((todo) => {
          return { ...todo, isCompleted: !todo.isCompleted };
        });

        return {
          ...state,
          todoList: todoListNew,
        };
      }

      const todoListNew = state.todoList.map((todo) => {
        return { ...todo, isCompleted: true };
      });


      return { ...state, todoList: todoListNew };
    }

    case ADD_NEW_TODO: {
      const todoNewID = state.todoList.length + 1
      const todoListNew = [...state.todoList, {todoNewID, todo: action.todoContent, isCompleted: false}]

      return {...state, todoList : todoListNew}
    }
    case SHOW_ALL_TODO: {
      return { ...state, filter: "all" };
    }

    case SHOW_ACTIVE_TODO: {
      return { ...state, filter: "active" };
    }

    case SHOW_COMPLETED_TODO: {
    
      return { ...state, filter: "completed" };
    }
    case CLEAR_COMPLETED_TODO: {
      const todoListNew = state.todoList.filter((todo) => {
        return !todo.isCompleted;
      });
      

      return { ...state, todoList: todoListNew };
    }
    default:
      return state;
  }
};
