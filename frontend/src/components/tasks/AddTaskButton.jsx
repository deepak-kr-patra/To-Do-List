import React from 'react'
import { FaPlus } from "react-icons/fa6";


const AddTaskButton = ({ toggleAddTaskModal }) => {

    return (
        <div className='sticky mt-auto bottom-0 flex items-center justify-center add-task-btn'>
            <div className='w-24 h-24 flex items-center justify-center rounded-full bg-[#276aa1] hover:bg-[#1d4b71] cursor-pointer' onClick={() => toggleAddTaskModal()}>
                <FaPlus className='text-2xl text-white' />
            </div>
        </div>
    )
}

export default AddTaskButton