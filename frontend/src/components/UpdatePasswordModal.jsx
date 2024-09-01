import React, { useEffect, useState } from 'react'
import useUpdatePassword from '../hooks/useUpdatePassword';
import useAuthUser from '../zustand/useAuthUser';
import { FaEye, FaEyeSlash } from "react-icons/fa";


const UpdatePasswordModal = () => {

    const { passwordUpdatedSuccessfully } = useAuthUser();
    const { loading, updatePassword } = useUpdatePassword();

    const [inputs, setInputs] = useState({
        oldPassword: "",
        newPassword: "",
        confirmedNewPassword: ""
    });

    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [newPasswordVisibility, setNewPasswordVisibility] = useState(false);
    const [confirmNewPasswordVisibility, setConfirmNewPasswordVisibility] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisibility(passwordVisibility === false ? true : false);
    };

    const toggleNewPasswordVisibility = () => {
        setNewPasswordVisibility(newPasswordVisibility === false ? true : false);
    };

    const toggleConfirmNewPasswordVisibility = () => {
        setConfirmNewPasswordVisibility(confirmNewPasswordVisibility === false ? true : false);
    };

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
            <div className="modal-box max-sm:p-4">
                <div className='flex flex-col'>
                    <label htmlFor="old-password-input" className='ml-2 cursor-pointer font-extrabold'>Current Password</label>
                    <div className='mb-4 relative'>
                        <input type={!passwordVisibility ? "password" : "text"} id='old-password-input' placeholder='Enter current password' className="input input-bordered focus:outline-none focus:border-black w-full h-12" value={inputs.oldPassword} onChange={(e) => setInputs({ ...inputs, oldPassword: e.target.value })} />
                        <div className='eye-icon' onClick={() => togglePasswordVisibility()}>
                            {!passwordVisibility ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>

                    <label htmlFor="new-password-input" className='ml-2 cursor-pointer font-extrabold'>New Password</label>
                    <div className='mb-4 relative'>
                        <input type={!newPasswordVisibility ? "password" : "text"} id='new-password-input' placeholder='Enter new password' className="input input-bordered focus:outline-none focus:border-black w-full h-12" value={inputs.newPassword} onChange={(e) => setInputs({ ...inputs, newPassword: e.target.value })} />
                        <div className='eye-icon' onClick={() => toggleNewPasswordVisibility()}>
                            {!newPasswordVisibility ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>

                    <label htmlFor="confirm-new-password-input" className='ml-2 cursor-pointer font-extrabold'>Confirm New Password</label>
                    <div className='mb-4 relative'>
                        <input type={!confirmNewPasswordVisibility ? "password" : "text"} id='confirm-new-password-input' placeholder='Confirm new password' className="input input-bordered focus:outline-none focus:border-black w-full h-12" value={inputs.confirmedNewPassword} onChange={(e) => setInputs({ ...inputs, confirmedNewPassword: e.target.value })} />
                        <div className='eye-icon' onClick={() => toggleConfirmNewPasswordVisibility()}>
                            {!confirmNewPasswordVisibility ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>

                    <div className='flex justify-end gap-2'>
                        <button className="btn max-sm:min-h-10 max-sm:h-10 max-sm:px-2" onClick={() => closeChangePasswordModal()}>Cancel</button>

                        <button className='btn max-sm:min-h-10 max-sm:h-10 max-sm:px-2 bg-[#276aa1] hover:bg-[#1d4b71] text-white' disabled={loading} onClick={() => changePassword()}>
                            {loading ? <span className='loading loading-spinner'></span> : "Update"}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UpdatePasswordModal