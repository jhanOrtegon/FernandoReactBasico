
const initialState = [{
    id: 33,
    todo: "comprar pan",
    done: false
}];


const todoReducer = (state = initialState, action) => {

    if (action?.type === "agregar") {
        return [...state, action.payload]
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 44,
    todo: "comprar gaseosa",
    done: false
};

const agregarTodosAction = {
    type: "agregar",
    payload: newTodo
};

todos = todoReducer(todos, agregarTodosAction);

console.log(todos);