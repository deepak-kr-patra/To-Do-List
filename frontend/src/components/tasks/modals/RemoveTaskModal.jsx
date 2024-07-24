import React from 'react'
import useRemoveTask from '../../../hooks/useRemoveTask'
import useTasks from '../../../zustand/useTasks';


const RemoveTaskModal = ({ toggleRemoveTaskModal }) => {

    const { loading, removeTask } = useRemoveTask();
    const { taskToRemove } = useTasks();

    const deleteTask = async () => {
        await removeTask(taskToRemove);
        toggleRemoveTaskModal(null);
    };

    return (
        <div className='modal-container' id='remove-task-modal-container'>
            <div className="modal-box max-sm:p-4">
                <h3 className="font-bold text-lg max-sm:text-[16px]">Delete the task?</h3>
                <div className='flex justify-end mt-6 gap-2'>
                    <button className="btn max-sm:min-h-10 max-sm:h-10 max-sm:px-2" onClick={() => toggleRemoveTaskModal(null)}>Cancel</button>
                    <button className="btn max-sm:min-h-10 max-sm:h-10 max-sm:px-2 bg-[#cb2727] hover:bg-[#a82e2e] text-white" onClick={() => deleteTask()} disabled={loading}>
                        {loading ? <span className='loading loading-spinner'></span> : "Delete"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RemoveTaskModal