import React from 'react'
import useUpdateTask from '../../../hooks/useUpdateTask'
import useTasks from '../../../zustand/useTasks';


const UpdateTaskModal = ({ toggleUpdateTaskModal }) => {

    const { loading, updateTask } = useUpdateTask();
    const { taskToUpdate, taskToUpdateTitle, setTaskToUpdateTitle } = useTasks();

    const editTask = () => {
        updateTask(taskToUpdateTitle, taskToUpdate);
        setTaskToUpdateTitle("");
        toggleUpdateTaskModal(null, "");
    };

    return (
        <div className='modal-container' id='update-task-modal-container'>
            <div className="modal-box">
                <input type="text" className="input p-0 focus:border-none focus:outline-none w-full" value={taskToUpdateTitle} onChange={(e) => setTaskToUpdateTitle(e.target.value)} />
                <div className='flex justify-end mt-6 gap-2'>
                    <button className="btn" onClick={() => toggleUpdateTaskModal(null, "")}>Cancel</button>
                    {loading ? (
                        <span className='loading loading-spinner'></span>
                    ) : (
                        <button className="btn bg-[#276aa1] hover:bg-[#1d4b71] text-white" onClick={() => editTask()}>Update</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default UpdateTaskModal