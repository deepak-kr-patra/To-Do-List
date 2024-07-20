import React, { useEffect, useState } from 'react'
import useUpdatePassword from '../hooks/useUpdatePassword';
import useAuthUser from '../zustand/useAuthUser';


const UpdatePasswordModal = () => {

    const { passwordUpdatedSuccessfully } = useAuthUser();
    const { loading, updatePassword } = useUpdatePassword();

    const [inputs, setInputs] = useState({
        oldPassword: "",
        newPassword: "",
        confirmedNewPassword: ""
    });

    const closeChangePasswordModal = () => {
        const changePasswordModal = document.getElementById('change-password-modal-container');

        changePasswordModal.classList.remove('show-modal-container');
        
        setInputs({
            oldPassword: "",
            newPassword: "",
            confirmedNewPassword: ""
        });
    };

    const changePassword = () => {
        updatePassword(inputs);
    };

    useEffect(() => {
        if (passwordUpdatedSuccessfully) {
            closeChangePasswordModal();
        }
    }, [passwordUpdatedSuccessfully]);

    return (
        <div className='modal-container' id='change-password-modal-container'>
            <div className="modal-box">
                <div className='flex flex-col'>
                    <div className='mb-4'>
                        <label htmlFor="old-password-input" className='ml-2 cursor-pointer font-extrabold'>Current Password</label>
                        <input type="password" id='old-password-input' placeholder='Enter current password' className="input input-bordered focus:outline-none focus:border-black w-full h-12" value={inputs.oldPassword} onChange={(e) => setInputs({ ...inputs, oldPassword: e.target.value })} />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="new-password-input" className='ml-2 cursor-pointer font-extrabold'>New Password</label>
                        <input type="password" id='new-password-input' placeholder='Enter new password' className="input input-bordered focus:outline-none focus:border-black w-full h-12" value={inputs.newPassword} onChange={(e) => setInputs({ ...inputs, newPassword: e.target.value })} />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="confirm-new-password-input" className='ml-2 cursor-pointer font-extrabold'>Confirm New Password</label>
                        <input type="password" id='confirm-new-password-input' placeholder='Confirm new password' className="input input-bordered focus:outline-none focus:border-black w-full h-12" value={inputs.confirmedNewPassword} onChange={(e) => setInputs({ ...inputs, confirmedNewPassword: e.target.value })} />
                    </div>

                    <div className='flex justify-end gap-2'>
                        <button className="btn" onClick={() => closeChangePasswordModal()}>Cancel</button>

                        <button className='btn bg-[#276aa1] hover:bg-[#1d4b71] text-white' disabled={loading} onClick={() => changePassword()}>
                            {loading ? <span className='loading loading-spinner'></span> : "Update"}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UpdatePasswordModal