import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addData } from './Actions/action';

function Register() {
    // State variables to store input values and form data
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
    });
    
    const validate = () => {
        // Validate each field
        let isValid = true;
        const newErrors = {
            name: '',
            email: '',
            password: '',
            address: '',
        };

        if (!name) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        if (!email) {
            newErrors.email = 'Email is required';
            isValid = false;
        }

        if (!password) {
            newErrors.password = 'Password is required';
            isValid = false;
        }else if(password.length < 8){
            newErrors.password = 'Password must be 8 Characters long!';
            isValid = false;
        }

        if (!address) {
            newErrors.address = 'Address is required';
            isValid = false;
        }

        // Update errors state
        setErrors(newErrors);

        return isValid;
    }

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!validate()){
            return;
        }
        // Create an object with the input values
        const formData = { name, email, password, address };

        // Add a new record // Sending data to action function addData
        dispatch(addData(formData));

        // Clear the form fields
        setName('');
        setEmail('');
        setPassword('');
        setAddress('');

        navigate('/');
    };

    return <>
        <div className='flex justify-center items-center h-screen bg-slate-100'>
            <div className=' w-1/3 p-6 shadow-md bg-white rounded-md'>
                <h1 className='text-center text-4xl font-semibold mb-5'>SignUp</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label className='block mb-2 font-semibold'>Name</label>
                        <input type='text' value={name} onChange={(e) => setName(e.target.value)} className=' border w-full rounded px-1 py-2 bg-slate-100 focus:outline-none focus:ring-0 focus:border-gray-400' placeholder='Enter name...' />
                        {errors.name && <p className='text-red-500 text-sm font-medium'>*{errors.name}</p>}
                    </div>
                    <div className='mb-4'>
                        <label className='block mb-2 font-semibold'>Email</label>
                        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} className=' border w-full rounded px-1 py-2 bg-slate-100 focus:outline-none focus:ring-0 focus:border-gray-400' placeholder='Enter email...' />
                        {errors.email && <p className='text-red-500 text-sm font-medium'>*{errors.email}</p>}
                    </div>
                    <div className=' mb-4'>
                        <label className='block mb-2 font-semibold'>Password</label>
                        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className=' border w-full rounded px-1 py-2 bg-slate-100 focus:outline-none focus:ring-0 focus:border-gray-400' placeholder='Enter password...' />
                        {errors.password && <p className='text-red-500 text-sm font-medium'>*{errors.password}</p>}
                    </div>
                    <div className='mb-4'>
                        <label className='block mb-2 font-semibold'>Address</label>
                        <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} className=' border w-full rounded px-1 py-2 bg-slate-100 focus:outline-none focus:ring-0 focus:border-gray-400' placeholder='Enter address...' />
                        {errors.address && <p className='text-red-500 text-sm font-medium'>*{errors.address}</p>}
                    </div>
                    <button type='submit' className='bg-indigo-400 p-2 w-full rounded text-white font-semibold text-lg hover:bg-indigo-500'>Register</button>

                </form>
                <p className='mt-2 text-center text-sm'>Already have an Account? <NavLink to='/' className='font-semibold underline'>Login Now</NavLink></p>
            </div>
        </div>
    </>
}

export default Register