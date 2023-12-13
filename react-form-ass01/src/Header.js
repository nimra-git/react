import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return <>
    <nav className='bg-slate-100'>
      <div className='px-12 mx-auto'>
        <div className='flex justify-between py-3'>
          <div className='flex items-center space-x-10 text-indigo-400'>
            {/* Logo */}
            <div className='text-4xl font-bold'>Welcome</div>
            {/* Primary Nav */}
            <div className='flex space-x-4 font-medium'>
              <NavLink to='/home' className='px-2 py-1 rounded hover:bg-indigo-400 hover:text-white'>Home</NavLink>
              <NavLink className='px-2 py-1 rounded hover:bg-indigo-400 hover:text-white'>About</NavLink>
              <NavLink className='px-2 py-1 rounded hover:bg-indigo-400 hover:text-white'>Profile</NavLink>
              <NavLink className='px-2 py-1 rounded hover:bg-indigo-400 hover:text-white'>Contact</NavLink>
            </div>
          </div>
          {/* Secondary Nav */}
          <div className='flex items-center space-x-5 text-indigo-400'>
            <p className=' font-medium'>Username</p>
            <NavLink to='/' className='bg-indigo-400 px-2 py-1 text-white rounded hover:bg-indigo-500'>Logout</NavLink>
          </div>
        </div>
      </div>
    </nav>
  </>
}

export default Header