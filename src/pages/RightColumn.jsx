import React from 'react'
import Boards from '../components/rightcolumn/Boards'
import PersonalProgress from '../components/rightcolumn/PersonalProgress'
import Tasks from '../components/rightcolumn/Tasks'

const RightColumn = () => {
  return (
    <div>
      <Boards />
      <PersonalProgress />
      <Tasks />
    </div>
  )
}

export default RightColumn