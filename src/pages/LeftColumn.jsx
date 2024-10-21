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
        <div>
            <Events />
            <Contacts />
            <Projects />
            <Albums />
            <Organisations />
            <Followers />
            <YouFollow />
        </div>
    )
}

export default LeftColumn