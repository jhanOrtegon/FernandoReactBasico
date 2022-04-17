import React from 'react'
import { useSelector } from 'react-redux';
import { JournalEntry } from './JournalEntry';

export const JournalEntries = () => {
    const { notes } = useSelector(state => state.notes);

    return (
        <div className='journal__entries'>
            {
                notes.map(({ id, notes }) => (
                    <JournalEntry key={id} {...notes} id={id} />
                ))
            }
        </div>
    )
}
