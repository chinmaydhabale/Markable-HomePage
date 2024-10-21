import React, { useState } from 'react';
import { FiPlus, FiSettings } from 'react-icons/fi';

const Albums = () => {
    const Albumlist = ['roboston trust', 'FASE Funding  2022', 'Funded Projects', 'Nasa 2023'];

    const [showAll, setShowAll] = useState(false);

    // Toggle between showing all projects or only the first three
    const handleShowMore = () => {
        setShowAll(!showAll);
    };

    // Show all projects if "showAll" is true, otherwise show the first 3
    const AlbumToShow = showAll ? Albumlist : Albumlist.slice(0, 3);

    return (
        <div className="p-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold">Albums</h1>
                <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md">
                    <FiPlus size={20} />
                    <span>New Album</span>
                </button>
            </div>

            {/* Projects List */}
            {AlbumToShow.map((project, index) => (
                <div className="flex justify-between items-center border-b-[1px] border-[#ccc] py-3" key={index}>
                    <div className="flex items-center gap-4">
                        <img
                            src="https://media.licdn.com/dms/image/v2/C4D0BAQFGZQ7mb6pMYA/company-logo_200_200/company-logo_200_200/0/1630562065204/makerble_logo?e=1737590400&v=beta&t=mjylZT0aHc_tI0fXfDpR9SAt-Btli9ckWlwJ-OWWQdo"
                            alt="Project Logo"
                            className="w-12 h-12"
                        />
                        <h1 className="font-medium text-lg">{project}</h1>
                    </div>
                    <span className="text-gray-600 cursor-pointer">
                        <FiSettings size={20} />
                    </span>
                </div>
            ))}

            {/* Show More/Show Less Button */}
            <div className="text-blue-500 cursor-pointer text-right mt-4" onClick={handleShowMore}>
                {showAll ? 'Show Less' : 'Show All'}
            </div>
        </div>
    );
};

export default Albums;
