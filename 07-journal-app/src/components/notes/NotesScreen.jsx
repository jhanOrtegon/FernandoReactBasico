import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { notesNewNota } from '../../actions/notes';
import { useForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'

export const NotesScreen = () => {
    const dispatch = useDispatch();

    const { active: note } = useSelector(state => state.notes);
    const [noteValues, handleInputChange, reset] = useForm(note)
    const { body, title, url } = noteValues

    const activeId = useRef(note.id);

    useEffect(() => {
        if (activeId.current !== note.id) {
            reset(note)
        }
        activeId.current = note.id

    }, [note, reset])


    useEffect(() => {
        dispatch(notesNewNota(noteValues))
    }, [dispatch, noteValues])



    return (
        <div className='notes__main-content'>
            <NotesAppBar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={title}
                    name='title'
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    onChange={handleInputChange}
                    value={body}
                    name='body'
                ></textarea>

                {
                    url !== undefined
                    && <div className="notes__image">
                        <img
                            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                            alt="imagen"
                        />
                    </div>
                }


            </div>
        </div >
    )
}
