import React from 'react';

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
  console.log(tasks);

  const { setTaskToRemove, setTaskToUpdate, setTaskToUpdateTitle } = useTasks();

  // to toggle AddTaskModal
  const toggleAddTaskModal = () => {
    const addTaskModal = document.getElementById('add-task-modal-container');

    addTaskModal.classList.contains('show-modal-container') ? addTaskModal.classList.remove('show-modal-container') : addTaskModal.classList.add('show-modal-container');
  };

  // to toggle RemoveTaskModal
  const toggleRemoveTaskModal = (taskToRemoveID) => {
    const removeTaskModal = document.getElementById('remove-task-modal-container');

    if (removeTaskModal.classList.contains('show-modal-container')) {
      removeTaskModal.classList.remove('show-modal-container');
      setTaskToRemove(null);
    } else {
      removeTaskModal.classList.add('show-modal-container');
      setTaskToRemove(taskToRemoveID);
    }
  };

  // to toggle UpdateTaskModal
  const toggleUpdateTaskModal = (taskToUpdateID, taskTitle) => {
    const updateTaskModal = document.getElementById('update-task-modal-container');

    if (updateTaskModal.classList.contains('show-modal-container')) {
      updateTaskModal.classList.remove('show-modal-container');
      setTaskToUpdate(null);
      setTaskToUpdateTitle("");
    } else {
      updateTaskModal.classList.add('show-modal-container');
      setTaskToUpdate(taskToUpdateID);
      setTaskToUpdateTitle(taskTitle);
    }
  };

  // to toggle FinishTaskModal
  const toggleFinishTaskModal = (taskToFinishID) => {
    const finishTaskModal = document.getElementById('finish-task-modal-container');

    if (finishTaskModal.classList.contains('show-modal-container')) {
      finishTaskModal.classList.remove('show-modal-container');
      setTaskToRemove(null);
    } else {
      finishTaskModal.classList.add('show-modal-container');
      setTaskToRemove(taskToFinishID);
    }
  };

  return (
    <div className='relative w-full h-full flex flex-col items-center justify-start p-8 gap-8 overflow-y-scroll'>
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



{/* <Task task={"asa"} index={0} />
      <Task task={"asa"} index={0} />
      <Task task={"asa"} index={0} />
      <Task task={"asa"} index={0} />
      <Task task={"asa"} index={0} />
      <Task task={"asa"} index={0} />
      <Task task={"asa"} index={0} />
      <Task task={"asa"} index={0} />
      <Task task={"asa"} index={0} />
      <Task task={"asa"} index={0} />
      <Task task={"asa"} index={0} /> */}