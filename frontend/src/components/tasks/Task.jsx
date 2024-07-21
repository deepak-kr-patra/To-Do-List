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
        <div className='w-full flex items-center justify-between p-4 px-6 gap-4 rounded-lg shadow-lg task'>
            <div className='flex items-center justify-center gap-4'>
                <div className='min-w-6 h-6 flex items-center justify-center rounded bg-black'>
                    <p className='text-white'>{index}</p>
                </div>
                <p className='text-2xl'>{task.title}</p>
            </div>

            <div className='flex items-center justify-center gap-8'>
                <input type="checkbox" id={`selector${index}`} className='checkbox checkbox-success border-2 border-[black]' onClick={() => toggleCheckbox()} />
                
                <button disabled={selectedTasks.length > 0} onClick={() => toggleFinishTaskModal(task._id)}>
                    <FaClipboardCheck className='text-2xl cursor-pointer' />
                </button>
                <button disabled={selectedTasks.length > 0} onClick={() => toggleUpdateTaskModal(task._id, task.title)}>
                    <FaEdit className='text-2xl cursor-pointer' />
                </button>
                <button disabled={selectedTasks.length > 0} onClick={() => toggleRemoveTaskModal(task._id)}>
                    <BsTrashFill className='text-2xl cursor-pointer' />
                </button>
            </div>
        </div>
    )
}

export default Task