import React from 'react'
import { NotesScreen } from '../notes/NotesScreen'
import { NothingSelect } from './NothingSelect'
import { Sidebar } from './Sidebar'

const JournalSreen = () => {
    return (
        <div className='journal__main-content'>
            <Sidebar />

            <main>
                {/* <NothingSelect /> */}
                <NotesScreen />
            </main>

        </div>
    )
}

export default JournalSreen

