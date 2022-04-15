import { types } from "../types/types"

export const uiSetError = (err) => {
    return {
        type: types.uiSetError,
        payload: {
            err
        }
    }

}
export const uiRemoveError = () => {
    return {
        type: types.uiRemoveError,
    }
}

export const uiStartLogin = (loading) => {
    return {
        type: types.uiStartLogin,
        payload: {
            loading
        }
    }
}

export const uiFinishLogin = () => {
    return {
        type: types.uiFinishLogin,
    }
}