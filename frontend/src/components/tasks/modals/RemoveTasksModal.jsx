import React, { useEffect } from 'react'
import useTasks from '../../../zustand/useTasks';
import useRemoveTasks from '../../../hooks/useRemoveTasks';


const RemoveTasksModal = ({ toggleRemoveTasksModal }) => {

    const { selectedTasks, setSelectedTasks } = useTasks();
    const { loading, removeTasks } = useRemoveTasks();

    useEffect(() => {
        let removeTasksModal = document.getElementById('remove-tasks-modal-container');

        if (selectedTasks.length < 1) {
            removeTasksModal.classList.remove('show-bottom-confirm-modal-container');
        }
    });

    const deleteTasks = () => {
        removeTasks(selectedTasks);
        setSelectedTasks([]);
        toggleRemoveTasksModal();
    };

    return (
        <div className="bottom-confirm-modal-container p-6 rounded-3xl shadow-2xl bg-white" id='remove-tasks-modal-container'>
            <h3 className="font-bold text-lg">Delete selected tasks?</h3>
            <div className='flex justify-end mt-6 gap-2'>
                <button className="btn" onClick={() => toggleRemoveTasksModal()}>Cancel</button>
                {loading ? (
                    <span className='loading loading-spinner'></span>
                ) : (
                    <button className="btn bg-[#cb2727] hover:bg-[#a82e2e] text-white" onClick={() => deleteTasks()}>Delete</button>
                )}
            </div>
        </div>
    )
}

export default RemoveTasksModal