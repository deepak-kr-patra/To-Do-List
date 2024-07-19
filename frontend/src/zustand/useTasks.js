import { create } from 'zustand';


const useTasks = create((set) => ({
    tasks: [],
    setTasks: (tasks) => set({ tasks }),
    taskToRemove: null,
    setTaskToRemove: (taskToRemove) => set({ taskToRemove }),
    taskToUpdate: null,
    setTaskToUpdate: (taskToUpdate) => set({ taskToUpdate }),
    taskToUpdateTitle: "",
    setTaskToUpdateTitle: (taskToUpdateTitle) => set({ taskToUpdateTitle }),
    selectedTasks: [],
    setSelectedTasks: (selectedTasks) => set({ selectedTasks })
}));

export default useTasks;