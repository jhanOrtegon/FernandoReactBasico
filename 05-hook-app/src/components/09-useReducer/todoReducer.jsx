const todoReducer = (initial_state = [], action) => {

    switch (action.type) {
        case 'add':
            return [...initial_state, action.payload];

        default:
            return initial_state;
    }
}

export default todoReducer  