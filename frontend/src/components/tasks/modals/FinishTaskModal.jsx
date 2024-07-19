import React from 'react'
import useRemoveTask from '../../../hooks/useRemoveTask';
import useTasks from '../../../zustand/useTasks';


const FinishTaskModal = ({ toggleFinishTaskModal }) => {

    const { loading, removeTask } = useRemoveTask();
    const { taskToRemove } = useTasks();

    const finishTask = () => {
        removeTask(taskToRemove);
        toggleFinishTaskModal(null);
    };

    return (
        <div className='modal-container' id='finish-task-modal-container'>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Is the task complete?</h3>
                <div className='flex justify-end mt-6 gap-2'>
                    <button className="btn" onClick={() => toggleFinishTaskModal(null)}>Cancel</button>
                    {loading ? (
                        <span className='loading loading-spinner'></span>
                    ) : (
                        <button className="btn bg-[#14791b] hover:bg-[#125815] text-white" onClick={() => finishTask()}>Complete</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FinishTaskModal