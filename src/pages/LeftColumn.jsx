import React from 'react'
import Events from '../components/leftcolumn/Events'
import Contacts from '../components/leftcolumn/Contacts'
import Projects from '../components/leftcolumn/Projects'
import Albums from '../components/leftcolumn/Albums'
import Organisations from '../components/leftcolumn/Organisations'
import Followers from '../components/leftcolumn/Followers'
import YouFollow from '../components/leftcolumn/YouFollow'

const LeftColumn = () => {
    return (
        <div className='my-4'>
            <div className='mb-4'>
                <Events />
            </div>
            <div className='mb-4'>
                <Contacts />
            </div>
            <div className='mb-4'>
                <Projects />
            </div>
            <div className='mb-4'>
                <Albums />
            </div>
            <div className='mb-4'>
                <Organisations />
            </div>
            <div className='mb-4'>
                <Followers />
            </div>
            <div className='mb-4'>
                <YouFollow />
            </div>
        </div>
    )
}

export default LeftColumn