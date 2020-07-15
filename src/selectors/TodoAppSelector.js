export const countTodoLeft = state => {
    return state.filter(todo => {
        return !todo.isCompleted
    }).length
}