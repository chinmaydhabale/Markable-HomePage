import React from 'react'
import Boards from '../components/rightcolumn/Boards'
import PersonalProgress from '../components/rightcolumn/PersonalProgress'
import Tasks from '../components/rightcolumn/Tasks'

const RightColumn = () => {
  return (
    <div className='my-4'>
      <div className='mb-4'>
        <Boards />
      </div>
      <div className='mb-4'>
        <PersonalProgress />
      </div>
      <div className='mb-4'>
        <Tasks />
      </div>
    </div>
  )
}

export default RightColumn