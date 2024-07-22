import React, { useState } from 'react'
import useAddTask from '../../../hooks/useAddTask';


const AddTaskModal = ({ toggleAddTaskModal }) => {

    const { loading, addTask } = useAddTask();

    const [title, setTitle] = useState("");

    const saveTask = () => {
        addTask(title);
        setTitle("");
        toggleAddTaskModal();
    };

    return (
        <div className='modal-container' id='add-task-modal-container'>
            <div className="modal-box max-sm:p-4">
                <h3 className="font-bold text-lg max-sm:text-[16px]">Add a task</h3>
                <input type="text" placeholder="Type here" className="input p-0 focus:border-none focus:outline-none w-full" value={title} onChange={(e) => setTitle(e.target.value)} />
                <div className='flex justify-end mt-6 gap-2'>
                    <button className="btn max-sm:min-h-10 max-sm:h-10 max-sm:px-2" onClick={() => toggleAddTaskModal()}>Cancel</button>
                    <button className="btn max-sm:min-h-10 max-sm:h-10 max-sm:px-2 bg-[#276aa1] hover:bg-[#1d4b71] text-white" onClick={() => saveTask()} disabled={!title}>
                        {loading ? <span className='loading loading-spinner'></span> : "Save"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddTaskModal