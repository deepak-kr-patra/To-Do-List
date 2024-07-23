import { useState } from "react"
import useTasks from "../zustand/useTasks";
import toast from "react-hot-toast";


const useRemoveTasks = () => {
    const [loading, setLoading] = useState(false);
    const { tasks, setTasks } = useTasks();

    const removeTasks = async (tasksToRemoveIDs) => {
        setLoading(true);
        try {
            for (let idx = 0; idx < tasksToRemoveIDs.length; idx++) {
                const taskToRemoveID = tasksToRemoveIDs[idx];

                const res = await fetch(`/api/tasks/remove/${taskToRemoveID}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }

                const index = tasks.findIndex(task => task._id === taskToRemoveID);
                if (index !== -1) {
                    tasks.splice(index, 1);
                }

                setTasks(tasks);
            };

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        };
    };

    return { loading, removeTasks };
}

export default useRemoveTasks



// tasksToRemoveIDs.map(async (taskToRemoveID) => {
//     const res = await fetch(`/api/tasks/remove/${taskToRemoveID}`, {
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json"
//         }
//     });

//     const data = await res.json();
//     if (data.error) {
//         throw new Error(data.error);
//     }

//     const index = tasks.findIndex(task => task._id === taskToRemoveID);
//     if (index !== -1) {
//         tasks.splice(index, 1);
//     }

//     setTasks(tasks);
// });