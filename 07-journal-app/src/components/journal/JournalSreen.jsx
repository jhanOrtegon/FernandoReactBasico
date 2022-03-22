import React from 'react'
import { NothingSelect } from './NothingSelect'
import { Sidebar } from './Sidebar'

const JournalSreen = () => {
    return (
        <div className='journal__main-content'>
            <Sidebar />

            <main>
                <NothingSelect />
            </main>

        </div>
    )
}

export default JournalSreen

