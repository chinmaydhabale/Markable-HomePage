import React, { useState } from 'react';
import { FiPlus, FiSettings } from 'react-icons/fi';

const Projects = () => {
    const projectlist = ['A Training App', 'A E-commerce App', 'A Social Media App', 'A Chat App'];

    const [showAll, setShowAll] = useState(false);

    // Toggle between showing all projects or only the first three
    const handleShowMore = () => {
        setShowAll(!showAll);
    };

    // Show all projects if "showAll" is true, otherwise show the first 3
    const projectsToShow = showAll ? projectlist : projectlist.slice(0, 3);

    return (
        <div className="p-4 bg-white rounded-lg">
            {/* Header */}
            <div className="flex justify-between items-center mb-4 gap-2">
                <h1 className="text-lg lg:text-xl text-blue-500 font-bold">Projects</h1>
                <button className="flex items-center gap-1 bg-blue-500 text-white px-1 lg:px-2 py-1 rounded-md">
                    <FiPlus size={20} />
                    <span className='text-sm lg:text-base'>New Project</span>
                </button>
            </div>

            {/* Projects List */}
            {projectsToShow.map((project, index) => (
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
                        <FiSettings size={15} />
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

export default Projects;
