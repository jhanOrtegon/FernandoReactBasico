import React from 'react'
import { useSelector } from 'react-redux'
import { NotesScreen } from '../notes/NotesScreen'
import { NothingSelect } from './NothingSelect'
import { Sidebar } from './Sidebar'

const JournalSreen = () => {

    const notes = useSelector(state => state.notes)
    console.log(notes.active);
    return (
        <div className='journal__main-content'>
            <Sidebar />

            <main>

                {
                    notes.active === null
                        ? <NothingSelect />
                        : <NotesScreen />
                }

            </main>

        </div>
    )
}

export default JournalSreen

