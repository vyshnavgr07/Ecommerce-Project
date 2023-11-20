import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Data } from '../App';

const Registration = () => {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(Data);
  const userNameRef = useRef(null);
  const emailIdRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const username = userNameRef.current.value;
    const emailId = emailIdRef.current.value;
    const password = passwordRef.current.value;

    if (!username || !emailId || !password) {
      setErrorMessage('Please fill out the form');
      return;
    }

    const isEmailValid = /\S+@\S+\.\S+/.test(emailId);
    if (!isEmailValid) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    if (userData.find((user) => user.userName === username)) {
      setErrorMessage('Username already exists. Please choose a different one.');
      return;
    }

    setErrorMessage('');
    const newUser = { userName: username, emailId: emailId, password: password,cart:[] };
    setUserData([...userData, newUser]);

    navigate('/login');
  };

  return (
    <div className='rounded shadow p-3 mb-5 bg-white' style={{ margin: 'auto', height: '55vh', width: '25rem', marginTop: '10%' }}>
      <form>
        <h1 className='mt-3' style={{ fontFamily: 'inherit' }}>
          SIGN UP
        </h1>
        <input ref={userNameRef} className='p-2 w-75 mt-3' style={{ height: '2.5rem', border: '1px solid gray', borderRadius: '.5rem' }} type='text' placeholder='UserName' />
        <br />
        <input ref={emailIdRef} className='p-2 w-75 mt-4' style={{ height: '2.5rem', border: '1px solid gray', borderRadius: '.5rem' }} type='email' placeholder='Email' />
        <br />
        <input ref={passwordRef}   type='password'     className='p-2 w-75 mt-4' style={{ height: '2.5rem', border: '1px solid gray', borderRadius: '.5rem' }}  placeholder='Password' />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button className='rounded mt-4 w-50 p-2' style={{ background: '#176BEF', border: '1px', color: 'white', fontWeight: '600' }} onClick={submit}>
          Sign up
        </button>
        <p className='mt-4'>
          Already have an account? <Link to='/login' style={{ textDecoration: 'none' }}>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Registration;
