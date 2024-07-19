import React, { useEffect } from 'react'
import useTasks from '../../../zustand/useTasks';
import useRemoveTasks from '../../../hooks/useRemoveTasks';


const FinishTasksModal = ({ toggleFinishTasksModal }) => {
    
    const { selectedTasks, setSelectedTasks } = useTasks();
    const { loading, removeTasks } = useRemoveTasks();

    useEffect(() => {
        let finishTasksModal = document.getElementById('finish-tasks-modal-container');

        if (selectedTasks.length < 1) {
            finishTasksModal.classList.remove('show-bottom-confirm-modal-container');
        }
    });

    const finishTasks = () => {
        removeTasks(selectedTasks);
        setSelectedTasks([]);
        toggleFinishTasksModal();
    };

    return (
        <div className="bottom-confirm-modal-container p-6 rounded-3xl shadow-2xl bg-white" id='finish-tasks-modal-container'>
            <h3 className="font-bold text-lg">Are the selected tasks complete?</h3>
            <div className='flex justify-end mt-6 gap-2'>
                <button className="btn" onClick={() => toggleFinishTasksModal()}>Cancel</button>
                {loading ? (
                    <span className='loading loading-spinner'></span>
                ) : (
                    <button className="btn bg-[#14791b] hover:bg-[#125815] text-white" onClick={() => finishTasks()}>Complete</button>
                )}
            </div>
        </div>
    )
}

export default FinishTasksModal