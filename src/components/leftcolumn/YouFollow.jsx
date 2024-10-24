import React, { useState } from 'react'

const YouFollow = () => {

    // collect all images from this project in object with their name 
    const followlist = [
        {
            image: "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "akshat"
        },
        {
            image: "https://images.unsplash.com/photo-1725028748781-7adb1df9a943?q=80&w=1874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "danish"
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "yash"
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "karan"
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "shreya"
        },
        {
            image: "https://images.unsplash.com/photo-1691493226898-a8e5d09b9ef2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "shubham"
        },
        {
            image: "https://preview.redd.it/rwl5o5xm2tv71.jpg?width=1080&crop=smart&auto=webp&s=774f3c9781d0fdba1a1a06e83a92ae0e5bec4623",
            name: "Rohit"
        },
    ]

    const [showAll, setShowAll] = useState(false);

    const handleShowMore = () => {
        setShowAll(!showAll);
    }

    const visibleFollow = showAll ? followlist : followlist.slice(0, 3);



    return (
        <div className='bg-white rounded-lg p-4'>
            <h1 className="text-xl text-blue-500 font-bold m-4">People You Know</h1>
            <div >
                {showAll && visibleFollow.map((follow, index) => (
                    <div key={index} className="flex items-center gap-4 m-4">
                        <img src={follow.image} alt={follow.name} className="w-14 h-14 rounded-full" />
                        <p className='font-semibold'>{follow.name}</p>
                    </div>
                ))}
            </div>


            <div className='flex gap-2 m-4 flex-wrap'>

                {!showAll && followlist.map((follow, index) => {
                    return (
                        <div key={index} className="flex items-center gap-4">
                            <img src={follow.image} alt={follow.name} className="w-10 h-10 rounded-full" />
                        </div>
                    )
                })}
            </div>
            {/* show more button or show less button  */}
            <div className="text-blue-500 cursor-pointer text-right mt-4" onClick={handleShowMore}> {showAll ? 'Show Less' : 'Show All'}</div>
        </div>
    )
}

export default YouFollow