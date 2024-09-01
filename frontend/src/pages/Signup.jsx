import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useSignup from '../hooks/useSignup';
import useScreenWidth from '../zustand/useScreenwidth';
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Signup = () => {

  const [userInputs, setUserInputs] = useState({
    username: "",
    password: "",
    confirmedPassword: ""
  });

  const { loading, signup } = useSignup();
  const { screenWidth } = useScreenWidth();

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(passwordVisibility === false ? true : false);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisibility(confirmPasswordVisibility === false ? true : false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(userInputs);
  };

  const toggleLabel = (inputDiv, inputFieldID) => {
    inputDiv.addEventListener('focusin', () => {
      inputDiv.classList.add('input-div-clicked');
    });

    inputDiv.addEventListener('focusout', () => {
      const inputField = document.getElementById(inputFieldID);

      if (inputField.value.length > 0) {
        inputDiv.classList.add('input-div-clicked');
      } else {
        inputDiv.classList.remove('input-div-clicked');
      }
    });
  }

  useEffect(() => {
    const usernameDiv = document.getElementById('username-div-signup');
    const passwordDiv = document.getElementById('password-div-signup');
    const confirmPDiv = document.getElementById('confirmPassword-div-signup');

    toggleLabel(usernameDiv, "username-div-input-signup");
    toggleLabel(passwordDiv, "password-div-input-signup");
    toggleLabel(confirmPDiv, "confirmPassword-div-input-signup");
  });

  const boxWidth = screenWidth <= 550 ? "w-[90%]" : "w-[500px]";

  return (
    <div className='w-full h-full flex items-center justify-center signup-page'>
      <div className={`flex flex-col items-center justify-center ${boxWidth} mx-auto`}>
        <div className="w-full h-full p-8 max-sm:p-6 max-sm:px-3 rounded-lg shadow-md bg-white">

          <h1 className='mb-8 max-sm:mb-6 text-3xl max-sm:text-2xl font-semibold text-center text-gray-700'>
            Sign Up <span className='text-blue-600'>To-Do List</span>
          </h1>

          <form onSubmit={handleSubmit} className='flex flex-col'>
            <div className='input-div relative mb-8 max-sm:mb-6' id='username-div-signup'>
              <input type="text" id='username-div-input-signup' className="input input-bordered focus:outline-none focus:border-black w-full h-12" value={userInputs.username} onChange={(e) => setUserInputs({ ...userInputs, username: e.target.value })} />
            </div>

            <div className='input-div relative mb-8 max-sm:mb-6' id='password-div-signup'>
              <input type={!passwordVisibility ? "password" : "text"} id='password-div-input-signup' className="input input-bordered focus:outline-none focus:border-black w-full h-12" value={userInputs.password} onChange={(e) => setUserInputs({ ...userInputs, password: e.target.value })} />
              <div className='eye-icon' onClick={() => togglePasswordVisibility()}>
                {!passwordVisibility ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            <div className='input-div relative mb-8 max-sm:mb-6' id='confirmPassword-div-signup'>
              <input type={!confirmPasswordVisibility ? "password" : "text"} id='confirmPassword-div-input-signup' className="input input-bordered focus:outline-none focus:border-black w-full h-12" value={userInputs.confirmedPassword} onChange={(e) => setUserInputs({ ...userInputs, confirmedPassword: e.target.value })} />
              <div className='eye-icon' onClick={() => toggleConfirmPasswordVisibility()}>
                {!confirmPasswordVisibility ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            <div>
              <button className='btn btn-block btn-sm max-sm:text-sm auth-button' disabled={loading}>
                {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
              </button>
            </div>

            <div className="divider before:h-[1.6px] after:h-[1.6px]">OR</div>

            <div className='max-sm:text-sm login-instead'>
              Already have an account?
              <span className='h-12 flex items-center'>
                <Link to="/login" className='hover:underline text-blue-600'>
                  Login
                </Link>
              </span>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup