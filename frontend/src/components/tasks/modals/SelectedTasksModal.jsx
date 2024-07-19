import React, { useEffect } from 'react'
import { FaClipboardCheck } from "react-icons/fa6";
import { BsTrashFill } from "react-icons/bs";

import useTasks from '../../../zustand/useTasks';
import RemoveTasksModal from './RemoveTasksModal';
import FinishTasksModal from './FinishTasksModal';


const SelectedTasksModal = () => {

  const { selectedTasks, setSelectedTasks } = useTasks();

  // to toggle SelectedTasks modal
  useEffect(() => {
    const selectedTasksModalContainer = document.getElementById('selected-tasks-modal-container');

    selectedTasks.length > 0 ? selectedTasksModalContainer.classList.add('show-bottom-modal-container') : selectedTasksModalContainer.classList.remove('show-bottom-modal-container');
  });

  // to empty selectedTasks array upon clicking cancel
  const emptyOnCancel = () => {
    setSelectedTasks([]);
  };

  // to toggle RemoveTasksModal
  const toggleRemoveTasksModal = () => {
    const removeTasksModal = document.getElementById('remove-tasks-modal-container');

    removeTasksModal.classList.contains('show-bottom-confirm-modal-container') ? removeTasksModal.classList.remove('show-bottom-confirm-modal-container') : removeTasksModal.classList.add('show-bottom-confirm-modal-container');
  };

  // to toggle FinishTasksModal
  const toggleFinishTasksModal = () => {
    const finishTasksModal = document.getElementById('finish-tasks-modal-container');

    finishTasksModal.classList.contains('show-bottom-confirm-modal-container') ? finishTasksModal.classList.remove('show-bottom-confirm-modal-container') : finishTasksModal.classList.add('show-bottom-confirm-modal-container');
  };

  return (
    <>
      <div className="bottom-modal-container p-6 gap-4 rounded-3xl shadow-2xl bg-white" id='selected-tasks-modal-container'>
        <div className='flex justify-center gap-12'>
          <div className='flex flex-col items-center justify-center gap-2'>
            <FaClipboardCheck className='text-2xl cursor-pointer' onClick={() => toggleFinishTasksModal()} />
            <p>Finish</p>
          </div>

          <div className='flex flex-col items-center justify-center gap-2'>
            <BsTrashFill className='text-2xl cursor-pointer' onClick={() => toggleRemoveTasksModal()} />
            <p>Delete</p>
          </div>
        </div>

        <div className='w-full flex justify-end'>
          <button className="btn" onClick={() => emptyOnCancel()}>Cancel</button>
        </div>

      </div>

      <FinishTasksModal toggleFinishTasksModal={toggleFinishTasksModal} />
      <RemoveTasksModal toggleRemoveTasksModal={toggleRemoveTasksModal} />
    </>
  )
}

export default SelectedTasksModal



{/* <button className="btn" onClick={() => toggleAddTaskModal()}>Cancel</button>
          {loading ? (
            <span className='loading loading-spinner'></span>
          ) : (
            <button className="btn bg-[#276aa1] hover:bg-[#1d4b71] text-white" onClick={() => saveTask()}>Save</button>
          )} */}