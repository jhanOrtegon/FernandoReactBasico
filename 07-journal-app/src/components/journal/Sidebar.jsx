import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

    const dispatch = useDispatch();
    const userName = useSelector(state => state.auth.name)

    const handleLogout = () => {
        dispatch(startLogout())
    }

    const handleAddEntry = () => {
        dispatch(startNewNote())
    }

    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className='flex-1'>
                    <i className='far fa-moon'></i>
                    <span> {userName}</span>
                </h3>
                <button
                    className='btn flex-1'
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>

            <div className="journal__new-entry" onClick={handleAddEntry}>
                <i className='far fa-calendar-plus fa-5x'></i>
                <p>New Entry</p>
            </div>

            <JournalEntries />
        </aside>
    )
}
