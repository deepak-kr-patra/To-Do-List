import { useState } from "react"
import toast from "react-hot-toast";
import useTasks from "../zustand/useTasks";


const useAddTask = () => {
    const [loading, setLoading] = useState(false);
    const { tasks, setTasks } = useTasks();

    const addTask = async (title) => {
        setLoading(true);
        try {
            const res = await fetch('/api/tasks/add', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title })
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            setTasks([...tasks, data]);

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, addTask };
}

export default useAddTask