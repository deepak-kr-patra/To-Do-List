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
            <div className="modal-box max-sm:p-4">
                <h3 className="font-bold text-lg max-sm:text-[16px]">Is the task complete?</h3>
                <div className='flex justify-end mt-6 gap-2'>
                    <button className="btn max-sm:min-h-10 max-sm:h-10 max-sm:px-2" onClick={() => toggleFinishTaskModal(null)}>Cancel</button>
                    <button className="btn max-sm:min-h-10 max-sm:h-10 max-sm:px-2 bg-[#14791b] hover:bg-[#125815] text-white" onClick={() => finishTask()} disabled={loading}>
                        {loading ? <span className='loading loading-spinner'></span> : "Complete"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FinishTaskModal