import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

const Contacts = () => {
    const contactlist = [
        {
            id: 1,
            name: 'A11 Frank',
            lastactive: '6 days ago',
        },
        {
            id: 2,
            name: 'Jane Doe',
            lastactive: '2 days ago',
        },
        {
            id: 3,
            name: 'John Smith',
            lastactive: '4 days ago',
        },
        {
            id: 4,
            name: 'A1 Adam Android',
            lastactive: '3 days ago',
        },
        {
            id: 5,
            name: 'Chris Martin',
            lastactive: '1 day ago',
        },
    ];

    const [showAll, setShowAll] = useState(false);

    // Display only the first 3 contacts initially
    const contactsToShow = showAll ? contactlist : contactlist.slice(0, 3);

    return (
        <div className="p-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold">Contacts</h1>
                <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md">
                    <FiPlus size={20} />
                    <span>New Contact</span>
                </button>
            </div>

            {/* Contact List */}
            <div className="flex flex-col">
                {contactsToShow.map((contact) => (
                    <div
                        key={contact.id}
                        className="flex items-center gap-4 border-b-[1px] border-[#ccc] py-3"
                    >
                        <img
                            src="https://media.licdn.com/dms/image/v2/C4D0BAQFGZQ7mb6pMYA/company-logo_200_200/company-logo_200_200/0/1630562065204/makerble_logo?e=1737590400&v=beta&t=mjylZT0aHc_tI0fXfDpR9SAt-Btli9ckWlwJ-OWWQdo"
                            alt="Contact Avatar"
                            className="w-12 h-12 "
                        />
                        <div>
                            <h1 className="font-medium text-lg">{contact.name}</h1>
                            <p className="text-gray-600 text-sm">Last active: {contact.lastactive}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Show More Button */}
            {!showAll && (
                <div
                    className="text-blue-500 cursor-pointer text-right pt-4"
                    onClick={() => setShowAll(true)}
                >
                    Show All
                </div>
            )}

            {/* Show Less Button */}
            {showAll && (
                <div
                    className="text-blue-500 cursor-pointer text-right pt-4"
                    onClick={() => setShowAll(false)}
                >
                    Show Less
                </div>
            )}
        </div>
    );
};

export default Contacts;
