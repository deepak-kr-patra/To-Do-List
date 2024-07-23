import React, { useEffect } from 'react'
import useTasks from '../../../zustand/useTasks';
import useRemoveTasks from '../../../hooks/useRemoveTasks';
import toast from 'react-hot-toast';


const FinishTasksModal = ({ toggleFinishTasksModal }) => {
    
    const { selectedTasks, setSelectedTasks } = useTasks();
    const { loading, removeTasks } = useRemoveTasks();

    useEffect(() => {
        let finishTasksModal = document.getElementById('finish-tasks-modal-container');

        if (selectedTasks.length < 1) {
            finishTasksModal.classList.remove('show-bottom-confirm-modal-container');
        }
    });

    const finishTasks = async () => {
        await removeTasks(selectedTasks);
        setSelectedTasks([]);
        toast.success("Well done. Keep going!");
        toggleFinishTasksModal();
    };

    return (
        <div className="bottom-confirm-modal-container p-6 max-sm:p-4 rounded-3xl shadow-2xl bg-white" id='finish-tasks-modal-container'>
            <h3 className="font-bold text-lg max-sm:text-[16px]">Are the selected tasks complete?</h3>
            <div className='flex justify-end mt-6 gap-2'>
                <button className="btn max-sm:min-h-10 max-sm:h-10 max-sm:px-2" onClick={() => toggleFinishTasksModal()}>Cancel</button>
                <button className="btn max-sm:min-h-10 max-sm:h-10 max-sm:px-2 bg-[#14791b] hover:bg-[#125815] text-white" onClick={() => finishTasks()} disabled={loading}>
                    {loading ? <span className='loading loading-spinner'></span> : "Complete"}
                </button>
            </div>
        </div>
    )
}

export default FinishTasksModal