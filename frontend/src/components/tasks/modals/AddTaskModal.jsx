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
            <div className="modal-box">
                <h3 className="font-bold text-lg">Add a task</h3>
                <input type="text" placeholder="Type here" className="input p-0 focus:border-none focus:outline-none w-full" value={title} onChange={(e) => setTitle(e.target.value)} />
                <div className='flex justify-end mt-6 gap-2'>
                    <button className="btn" onClick={() => toggleAddTaskModal()}>Cancel</button>
                    {loading ? (
                        <span className='loading loading-spinner'></span>
                    ) : (
                        <button className="btn bg-[#276aa1] hover:bg-[#1d4b71] text-white" disabled={!title} onClick={() => saveTask()}>Save</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AddTaskModal



{/* <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Add a task</h3>
                    <input type="text" placeholder="Type here" className="input p-0 focus:border-none focus:outline-none w-full" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <div className="modal-action">
                        <form method="dialog" className='flex gap-2'>
                            <button className="btn">Cancel</button>
                            {loading ? (
                                <span className='loading loading-spinner'></span>
                            ) : (
                                <button className="btn bg-[#276aa1] hover:bg-[#1d4b71] text-white" disabled={!title} onClick={() => saveTask()}>Save</button>
                            )}
                        </form>
                    </div>
                </div>
            </dialog> */}