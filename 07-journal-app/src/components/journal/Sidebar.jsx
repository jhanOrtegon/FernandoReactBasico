import React from 'react'

export const Sidebar = () => {
    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3>
                    <i className='far fa-moon'></i>
                    <span> Jhan Carlos</span>
                </h3>
                <span>Logout</span>
            </div>

            <div className="journal__new-entry">
                <i className='far fa-calendar-plus fa-5x'></i>
                <p>New Entry</p>
            </div>
        </aside>
    )
}
