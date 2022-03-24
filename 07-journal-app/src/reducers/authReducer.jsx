import { types } from "../types/types";

export const authReducer = (state = { uid: 1, name: 'jhan' }, action) => {

    switch (action.type) {
        case types.login:

            return;
        case types.logout:

            return;

        default:
            return state;
    }
}
