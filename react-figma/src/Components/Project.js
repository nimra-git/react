import React from 'react'
import '../App.css'
import projectImg01 from '../assets/projectImg01.png'
import projectImg02 from '../assets/projectImg02.png'
import projectImg03 from '../assets/projectImg03.png'
import laptop from '../assets/laptop.png'
import responsive from '../assets/responsive-design.png'
import cloud from '../assets/cloud-data.png'

function Project() {
    return <>
        <div className='about-bg-texture text-white text-center px-4 '>
            <p className='sm:pt-16 pt-10 mb-5 sm:text-3xl text-2xl font-semibold'>Expert Help in One Top</p>
            <p className='max-w-2xl mx-auto text-gray-300 sm:text-lg lg:mb-16 mb-10'>Our diverse and dynamic team is the heart of our success. Compromising exceptional talents 
            from around the world, we unite under a common vision to drive innovation and excellence.</p>
            <div className='lg:flex mx-auto lg:justify-between lg:items-center lg:max-w-7xl lg:pb-16 pb-8'>
                <div className='lg:max-w-lg lg:w-96 lg:mx-4 mx-auto lg:mb-0 mb-10'>
                    <div className=' w-64 mx-auto '>
                        <img src={projectImg01} />
                    </div>
                    <p className='text-xl font-semibold'>Diverse</p>
                    <p className='max-w-xs mx-auto text-sm mt-3 text-gray-400'>Gaining insights into the comprehensive product vision, objectives and project timelines.</p>
                </div>
                <div className='lg:max-w-lg lg:w-96 lg:mx-4 mx-auto lg:mb-0 mb-10'>
                    <div className='w-56 mx-auto '>
                        <img src={projectImg02} />
                    </div>
                    <p className='text-xl font-semibold'>Experts</p>
                    <p className='max-w-xs mx-auto text-sm mt-3 text-gray-400'>Gaining insights into the comprehensive product vision, objectives and project timelines.</p>
                </div>
                <div className='lg:max-w-lg lg:w-96 lg:mx-4 mx-auto lg:mb-0 mb-10'>
                    <div className='w-56 mx-auto '>
                        <img src={projectImg03} />
                    </div>
                    <p className='text-xl font-semibold mt-2'>Certified</p>
                    <p className='max-w-xs mx-auto text-sm mt-3 text-gray-400'>Gaining insights into the comprehensive product vision, objectives and project timelines.</p>
                </div>
            </div>
        </div>
        {/* Specialize */}
        <div className='max-w-6xl mx-auto sm:my-20 my-10 text-center px-2'>
            <p className='mb-10 bg-gradient-to-r from-custom-pink from-30% to-custom-blue inline-block text-transparent bg-clip-text text-4xl font-semibold'>What We Specialize In?</p>
            <div className="grid grid-cols-3 gap-4 text-left lg:px-0 px-4">
                <div className='bg-custom-gray rounded-3xl lg:p-8 md:p-4 p-8 space-y-4 md:col-span-1 col-span-3'>
                    <img src={laptop} className='w-10'/>
                    <p className='text-xl font-semibold'>Blockchain Development Services</p>
                    <p className='lg:text-sm text-xs text-gray-700'>Our team compromises seasoned experts who stand at the vanguard of Blockchain research and
                    development, ceaselessly pushing the boundaries of what's achievable. Their unwavering commitment to
                    innovation drives us to explore the cutting edge of this transformative tachnology, seeking novel solutions
                    and pioneering advancements. With a wealth of knowledge and practical experience, our experts consistently
                    challenge the status quo, envisioning and implementing groundbreaking ideas that not only shape the present 
                    but also ley the foundation for a more secure and interconnected digital future. This relentless pursuit of 
                    excellence ensures that we remain leaders in the ever-evolving landscape of BlockChain technology.</p>
                </div>
                <div className='bg-custom-gray rounded-3xl lg:p-8 md:p-4 p-8 space-y-4 md:col-span-1 col-span-3'>
                    <img src={responsive} className='w-10'/>
                    <p className='text-xl font-semibold'>Web and App Design Services</p>
                    <p className='lg:text-sm text-xs text-gray-700'>Our team compromises seasoned experts who stand at the vanguard of Blockchain research and
                    development, ceaselessly pushing the boundaries of what's achievable. Their unwavering commitment to
                    innovation drives us to explore the cutting edge of this transformative tachnology, seeking novel solutions
                    and pioneering advancements. With a wealth of knowledge and practical experience, our experts consistently
                    challenge the status quo, envisioning and implementing groundbreaking ideas that not only shape the present 
                    but also ley the foundation for a more secure and interconnected digital future. This relentless pursuit of 
                    excellence ensures that we remain leaders in the ever-evolving landscape of BlockChain technology.</p>
                </div>
                <div className='bg-custom-gray rounded-3xl lg:p-8 md:p-4 p-8 space-y-4 md:col-span-1 col-span-3'>
                    <img src={cloud} className='w-10'/>
                    <p className='text-xl font-semibold'>Data Science Services</p>
                    <p className='lg:text-sm text-xs text-gray-700'>Our team compromises seasoned experts who stand at the vanguard of Blockchain research and
                    development, ceaselessly pushing the boundaries of what's achievable. Their unwavering commitment to
                    innovation drives us to explore the cutting edge of this transformative tachnology, seeking novel solutions
                    and pioneering advancements. With a wealth of knowledge and practical experience, our experts consistently
                    challenge the status quo, envisioning and implementing groundbreaking ideas that not only shape the present 
                    but also ley the foundation for a more secure and interconnected digital future. This relentless pursuit of 
                    excellence ensures that we remain leaders in the ever-evolving landscape of BlockChain technology.</p>
                </div>
            </div>
        </div>
    </>
}

export default Project