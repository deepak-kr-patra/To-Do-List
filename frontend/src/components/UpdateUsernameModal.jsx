import React, { useEffect, useState } from 'react'
import useUpdateUsername from '../hooks/useUpdateUsername';
import useAuthUser from '../zustand/useAuthUser';


const UpdateUsernameModal = () => {

    const { usernameUpdatedSuccessfully } = useAuthUser();
    const [username, setUsername] = useState("");
    const { loading, updateUsername } = useUpdateUsername();

    const closeChangeUsernameModal = () => {
        const changeUsernameModal = document.getElementById('change-username-modal-container');

        changeUsernameModal.classList.remove('show-modal-container');
        
        setUsername("");
    };

    const changeUsername = () => {
        updateUsername(username);
    };

    useEffect(() => {
        if (usernameUpdatedSuccessfully) {
            closeChangeUsernameModal();
        }
    }, [usernameUpdatedSuccessfully]);

    return (
        <div className='modal-container' id='change-username-modal-container'>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Enter new username</h3>
                <input type="text" placeholder="Type here" className="input p-0 focus:border-none focus:outline-none w-full" value={username} onChange={(e) => setUsername(e.target.value)} />
                <div className='flex justify-end mt-6 gap-2'>
                    <button className="btn" onClick={() => closeChangeUsernameModal()}>Cancel</button>

                    <button className='btn bg-[#276aa1] hover:bg-[#1d4b71] text-white' disabled={loading} onClick={() => changeUsername()}>
                        {loading ? <span className='loading loading-spinner'></span> : "Update"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UpdateUsernameModal