const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}]

// FUNCION REDUCER
const todoReducer = (state = initialState, action) => {

    //SI ACTION TIENE UN TIPO LEA EL TYPE

    if (action?.type === 'agregar') {
        return [...state, action.payload]
    }

    return state

}

//INICIALIZACION DEL REDUCER
let todos = todoReducer()

const newTodo = {
    id: 2,
    todo: 'Comprar Leche',
    done: false
}

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer(todos, agregarTodoAction)

console.log(todos)
