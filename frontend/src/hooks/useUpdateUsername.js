import { useState } from "react";
import useAuthUser from "../zustand/useAuthUser";
import toast from "react-hot-toast";

const useUpdateUsername = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser, setUsernameUpdatedSuccessfully } = useAuthUser();

    const updateUsername = async (username) => {

        if (!username) {
            toast.error("Please enter new name");
            return;
        }
        
        setLoading(true);
        setUsernameUpdatedSuccessfully(false);
        try {
            const res = await fetch('/api/info/change-username', {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username })
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error)
            }

            localStorage.setItem("authenticated-user", JSON.stringify(data));
            setAuthUser(data);
            setUsernameUpdatedSuccessfully(true);
            toast.success("Username updated successfully");

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, updateUsername };
};

export default useUpdateUsername;