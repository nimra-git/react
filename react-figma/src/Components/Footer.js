import React from 'react'
import vector from '../assets/Vector.png'
import vector01 from '../assets/Vector (1).png'
import vector02 from '../assets/Vector (2).png'
import vector03 from '../assets/Vector (3).png'

function Footer() {
    return <>
        <div className='about-bg-texture text-white text-center px-4 '>
            <p className='sm:pt-20 pt-10 sm:pb-7 mb-5 sm:text-5xl text-2xl font-bold'>Let's Work Together!</p>
            <p className='max-w-2xl mx-auto text-gray-300 sm:text-base text-sm lg:mb-10 mb-8'>Take the first step towards a
                transformative future by partnering with us today. Explore a cutting-edge solutions in BlockChain, Data
                Engineering, and AI, and experience the power of innovation and seamless connectivity. Contact us now for a
                personalized consultation, and together, let's build a brighter tomorrow. Your success awaits!</p>
            <button className='bg-gradient-to-r from-pink-400 from-30% to-custom-blue text-base px-1 text-[#fff] sm:w-44 w-40 py-1 rounded-md'>Schedule a Meeting</button>
            <div className='grid grid-cols-2 lg:gap-4 gap-0 lg:max-w-7xl mx-auto lg:pt-32 pt-10 text-left px-2 pb-10'>
                <div className='lg:ps-8 md:col-span-1 col-span-2'>
                    <p className='ps-6 font-medium md:mb-7 mb-3'>Logo Goes Here</p>
                    <p className=' md:w-11/12 w-full md:mb-0 mb-10 text-xs text-gray-300'>We specialize in harnessing the transformative potential of cutting-edge technologies,
                        with a primary focus on BlockChain, Data Engineering, and Artifcial Intelligence. Our mission
                        is to pave the way for a more innovative and interconnected world, where businesses and individuals
                        thrive through secure and seamless technology solutions. Through our comprehensive range of services
                        and expertise, we are committed to delivering tangible value and empowering our clients to embrace the
                        future with confidence.</p>
                </div>
                <div className='md:col-span-1 col-span-2 grid grid-cols-7 gap-4'>
                    <div className='sm:col-span-2 col-span-3 space-y-2'>
                        <p className='font-medium'>Company Name</p>
                        <p className='text-xs text-gray-300'>Home</p>
                        <p className='text-xs text-gray-300'>About Us</p>
                        <p className='text-xs text-gray-300'>Projects</p>
                        <p className='text-xs text-gray-300'>Blog</p>
                        <p className='text-xs text-gray-300'>Career</p>
                        <p className='text-xs text-gray-300'>Contact Us</p>
                    </div>
                    <div className='sm:col-span-2 col-span-4 space-y-2'>
                        <p className='font-medium'>Our Head Office</p>
                        <p className='text-xs text-gray-300'>Lorum ipsum dolor sit amet consectetur.</p>
                        <p className='font-medium'>Our Hotline</p>
                        <p className='text-xs text-gray-300 underline'>+94 123 456 7890</p>
                        <p className='font-medium'>Mail us</p>
                        <p className='text-xs text-gray-300 underline'>Yourname@mail.com</p>
                    </div>
                    <div className='sm:col-span-3 col-span-7 lg:pe-8 space-y-4 sm:mt-0 mt-10'>
                        <p className='font-medium'>Subscribe to our newsletter!</p>
                        <button className='border border-white rounded-md p-3 w-full text-left text-sm text-gray-400'>Your Email</button>
                        <button className='bg-gradient-to-r from-pink-400 from-30% to-custom-blue text-base px-1 text-[#fff] w-full p-2 rounded-md'>Subscribe Now</button>
                    </div>
                </div>
            </div>
            <div className='pt-5 max-w-7xl w-full flex justify-between items-center mx-auto pb-3'>
                <p className='text-xs lg:ps-14'>&copy; 2023, All Rights Reserved</p>
                <div className='lg:pe-6 flex justify-between items-center sm:w-36 w-24'>
                    <img src={vector} className='w-4'/>
                    <img src={vector01} className='w-4'/>
                    <img src={vector02} className='w-4'/>
                    <img src={vector03} className='w-2'/>
                </div>
            </div>
        </div>
    </>
}

export default Footer