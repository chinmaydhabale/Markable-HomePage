import React, { useState } from 'react';

const Boards = () => {
    const boardlist = ['3315', 'Angola Production', 'Attendance Reporting', 'Billing'];

    const [showAll, setShowAll] = useState(false);

    // Toggle between showing all projects or only the first three
    const handleShowMore = () => {
        setShowAll(!showAll);
    };

    // Show all projects if "showAll" is true, otherwise show the first 3
    const boardsToShow = showAll ? boardlist : boardlist.slice(0, 3);

    return (
        <div className="p-4 bg-white rounded-lg">
            {/* Header */}
            <h1 className="text-xl font-bold">Boards</h1>

            {/* Boards List */}
            <div className='mt-4'>
                {boardsToShow.map((board, index) => (
                    <div className="flex justify-between items-center border-b-[1px] border-[#ccc] py-3" key={index}>
                        <div className="flex items-center gap-4">
                            <img
                                src="https://media.licdn.com/dms/image/v2/C4D0BAQFGZQ7mb6pMYA/company-logo_200_200/company-logo_200_200/0/1630562065204/makerble_logo?e=1737590400&v=beta&t=mjylZT0aHc_tI0fXfDpR9SAt-Btli9ckWlwJ-OWWQdo"
                                alt="Board Logo"
                                className="w-12 h-12"
                            />
                            <h1 className="font-medium text-lg">{board}</h1>
                        </div>
                    </div>
                ))}
            </div>

            {/* Show More/Show Less Button */}
            <div className="text-blue-500 hover:text-blue-700 cursor-pointer text-right mt-4" onClick={handleShowMore}>
                {showAll ? 'Show Less' : 'Show All'}
            </div>
        </div>
    );
};

export default Boards;
