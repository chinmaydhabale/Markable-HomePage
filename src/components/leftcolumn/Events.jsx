import React, { useState } from 'react';
import { FiSettings } from 'react-icons/fi'; // Importing settings icon from react-icons

const Events = () => {
    // State to manage whether all events should be shown
    const [showAll, setShowAll] = useState(false);

    const eventsjson = [
        {
            eventname: 'Youth panel',
            fromeventdate: {
                time: '13:00',
                date: '02/03/23',
            },
            toeventdate: {
                time: '15:30',
                date: '02/03/23',
            },
            totalpeople: {
                manager: 1,
                worker: 0,
                Guest: 0,
            },
        },
        {
            eventname: 'Digital Inclusion Event',
            fromeventdate: {
                time: '10:00',
                date: '06/03/23',
            },
            toeventdate: {
                time: '15:00',
                date: '06/03/23',
            },
            totalpeople: {
                manager: 1,
                worker: 5,
                Guest: 8,
            },
        },
        {
            eventname: 'Youth Panel',
            fromeventdate: {
                time: '13:00',
                date: '02/04/23',
            },
            toeventdate: {
                time: '15:30',
                date: '02/04/23',
            },
            totalpeople: {
                manager: 1,
                worker: 0,
                Guest: 0,
            },
        },
        {
            eventname: 'Tech Conference',
            fromeventdate: {
                time: '09:00',
                date: '10/05/23',
            },
            toeventdate: {
                time: '16:00',
                date: '10/05/23',
            },
            totalpeople: {
                manager: 2,
                worker: 3,
                Guest: 50,
            },
        },
        {
            eventname: 'Health Workshop',
            fromeventdate: {
                time: '14:00',
                date: '12/07/23',
            },
            toeventdate: {
                time: '17:00',
                date: '12/07/23',
            },
            totalpeople: {
                manager: 1,
                worker: 4,
                Guest: 20,
            },
        },
    ];

    // Function to toggle the state of showing all events
    const handleShowMore = () => {
        setShowAll(!showAll);
    };

    // Limit to first 3 events if showAll is false
    const eventsToDisplay = showAll ? eventsjson : eventsjson.slice(0, 3);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Events</h1>
            <hr />
            {eventsToDisplay.map((event, index) => (
                <div key={index} className="my-4 p-4 bg-gray-100 rounded-lg shadow">
                    {/* Event header */}
                    <div className="flex justify-between items-center mb-2">
                        <div className="font-semibold text-lg">{event.eventname}</div>
                        <span className="text-gray-600 cursor-pointer">
                            <FiSettings size={20} />
                        </span>
                    </div>
                    {/* Event date and time */}
                    <div className="text-gray-700">
                        {event.fromeventdate.time} {event.fromeventdate.date} -{' '}
                        {event.toeventdate.time} {event.toeventdate.date}
                    </div>
                    {/* Total people */}
                    <div className="text-gray-600 mt-2">
                        <span>{event.totalpeople.manager} Manager</span>,{' '}
                        <span>{event.totalpeople.worker} Worker</span>,{' '}
                        <span>{event.totalpeople.Guest} Guest</span>
                    </div>
                </div>
            ))}
            {/* Show More/Show Less Button */}
            <div className="text-blue-500 cursor-pointer text-right" onClick={handleShowMore}>
                {showAll ? 'Show Less' : 'Show All'}
            </div>
        </div>
    );
};

export default Events;
