import React, { useEffect, useState } from 'react';
import useLogin from '../hooks/useLogin';
import { Link } from 'react-router-dom';


const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  const toggleLabel = (inputDiv, inputFieldID) => {
    inputDiv.addEventListener('focusin', () => {
      inputDiv.classList.add('input-div-clicked');
    });

    inputDiv.addEventListener('focusout', () => {
      const inputField = document.getElementById(inputFieldID);
      console.log('Input field value changed to:', inputField.value);

      if (inputField.value.length > 0) {
        inputDiv.classList.add('input-div-clicked');
      } else {
        inputDiv.classList.remove('input-div-clicked');
      }
    });
  }

  useEffect(() => {
    const usernameDiv = document.getElementById('username-div-login');
    const passwordDiv = document.getElementById('password-div-login');

    toggleLabel(usernameDiv, "username-div-input-login");
    toggleLabel(passwordDiv, "password-div-input-login");
  });

  return (
    <div className='w-full h-full flex items-center justify-center login-page'>
      <div className='flex flex-col items-center justify-center min-w-[500px] mx-auto'>
        <div className="w-full h-full p-8 rounded-lg shadow-md bg-white login-box">

          <h1 className='mb-8 text-3xl font-semibold text-center text-gray-700'>
            Login <span className='text-blue-500'>To-Do List</span>
          </h1>

          <form onSubmit={handleSubmit} className='flex flex-col'>
            <div className='input-div relative mb-8' id='username-div-login'>
              <input type="text" id='username-div-input-login' className="input input-bordered focus:outline-none focus:border-black w-full h-12" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div className='input-div relative mb-8' id='password-div-login'>
              <input type="password" id='password-div-input-login' className="input input-bordered focus:outline-none focus:border-black w-full h-12" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div>
              <button className='btn btn-block btn-sm auth-button' disabled={loading}>
                {loading ? <span className='loading loading-spinner'></span> : "Login"}
              </button>
            </div>

            <div className="divider before:h-[1.6px] after:h-[1.6px]">OR</div>

            <div className='signup-instead'>
              Don't have an account?
              <span className='h-12 flex items-center'>
                <Link to="/signup" className='hover:underline text-blue-600'>
                  Sign Up
                </Link>
              </span>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Login