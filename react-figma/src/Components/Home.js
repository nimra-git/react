import React, { useRef, useState } from 'react'
import Logo from '../assets/Logo.png'
import bars from '../assets/barsIcon.png'
import verticalBtn from '../assets/verticalBtn.png'
import About from './About';
import Project from './Project';
import Footer from './Footer';

function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    const scrollToAbout = () => {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu after clicking on a link
        setMobileMenuOpen(false);
    };
    const scrollToProject = () => {
        projectRef.current.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu after clicking on a link
        setMobileMenuOpen(false);
    };
    const scrollToFooter = () => {
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu after clicking on a link
        setMobileMenuOpen(false);
    };
    return <>
        {/* Container */}
        <div className=' max-w-8xl'>
            {/* Navbar */}
            <nav>
                {/* Top Navbar */}
                <div className='mb-6 bg-gradient-to-r from-pink-400 from-20% to-custom-blue text-[#fff] py-2 text-center text-xs sm:text-sm'>We Are Hiring! <span className='underline'>Click Here To Apply.</span></div>
                {/* Main Navbar */}
                <div className='mx-auto max-w-7xl flex justify-between items-center w-full px-4'>
                    <div className='flex justify-between items-center w-full'>
                        {/* Logo */}
                        <div>
                            <img src={Logo} className=' w-40' />
                        </div>
                        {/* Main Navbar Center */}
                        <ul className='hidden md:inline-flex justify-between items-center w-96 font-medium text-lg text-gray-700'>
                            <button className='bg-gradient-to-r hover:from-pink-300 hover:from-30% hover:to-blue-300 hover:rounded-md hover:text-[#fff] px-2 py-1'>Home</button>
                            <button onClick={scrollToAbout} className='bg-gradient-to-r hover:from-pink-300 hover:from-30% hover:to-blue-300 hover:rounded-md hover:text-[#fff] px-2 py-1'>About Us</button>
                            <button onClick={scrollToProject} className='bg-gradient-to-r hover:from-pink-300 hover:from-30% hover:to-blue-300 hover:rounded-md hover:text-[#fff] px-2 py-1'>Projects</button>
                            <button className='bg-gradient-to-r hover:from-pink-300 hover:from-30% hover:to-blue-300 hover:rounded-md hover:text-[#fff] px-2 py-1'>Blogs</button>
                            <button className='bg-gradient-to-r hover:from-pink-300 hover:from-30% hover:to-blue-300 hover:rounded-md hover:text-[#fff] px-2 py-1'>Careers</button>
                        </ul>
                        {/* Main Navbar End */}
                        <div className='hidden md:flex'>
                            <button onClick={scrollToFooter} className='bg-gradient-to-r from-pink-400 from-30% to-custom-blue text-lg text-[#fff] w-28 py-1 rounded-md'>Contact Us</button>
                        </div>
                    </div>
                    {/* Mobile Navbar */}
                    <div className='flex md:hidden'>
                        <button onClick={toggleMobileMenu} className='border border-custom-blue p-1 border-y-custom-pink rounded '><img src={bars} className='w-8' /></button>
                    </div>
                </div>
                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className='mt-1 block md:hidden px-4 py-2 text-sm text-gray-700'>
                        <ul className='space-y-3 py-2 font-medium'>
                            <li>Home</li>
                            <hr className='border border-x-0 border-y-custom-blue'></hr>
                            <li onClick={scrollToAbout}>About Us</li>
                            <hr className='border border-x-0 border-y-custom-pink'></hr>
                            <li onClick={scrollToProject}>Projects</li>
                            <hr className='border border-x-0 border-y-custom-blue'></hr>
                            <li>Blogs</li>
                            <hr className='border border-x-0 border-y-custom-pink'></hr>
                            <li>Careers</li>
                            <hr className='border border-x-0 border-y-custom-blue'></hr>
                        </ul>
                        <button onClick={scrollToFooter} className='mt-2 bg-gradient-to-r from-pink-400 from-20% to-custom-blue text-lg text-[#fff] w-28 py-1 rounded-md'>Contact Us</button>
                    </div>
                )}
            </nav>
            {/* Main Content */}
            <div className='max-w-6xl mx-auto md:my-16 my-10 text-center w-full'>
                <p className='px-2 md:text-3xl sm:text-2xl text-base text-gray-700'>BlockChain: Bridging to the Future</p>
                <p className='w-full md:my-12 my-6 md:text-5xl sm:text-4xl text-2xl font-extrabold bg-gradient-to-r from-custom-pink from-30% to-custom-blue inline-block text-transparent bg-clip-text'>Safeguarding The Digital Landscape With Cutting-Edge Security.</p>
                    <div className='text-gray-600 md:text-lg sm:text-base text-xs px-4'>
                    <p>Lorem ipsum dolor sit amet consectetur. Donec sem tellus at dictum nibh.</p>
                    <p>Ridiculus nec tortor praesent pharetra. Sed venenatis venenatis blandit ut amet.</p>
                    <p>Nunc mauris egestas et sed feugiat lorem pharetra volutpat. At sed sed amet.</p>
                </div>
                <button className='sm:mt-12 mt-8 bg-gradient-to-r from-pink-400 from-30% to-custom-blue sm:text-lg text-base sm:px-0 px-1 text-[#fff] sm:w-40 w-36 py-1 rounded-md'>Request a project</button><br/>
                <button className='sm:mt-12 mt-8'><img src={verticalBtn} className='w-10'/></button>
            </div>
            <div ref={aboutRef}><About/></div>
            <div ref={projectRef}><Project/></div>  
            <div ref={contactRef}><Footer/></div>  
            
        </div>
    </>
}

export default Home