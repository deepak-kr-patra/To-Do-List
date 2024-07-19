import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import useTasks from "../zustand/useTasks";


const useGetTasks = () => {
    const [loading, setLoading] = useState(false);
    const { tasks, setTasks } = useTasks();

    useEffect(() => {
        const getTasks = async () => {
            setLoading(true);
            try {
                const res = await fetch('/api/tasks', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }

                setTasks(data);

            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };
        getTasks();
    }, []);

    return { loading, tasks };
}

export default useGetTasks