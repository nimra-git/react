import React from 'react'
import aboutImg01 from '../assets/aboutImg-01.png'
import aboutImg02 from '../assets/aboutImg-02.png'
import aboutImg03 from '../assets/aboutImg-03.png'
import '../App.css'
import blockchain from '../assets/blockchain (1).png'
import ransomware from '../assets/ransomware.png'
import cpu from '../assets/cpu.png'
import success from '../assets/success.png'
import planet from '../assets/planet-earth.png'

function About() {
    return <>
        <div className='about-bg-texture text-white text-center px-4 '>
            <p className='sm:pt-16 pt-10 mb-5 sm:text-3xl text-2xl font-semibold'>Collaboration Made Easy</p>
            <p className='max-w-2xl mx-auto text-gray-300 sm:text-lg lg:mb-16 mb-10'>We've developed a straightforward yet robust framework to help determine if partnering with [your company name] aligns with your product's goals.</p>
            <div className='lg:flex mx-auto lg:justify-between lg:items-center lg:max-w-7xl lg:pb-16 pb-8'>
                <div className='lg:max-w-lg lg:w-96 lg:mx-4 mx-auto lg:mb-0 mb-10'>
                    <div className='w-44 mx-auto '>
                        <img src={aboutImg01} />
                    </div>
                    <p className='text-xl font-semibold'>Discovery Meeting (30 Mins)</p>
                    <p className='max-w-xs mx-auto text-sm mt-3 lg:px-5 text-gray-400'>Gaining insights into the comprehensive product vision, objectives and project timelines.</p>
                </div>
                <div className='lg:max-w-lg lg:w-96 lg:mx-4 mx-auto lg:mb-0 mb-10'>
                    <div className='w-64 mx-auto '>
                        <img src={aboutImg02} />
                    </div>
                    <p className='text-xl font-semibold mt-3'>Road Mapping and Planning (1 Week)</p>
                    <p className='max-w-xs mx-auto text-sm mt-3 text-gray-400'>Conducting a technical assessment to determine feasibility in achieving your objectives and resource needs.</p>
                </div>
                <div className='lg:max-w-lg lg:w-96 lg:mx-4 mx-auto lg:mb-0 mb-10'>
                    <div className='w-64 mx-auto '>
                        <img src={aboutImg03} />
                    </div>
                    <p className='text-xl font-semibold mt-3'>Sprints (Ongoing)</p>
                    <p className='max-w-xs mx-auto text-sm mt-3 text-gray-400'>Conducting a technical assessment to determine feasibility in achieving your objectives and resource needs.</p>
                </div>
            </div>
        </div>
        {/* Why Choose Us */}
        <div className='max-w-6xl mx-auto sm:my-20 my-10 text-center px-2'>
            <p className='mb-10 bg-gradient-to-r from-custom-pink from-30% to-custom-blue inline-block text-transparent bg-clip-text text-4xl font-semibold'>Why Choose Us?</p>
            <div className="grid grid-cols-3 gap-4 text-left lg:px-0 px-4">
                <div className='bg-custom-gray rounded-3xl p-10 space-y-4 lg:col-span-1 col-span-3'>
                    <img src={blockchain} className='w-10'/>
                    <p className='text-xl font-semibold'>Pioneering Blockchain Solutions</p>
                    <p className='sm:text-sm text-xs text-gray-700'>Our team compromises seasoned experts who stand at the vanguard of Blockchain research and
                    development, ceaselessly pushing the boundaries of what's achievable. Their unwavering commitment to
                    innovation drives us to explore the cutting edge of this transformative tachnology, seeking novel solutions
                    and pioneering advancements. With a wealth of knowledge and practical experience, our experts consistently
                    challenge the status quo, envisioning and implementing groundbreaking ideas that not only shape the present 
                    but also ley the foundation for a more secure and interconnected digital future. This relentless pursuit of 
                    excellence ensures that we remain leaders in the ever-evolving landscape of BlockChain technology.</p>
                </div>
                <div className='lg:col-span-2 col-span-3'>
                    <div className='grid grid-cols-5 gap-4'>
                        <div className='bg-custom-gray md:col-span-3 col-span-5 rounded-3xl p-10 space-y-4'>
                            <img src={ransomware} className='w-10'/>
                            <p className='text-xl font-semibold'>Unmatched Security</p>
                            <p className='text-sm text-gray-700'>We prioritize the safety of your digital assets with cutting-edge security protocols,
                            ensuring your peace of mind in this ever-evolving digital landscape.</p>
                        </div>
                        <div className='bg-custom-gray md:col-span-2 col-span-5 rounded-3xl p-8 space-y-4'>
                            <img src={cpu} className='w-10'/>
                            <p className='text-xl font-semibold'>Future-Proof Technology</p>
                            <p className='text-sm text-gray-700'>Our commitment to staying ahead of the curve guarantees that our solutions are equipped 
                            to adapt and thrive in the rapidly changing technological landscape.</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-5 gap-3 space-y-4'>
                        <div className='bg-custom-gray md:col-span-3 col-span-5 mt-4 rounded-3xl p-10 space-y-4'>
                            <img src={success} className='w-10'/>
                            <p className='text-xl font-semibold'>Tailored for Success</p>
                            <p className='text-sm text-gray-700'>Every solution we craft is meticulously customized to meet your specific needs, ensuring seamless 
                            integration and optimal performance.</p>
                        </div>
                        <div className='bg-custom-gray md:col-span-2 col-span-5 rounded-3xl p-8 space-y-4'>
                            <img src={planet} className='w-10'/>
                            <p className='text-xl font-semibold'>Global Reach</p>
                            <p className='text-sm text-gray-700'>We serve clients worldwide, yet maintain a personalized approach that nurtures strong, lasting partnerships.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default About