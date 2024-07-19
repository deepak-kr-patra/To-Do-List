import { useState } from "react";
import useAuthUser from "../zustand/useAuthUser.js";
import toast from "react-hot-toast";


const useSignup = () => {

    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthUser();

    const signup = async ({ username, password, confirmedPassword }) => {

        const validInputs = checkUserInputs(username, password, confirmedPassword);

        if (!validInputs) {
            return;
        }

        setLoading(true);
        try {
            const res = await fetch('/api/auth/signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password, confirmedPassword })
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.setItem("authenticated-user", JSON.stringify(data));
            setAuthUser(data);

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { loading, signup };
}

const checkUserInputs = (username, password, confirmedPassword) => {
    if (!username || !password || !confirmedPassword) {
        toast.error("Please fill in all fields");
        return false;
    }

    // if (username.length < 3) {
    //     toast.error("Username must be at least 3 characters");
    //     return false;
    // }

    if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return false;
    }

    if (password !== confirmedPassword) {
        toast.error("Passwords don't match");
        return false;
    }

    return true;
}

export default useSignup