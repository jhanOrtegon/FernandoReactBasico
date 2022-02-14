const todoReducer = (initial_state = [], action) => {

    switch (action.type) {
        case 'add':
            return [...initial_state, action.payload];
        case 'delete':
            return initial_state.filter(todo => todo.id !== action.payload);
        case 'toggle':
            return initial_state.map(todo => (todo.id === action.payload) ? { ...todo, done: !todo.done } : todo); 
        default:
            return initial_state;
    }
}

export default todoReducer  