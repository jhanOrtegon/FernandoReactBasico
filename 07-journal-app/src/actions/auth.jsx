import { googleAuthProvider } from "../firebase/firebase-config";
import Swal from 'sweetalert2'
import { firebase } from "../firebase/firebase-config";
import { types } from "../types/types";
import { uiFinishLogin, uiRemoveError, uiSetError, uiStartLogin } from "./ui";


export const loginAsync = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch(uiStartLogin())
            const { user } = await firebase.auth().signInWithEmailAndPassword(email, password)
            dispatch(login(user.uid, user.displayName))
            dispatch(uiRemoveError())
            dispatch(uiFinishLogin(true))
        } catch (error) {
            dispatch(uiSetError(error.message))
            dispatch(uiFinishLogin(true))
            Swal.fire('Error', error.message, 'error')
        }


    }
}


export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid, displayName
    }
})

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
            })
    }
}

export const startRegisterEmailPassword = (email, password, name) => {
    return async (dispatch) => {
        const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
        await user.updateProfile({ displayName: name });
        dispatch(login(user.uid, name))
    }
}


export const logout = () => {
    return {
        type: types.logout,
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout())
    }
}
