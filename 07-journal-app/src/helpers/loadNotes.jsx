import { db } from "../firebase/firebase-config"

export const loadNotes = async (uid) => {
    const notesSnap = await db.collection(`${uid}/journal/notes`).get();
    const notes = [];

    notesSnap.forEach(note => {
        notes.push({
            id: note.id,
            notes: note.data()
        })
    })
    return notes
}