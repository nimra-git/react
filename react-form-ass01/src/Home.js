import React from 'react'
import Header from './Header'

function Home() {
    return <>
        <Header/>
        <div className='text-center mt-52 text-indigo-400 font-bold'>
        <p className='text-4xl'>Welcome !</p>
        <p className='text-6xl'>Dashboard</p>
        </div>
    </>
}

export default Home