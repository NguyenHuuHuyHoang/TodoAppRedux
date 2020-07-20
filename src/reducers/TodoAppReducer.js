import {
  CHECK_TODO,
  CHECK_TODO_ALL,
  SHOW_ALL_TODO,
  SHOW_ACTIVE_TODO,
  SHOW_COMPLETED_TODO,
  CLEAR_COMPLETED_TODO,
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
  ],
  todoListShow: [],
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
      if (action.numberTodoLeft > 0) {
        const todoListShowNew = state.todoListShow.map((todo) => {
          if (todo.isCompleted) {
            return todo;
          }
          return (todo.isCompleted = !todo.isCompleted);
        });

        const todoListNew = state.todoList.map((todo) => {
          if (todo.isCompleted) {
            return todo;
          }
          return (todo.isCompleted = !todo.isCompleted);
        });

        return {
          ...state,
          todoList: todoListNew,
          todoListShow: todoListShowNew,
        };
      }

      const todoListNew = state.todoList.map((todo) => {
        return (todo.isCompleted = !todo.isCompleted);
      });
      const todoListShowNew = state.todoListShow.map((todo) => {
        return (todo.isCompleted = !todo.isCompleted);
      });

      return { ...state, todoListShow: todoListShowNew, todoList: todoListNew };

      // if (
      //   action.numberTodoLeft === 0 ||
      //   action.numberTodoLeft === state.todoList.length
      // ) {
      //   const todoListNew = state.todoList.map((todo) => {
      //     return { ...todo, isCompleted: !todo.isCompleted };
      //   });
      //   const todoListShowNew = state.todoListShow.map((todo) => {
      //     return { ...todo, isCompleted: !todo.isCompleted };
      //   });

      //   return {
      //     ...state,

      //     todoList: todoListNew,

      //     todoListShow: todoListShowNew,
      //   };
      // }
      // const todoListNew = state.todoList.map((todo) => {
      //   if (!todo.isCompleted) {
      //     todo.isCompleted = !todo.isCompleted;
      //   }
      //   return todo;
      // });
      // const todoListShowNew = state.todoListShow.map((todo) => {
      //   if (!todo.isCompleted) {
      //     todo.isCompleted = !todo.isCompleted;
      //   }
      // });
      // return { ...state, todoList: todoListNew, todoListShow: todoListShowNew };
    }
    case SHOW_ALL_TODO: {
      const todoListShowNew = [...state.todoList];

      return { ...state, todoListShow: todoListShowNew };
    }

    case SHOW_ACTIVE_TODO: {
      const todoListShowNew = state.todoList.filter((todo) => {
        return !todo.isCompleted;
      });
      return { ...state, todoListShow: todoListShowNew };
    }

    case SHOW_COMPLETED_TODO: {
      const todoListShowNew = state.todoList.filter((todo) => {
        return todo.isCompleted;
      });
      return { ...state, todoListShow: todoListShowNew };
    }
    case CLEAR_COMPLETED_TODO: {
      const todoListNew = state.todoList.filter((todo) => {
        return !todo.isCompleted;
      });
      const todoListShowNew = state.todoListShow.filter((todo) => {
        return !todo.isCompleted;
      });

      return { ...state, todoList: todoListNew, todoListShow: todoListShowNew };
    }
    default:
      return state;
  }
};
