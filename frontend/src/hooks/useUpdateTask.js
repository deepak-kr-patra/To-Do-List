import { useState } from "react"
import useTasks from "../zustand/useTasks";
import toast from "react-hot-toast";


const useUpdateTask = () => {
    const [loading, setLoading] = useState();
    const { tasks, setTasks } = useTasks();

    const updateTask = async (title, taskToUpdateID) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/tasks/update/${taskToUpdateID}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title })
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            const index = tasks.findIndex(task => task._id === taskToUpdateID);
            if (index !== -1) {
                tasks.splice(index, 1, data); // removing the task and replacing it with updated task
            }

            setTasks(tasks);

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, updateTask };
}

export default useUpdateTask