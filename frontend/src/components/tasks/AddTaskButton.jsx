import React from 'react'
import { FaPlus } from "react-icons/fa6";
import useScreenWidth from '../../zustand/useScreenwidth';


const AddTaskButton = ({ toggleAddTaskModal }) => {

    const {screenWidth} = useScreenWidth();

    const btnSize = screenWidth < 500 ? "w-20 h-20" : "w-24 h-24";

    return (
        <div className='sticky mt-auto bottom-0 flex items-center justify-center add-task-btn-div'>
            <div className= {`${btnSize} flex items-center justify-center rounded-full bg-[#276aa1] hover:bg-[#1d4b71] cursor-pointer`} onClick={() => toggleAddTaskModal()}>
                <FaPlus className='text-2xl text-white' />
            </div>
        </div>
    )
}

export default AddTaskButton