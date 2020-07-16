// export const countTodoLeft = state => {
//     return state.filter(todo => {
//         return !todo.isCompleted
//     }).length
// }

export const countTodoLeft = state => {
    return state.reduce((number,todo) => {
       return number += !todo.isCompleted ? 1 : 0
    },0)
}