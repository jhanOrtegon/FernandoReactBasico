import React from 'react'

export const JournalEntry = () => {
    return (
        <div className='journal__entry'>
            <div
                className='journal__entry-picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://i.pinimg.com/736x/cc/4b/a7/cc4ba7b75bffe13fab8bed123f6ff6ff.jpg)'
                }}
            ></div>

            <div className="journal__entry-body">
                <p className='journal__entry-title'>un nuevo dia</p>
                <p className='journal__entry-content'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.,</p>
            </div>
            <div className="journal__entry-date">
                <p>Monday</p>
                <strong>21</strong>
            </div>
        </div>
    )
}
