import React, { useState } from 'react';
import { FiSettings } from 'react-icons/fi';

const Tasks = () => {
    // Initial task list
    const initialTaskList = [
        {
            title: 'Task 1',
            status: true,
        },
        {
            title: 'Task 2',
            status: false,
        },
        {
            title: 'Task 3',
            status: true,
        },
        {
            title: 'Task 4',
            status: false,
        },
    ];

    const [taskList, setTaskList] = useState(initialTaskList);
    const [newTask, setNewTask] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const tasksPerPage = 2;

    // Handle status change for the tasks
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

    // Pagination logic
    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;
    const currentTasks = taskList.slice(indexOfFirstTask, indexOfLastTask);

    const handleNextPage = () => {
        if (currentPage < Math.ceil(taskList.length / tasksPerPage)) {
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
                <button className="text-white bg-blue-500 px-2 py-1 rounded-md hover:text-blue-700 cursor-pointer">
                    Filter
                </button>
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
