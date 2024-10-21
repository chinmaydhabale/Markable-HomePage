import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi'

const PersonalProgress = () => {

    const personalProgresslist = [
        {
            title: 'Pending Office Work',
            value: 7,
            color: 'bg-blue-500'
        },
        {
            title: 'Meeting with Client',
            value: 6,
            color: 'bg-green-500'
        },
        {
            title: 'Dinner with family in the restaurant',
            value: 9,
            color: 'bg-red-500'
        },
        {
            title: 'Attending Football match',
            value: 8,
            color: 'bg-purple-500'
        }
    ]

    const [personalProgress, setPersonalProgress] = useState(personalProgresslist)
    const [showAll, setShowAll] = useState(false)

    const handleIncrement = (index) => {
        setPersonalProgress(prevProgress => prevProgress.map((item, i) =>
            i === index ? { ...item, value: Math.min(item.value + 1, 10) } : item
        ))
    }

    const displayedItems = showAll ? personalProgress : personalProgress.slice(0, 3)

    return (
        <div className='p-4'>
            <div className='flex justify-between items-center mb-4'>
                <h1 className='text-xl font-bold'>Personal Progress</h1>
                <span className='text-blue-500 cursor-pointer'>Go to Board</span>
            </div>
            <div className='pt-4'>
                {displayedItems.map((item, index) => (
                    <div key={index} className='flex items-center gap-2 mb-4'>
                        {/* create a circle and inside another circle  */}
                        <div className={`w-10 h-10 ${item.color} rounded-full flex items-center justify-center`}>
                            <div className={`w-7 h-7 ${item.color} rounded-full border-2 border-white`}></div>
                        </div>
                        <div className='flex-1'>
                            <p className='text-sm text-gray-500'>{item.title}</p>
                            <div className='flex items-center gap-2'>
                                <div className='w-full bg-gray-200 rounded-full h-5 mt-1 relative'>
                                    <div
                                        className={`h-5 rounded-full ${item.color} flex items-center justify-end pr-2`}
                                        style={{ width: `${item.value * 10}%` }}
                                    >
                                        <span className='text-xs text-white font-bold'>{item.value}</span>
                                    </div>
                                </div>
                                <FiPlus
                                    size={20}
                                    className='w-6 h-6 bg-gray-200 text-gray-500 cursor-pointer hover:text-blue-500'
                                    onClick={() => handleIncrement(index)}
                                />
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            {personalProgress.length > 3 && (
                <div
                    className='mt-4 text-blue-500 hover:text-blue-700 cursor-pointer text-right'
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? 'Show Less' : 'Show All'}
                </div>
            )}
        </div>
    )
}

export default PersonalProgress
