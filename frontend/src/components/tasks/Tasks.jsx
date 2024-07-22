import React, { useEffect } from 'react';

import Task from './Task';
import AddTaskButton from './AddTaskButton';
import AddTaskModal from './modals/AddTaskModal';
import RemoveTaskModal from './modals/RemoveTaskModal';
import UpdateTaskModal from './modals/UpdateTaskModal';
import FinishTaskModal from './modals/FinishTaskModal';
import SelectedTasksModal from './modals/SelectedTasksModal';

import useGetTasks from '../../hooks/useGetTasks';
import useTasks from '../../zustand/useTasks';


const Tasks = () => {

  const { loading, tasks } = useGetTasks();

  const { setTaskToRemove, setTaskToUpdate, setTaskToUpdateTitle } = useTasks();

  useEffect(() => {
    const tasksContainer = document.getElementById('tasks-container');

    tasksContainer.scrollHeight > tasksContainer.clientHeight ? tasksContainer.classList.add('scrollable') : tasksContainer.classList.remove('scrollable');
  });

  // to toggle AddTaskModal
  const toggleAddTaskModal = () => {
    const addTaskModal = document.getElementById('add-task-modal-container');

    addTaskModal.classList.contains('show-modal-container') ? addTaskModal.classList.remove('show-modal-container') : addTaskModal.classList.add('show-modal-container');
  };

  // to toggle RemoveTaskModal
  const toggleRemoveTaskModal = (taskToRemoveID) => {
    const removeTaskModal = document.getElementById('remove-task-modal-container');

    removeTaskModal.classList.contains('show-modal-container') ? removeTaskModal.classList.remove('show-modal-container') : removeTaskModal.classList.add('show-modal-container');

    setTaskToRemove(taskToRemoveID);
  };

  // to toggle UpdateTaskModal
  const toggleUpdateTaskModal = (taskToUpdateID, taskTitle) => {
    const updateTaskModal = document.getElementById('update-task-modal-container');

    updateTaskModal.classList.contains('show-modal-container') ? updateTaskModal.classList.remove('show-modal-container') : updateTaskModal.classList.add('show-modal-container');

    setTaskToUpdate(taskToUpdateID);
    setTaskToUpdateTitle(taskTitle);
  };

  // to toggle FinishTaskModal
  const toggleFinishTaskModal = (taskToFinishID) => {
    const finishTaskModal = document.getElementById('finish-task-modal-container');

    finishTaskModal.classList.contains('show-modal-container') ? finishTaskModal.classList.remove('show-modal-container') : finishTaskModal.classList.add('show-modal-container');

    setTaskToRemove(taskToFinishID);
  };

  return (
    <div className='relative w-full h-full flex flex-col items-center justify-start p-8 max-sm:p-2 max-sm:py-4 gap-8 max-sm:gap-4' id='tasks-container'>
      {loading ? (
        <span className='loading loading-spinner'></span>
      ) : (
        <>
          {tasks.map((task, index) =>
            <Task
              key={index}
              task={task}
              index={index + 1}
              toggleRemoveTaskModal={toggleRemoveTaskModal}
              toggleUpdateTaskModal={toggleUpdateTaskModal}
              toggleFinishTaskModal={toggleFinishTaskModal}
            />)
          }
        </>
      )}

      <AddTaskButton toggleAddTaskModal={toggleAddTaskModal} />

      {/* hidden modals */}
      <AddTaskModal toggleAddTaskModal={toggleAddTaskModal} />
      <RemoveTaskModal toggleRemoveTaskModal={toggleRemoveTaskModal} />
      <UpdateTaskModal toggleUpdateTaskModal={toggleUpdateTaskModal} />
      <FinishTaskModal toggleFinishTaskModal={toggleFinishTaskModal} />
      <SelectedTasksModal />
    </div>
  )
}

export default Tasks