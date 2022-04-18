import Swal from "sweetalert2"
import { db } from "../firebase/firebase-config"
import { types } from "../types/types"

export const startNewNote = () => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote)
        dispatch(notesNewNota(doc.id, newNote))
    }
}

export const notesNewNota = (newNota) => {
    return {
        type: types.notesNewNota,
        payload: { ...newNota }
    }
}

export const loadNotesAction = (notes) => {
    return {
        type: types.loadNotes,
        payload: notes
    }
}

export const noteSave = (note) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth
        const saveNote = { ...note }
        delete saveNote.id
        await db.doc(`${uid}/journal/notes/${note.id}`).update(saveNote)
        dispatch(noteUpdate(note.id, saveNote))
        Swal.fire('Guardado','Mensaje Guardado Exitosamente','success')
    }
}

export const noteUpdate = (id, note) => {
    return {
        type: types.updateNote,
        payload: {
            id,
            note: {
                id,
                notes: { ...note }
            }
        }
    }
}