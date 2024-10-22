import React, { useState, useEffect } from 'react';
import { FiSettings } from 'react-icons/fi';

const Tasks = () => {
    // Get tasks from localStorage or use default tasks
    const getInitialTasks = () => {
        const storedTasks = localStorage.getItem('taskList');
        return storedTasks ? JSON.parse(storedTasks) : [
            { title: 'Task 1', status: true },
            { title: 'Task 2', status: false },
            { title: 'Task 3', status: true },
            { title: 'Task 4', status: false },
            { title: 'Task 5', status: false },
        ];
    };

    const [taskList, setTaskList] = useState(getInitialTasks);
    const [newTask, setNewTask] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState(localStorage.getItem('filter') || 'All'); // Initialize filter from localStorage
    const [isFilterOpen, setIsFilterOpen] = useState(false); // Toggle filter dropdown
    const tasksPerPage = 4;

    // Save tasks and filter to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(taskList));
    }, [taskList]);

    useEffect(() => {
        localStorage.setItem('filter', filter);
    }, [filter]);

    // Handle status change for tasks
    const toggleTaskStatus = (index) => {
        const updatedTasks = [...taskList];
        updatedTasks[index].status = !updatedTasks[index].status;
        setTaskList(updatedTasks);
    };

    // Handle task creation
    const handleSaveTask = () => {
        if (newTask.trim() !== '') {
            setTaskList([...taskList, { title: newTask, status: false }]);
            setNewTask(''); // Clear input after saving
        }
    };

    // Handle filter selection
    const handleFilterSelect = (selectedFilter) => {
        setFilter(selectedFilter);
        setIsFilterOpen(false); // Close the dropdown after selecting
        setCurrentPage(1); // Reset to the first page when filter changes
    };

    // Pagination logic
    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;

    // Filtered task list based on selected filter
    const filteredTaskList = taskList.filter((task) => {
        if (filter === 'All') return true;
        if (filter === 'To Do') return !task.status;
        if (filter === 'Done') return task.status;
    });

    const currentTasks = filteredTaskList.slice(indexOfFirstTask, indexOfLastTask);

    const handleNextPage = () => {
        if (currentPage < Math.ceil(filteredTaskList.length / tasksPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="p-4">
            {/* Header with task count and filter button */}
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">Tasks</h1>
                <div className="flex items-center gap-2">
                    <div className="bg-blue-100 px-2 py-1 rounded-md border-r-[1px] border-[#ccc]">
                        {taskList.filter((task) => !task.status).length} To Do
                    </div>
                    <span>|</span>
                    <div className="bg-green-400 text-white px-2 py-1 rounded-md border-r-[1px] border-[#ccc]">
                        {taskList.filter((task) => task.status).length} Done
                    </div>
                </div>

                {/* Filter Button with Dropdown Popup */}
                <div className="relative">
                    <button
                        className="text-white bg-blue-500 px-2 py-1 rounded-md hover:text-blue-700 cursor-pointer"
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                    >
                        Filter
                    </button>

                    {/* Filter Dropdown (Popup) */}
                    {isFilterOpen && (
                        <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                            <div
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleFilterSelect('All')}
                            >
                                All
                            </div>
                            <div
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleFilterSelect('To Do')}
                            >
                                To Do
                            </div>
                            <div
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleFilterSelect('Done')}
                            >
                                Done
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Task creation section */}
            <div className="flex gap-2 flex-wrap mt-4">
                <input
                    type="text"
                    placeholder="New Task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="w-[60%] p-2 border rounded-md"
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    onClick={handleSaveTask}
                >
                    Save Task
                </button>
            </div>

            {/* Task List */}
            <div className="mt-4">
                {currentTasks.map((task, index) => (
                    <div
                        key={indexOfFirstTask + index}
                        className="flex justify-between items-center border-[1px] border-[#ccc] py-3 px-2 mb-2 rounded-md"
                    >
                        <h1>{task.title}</h1>
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={task.status}
                                onChange={() => toggleTaskStatus(indexOfFirstTask + index)}
                            />
                            <span className="text-gray-600 cursor-pointer">
                                <FiSettings size={20} />
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-4 gap-2">
                <button
                    className="text-blue-500 px-4 py-2 border-[1px] border-[#ccc] rounded-md hover:bg-blue-100"
                    onClick={handlePrevPage}
                >
                    Previous
                </button>
                <button
                    className="text-blue-500 px-4 py-2 border-[1px] border-[#ccc] rounded-md hover:bg-blue-100"
                    onClick={handleNextPage}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Tasks;
