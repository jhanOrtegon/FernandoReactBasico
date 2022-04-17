import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { noteSave } from '../../actions/notes';

export const NotesAppBar = () => {
    const note = useSelector(state => state.notes.active);
    const dispatch = useDispatch();
    const handleSave = () => {
        dispatch(noteSave(note))
    }

    return (
        <div className='notes__appbar'>
            <span>28 agosto del 2022</span>
            <div>
                <button className='btn'>
                    Picture
                </button>

                <button className='btn' onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    )
}
