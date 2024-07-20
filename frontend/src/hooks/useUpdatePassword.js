import { useState } from "react"
import useAuthUser from "../zustand/useAuthUser";
import toast from "react-hot-toast";


const useUpdatePassword = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser, setPasswordUpdatedSuccessfully } = useAuthUser();

    const updatePassword = async ({ oldPassword, newPassword, confirmedNewPassword }) => {

        const validInputs = checkUserInputs(oldPassword, newPassword, confirmedNewPassword);

        if (!validInputs) {
            return;
        }

        setLoading(true);
        setPasswordUpdatedSuccessfully(false);
        try {
            const res = await fetch('/api/info/change-password', {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ oldPassword, newPassword, confirmedNewPassword })
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.setItem("authenticated-user", JSON.stringify(data));
            setAuthUser(data);
            setPasswordUpdatedSuccessfully(true);
            toast.success("Password updated successfully");

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, updatePassword };
};

const checkUserInputs = (oldPassword, newPassword, confirmedNewPassword) => {
    if (!oldPassword || !newPassword || !confirmedNewPassword) {
        toast.error("Please fill in all fields");
        return false;
    }

    if (newPassword.length < 6) {
        toast.error("Password must be at least 6 characters");
        return false;
    }

    if (newPassword !== confirmedNewPassword) {
        toast.error("Passwords don't match");
        return false;
    }

    return true;
}

export default useUpdatePassword