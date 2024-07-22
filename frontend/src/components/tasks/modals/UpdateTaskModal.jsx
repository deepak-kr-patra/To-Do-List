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
            <div className="modal-box max-sm:p-4">
                <input type="text" className="input p-0 focus:border-none focus:outline-none w-full" value={taskToUpdateTitle} onChange={(e) => setTaskToUpdateTitle(e.target.value)} />
                <div className='flex justify-end mt-6 gap-2'>
                    <button className="btn max-sm:min-h-10 max-sm:h-10 max-sm:px-2" onClick={() => toggleUpdateTaskModal(null, "")}>Cancel</button>
                    <button className="btn max-sm:min-h-10 max-sm:h-10 max-sm:px-2 bg-[#276aa1] hover:bg-[#1d4b71] text-white" onClick={() => editTask()} disabled={loading}>
                        {loading ? <span className='loading loading-spinner'></span> : "Update"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UpdateTaskModal