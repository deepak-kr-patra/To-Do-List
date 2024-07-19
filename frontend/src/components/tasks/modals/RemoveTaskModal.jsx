import React from 'react'
import useRemoveTask from '../../../hooks/useRemoveTask'
import useTasks from '../../../zustand/useTasks';


const RemoveTaskModal = ({ toggleRemoveTaskModal }) => {

    const { loading, removeTask } = useRemoveTask();
    const { taskToRemove } = useTasks();

    const deleteTask = () => {
        removeTask(taskToRemove);
        toggleRemoveTaskModal(null);
    };

    return (
        <div className='modal-container' id='remove-task-modal-container'>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Delete the task?</h3>
                <div className='flex justify-end mt-6 gap-2'>
                    <button className="btn" onClick={() => toggleRemoveTaskModal(null)}>Cancel</button>
                    {loading ? (
                        <span className='loading loading-spinner'></span>
                    ) : (
                        <button className="btn bg-[#cb2727] hover:bg-[#a82e2e] text-white" onClick={() => deleteTask()}>Delete</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default RemoveTaskModal