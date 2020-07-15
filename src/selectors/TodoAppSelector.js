export const countTodoLeft = state => {
    return state.reduce((number, todo) =>{
        console.log(number)
        return number + !todo.isCompleted ? 1 : 0
    },0)
}