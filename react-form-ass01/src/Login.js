import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [attempts, setAttempts] = useState(0);
    const data = useSelector((state) => state.userReducer.data);
    //console.log('login data', data)
    const navigate = useNavigate();

    const [error, setError] = useState(false);
    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div style={{ display: error ? 'block' : 'none', }} className=' bg-red-500 text-white p-2 rounded w-full'>
                Email & Password must be valid.
            </div>
        );
    };

    const handleLogin = (e) => {
        e.preventDefault();
    
        let isValid = false;
    
        data.forEach((user) => {
            if (user.email === email && user.password === password) {
                isValid = true;
            }
        });
    
        if (isValid) {
            setError(false);
            toast.success('Login successful!');
            navigate('/home');
            setAttempts(0)
        } else {
            setError(true);
            setAttempts((prevAttempts) => prevAttempts + 1);
        }
    
        if (attempts === 3) { // Check if attempts is equal to 3 (since it starts from 0)
            toast.error('You have exceeded the maximum number of login attempts.');
        }

        console.log('attempts',attempts)
    
    };
    return <>
        <div className='flex justify-center items-center h-screen bg-slate-100'>
            <div className='w-1/3 p-6 shadow-md bg-white rounded-md'>
                <h1 className='text-center text-4xl font-semibold mb-5'>Login</h1>
                <form onSubmit={handleLogin}>
                    {errorMessage()}
                    <div className='mb-4'>
                        <label className='block mb-2 font-semibold'>Email</label>
                        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} className='border w-full rounded px-1 py-2 bg-slate-100 focus:outline-none focus:ring-0 focus:border-gray-400' placeholder='Enter email...' />
                    </div>
                    <div className=' mb-4'>
                        <label className='block mb-2 font-semibold'>Password</label>
                        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='border w-full rounded px-1 py-2 bg-slate-100 focus:outline-none focus:ring-0 focus:border-gray-400' placeholder='Enter password...' />
                    </div>
                    <div className='mb-4 flex justify-between items-center'>
                        <div>
                            <input type='checkbox' />
                            <label className='mx-1'>Remember Me</label>
                        </div>
                        <div>
                            <a href='#' className='font-semibold'>Forgot Password?</a>
                        </div>
                    </div>
                    <div className=' mt-6'>
                        <button type='submit' className=' bg-indigo-400 p-2 w-full rounded text-white font-semibold text-lg hover:bg-indigo-500' disabled={attempts === 4}>Login</button>
                    </div>
                </form>
                <p className='mt-2 text-center text-sm'>Don't have an Account? <NavLink to='/signup' className='font-semibold underline'>SignUp Now</NavLink></p>
            </div>
        </div>
    </>
}

export default Login