import React, { useEffect } from 'react';
import { FaClipboardCheck } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { BsTrashFill } from "react-icons/bs";

import useTasks from '../../zustand/useTasks';


const Task = ({ task, index, toggleRemoveTaskModal, toggleUpdateTaskModal, toggleFinishTaskModal }) => {

    const { selectedTasks, setSelectedTasks } = useTasks();

    useEffect(() => {
        var selector = document.getElementById(`selector${index}`);

        if (selectedTasks.length < 1) {
            selector.checked = false;
        }
    });

    const toggleCheckbox = async () => {
        var selector = document.getElementById(`selector${index}`);

        if (selector.checked) {
            if (!selectedTasks.includes(task._id)) {
                selectedTasks.push(task._id);
            }
            setSelectedTasks(selectedTasks);
        } else {
            const index = selectedTasks.findIndex(selectedTask => selectedTask === task._id);
            if (index !== -1) {
                selectedTasks.splice(index, 1);
            }
            setSelectedTasks(selectedTasks);
        }
    };

    return (
        <div className='w-full flex items-center justify-between p-4 px-6 max-sm:px-2 max-sm:p-2 gap-4 rounded-lg shadow-lg task'>
            <div className='flex items-center justify-center gap-4 max-md:gap-2'>
                <div className='flex items-center justify-center rounded p-1 bg-black serial-div'>
                    <p className='text-white serial-number'>{index}</p>
                </div>
                <p className='task-title'>{task.title}</p>
            </div>

            <div className='flex items-center justify-center gap-6 max-md:gap-4 max-sm:gap-2'>
                <input type="checkbox" id={`selector${index}`} className='checkbox checkbox-success border-2 border-[black] task-checkbox' onClick={() => toggleCheckbox()} />
                
                <button disabled={selectedTasks.length > 0} onClick={() => toggleFinishTaskModal(task._id)}>
                    <FaClipboardCheck className='text-2xlll cursor-pointer hover:text-[#2ba42b] task-icons' />
                </button>
                <button disabled={selectedTasks.length > 0} onClick={() => toggleUpdateTaskModal(task._id, task.title)}>
                    <FaEdit className='text-2xlll cursor-pointer hover:text-[#3f3fd6] task-icons' />
                </button>
                <button disabled={selectedTasks.length > 0} onClick={() => toggleRemoveTaskModal(task._id)}>
                    <BsTrashFill className='text-2xlll cursor-pointer hover:text-[#ce3636] task-icons' />
                </button>
            </div>
        </div>
    )
}

export default Task