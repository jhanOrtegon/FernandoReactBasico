import React from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { notesNewNota } from '../../actions/notes';

export const JournalEntry = ({ id, body, url, title, date }) => {

    const noteDate = moment(date)
    const dispatch = useDispatch();

    const handleSelect = () => {
        const selectEntry = {
            body, title, date, id
        }

        dispatch(notesNewNota(selectEntry))
    }

    return (
        <div className='journal__entry' onClick={handleSelect}>
            {
                (url !== undefined)
                && <div
                    className='journal__entry-picture'
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${url})`
                    }}
                >
                </div>
            }

            <div className="journal__entry-body">
                <p className='journal__entry-title'>{title}</p>
                <p className='journal__entry-content'>{body}</p>
            </div>
            <div className="journal__entry-date">
                <p>{noteDate.format('ddd')}</p>
                <strong>{noteDate.format('Do')}</strong>
            </div>
        </div>
    )
}
