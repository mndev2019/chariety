import React from 'react'
import { useNavigate } from 'react-router-dom'

const Programs = () => {
    const navigate = useNavigate();
    return (
        <>
            <section className="lg:py-16 py-10  text-[#1A237E]">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="md:text-4xl text-3xl font-bold text-center mb-4">
                        Our <span className="text-orange-500">Programs</span>
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Below are the Programs with their approximate weightage and scope of impact.
                    </p>

                    {/* Percentage Circles */}
                    <div className="flex flex-wrap justify-center gap-8 mb-12">
                        {[
                            { label: "Education", percent: "75%" },
                            { label: "Health", percent: "20%" },
                            { label: "Other", percent: "5%" },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="w-32 h-32 flex flex-col items-center justify-center rounded-full border-[6px] border-orange-500 text-center shadow-lg"
                            >
                                <span className="text-2xl font-bold text-[#1A237E]">{item.percent}</span>
                                <span className="text-sm font-medium text-gray-700">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Detailed Program Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
                        {/* Education */}
                        <div className="bg-orange-100 rounded-xl p-6 shadow-md flex flex-col">
                            <h3 className="text-lg font-semibold mb-3 text-[#1A237E]">1. Education for Playschool to 12 Std</h3>
                            <div className='flex-grow'>
                                <ul className="list-disc ml-5 text-gray-800 space-y-2">
                                    <li>Support Free Education till XII</li>
                                </ul>
                            </div>
                            <div className='mt-4'>
                                <button className='bg-[#e87e00] text-white rounded-md px-6 py-2' onClick={() => navigate('/donate')}>Donate Now</button>
                            </div>
                        </div>
                        {/* higher education */}
                        <div className="bg-orange-100 rounded-xl p-6 shadow-md flex flex-col">
                            <h3 className="text-lg font-semibold mb-3 text-[#1A237E]">2. Support for Higher Education</h3>
                            <div className='flex-grow'>
                                <ul className="list-disc ml-5 text-gray-800 space-y-2">
                                    <li>Free Education for B.Com/BBA/BA/BSc/LLB/Nursing/BTech</li>
                                    <li>Loans for Higher Education for Engineering and other courses</li>
                                </ul>
                            </div>

                            <div className='mt-4'>
                                <button className='bg-[#e87e00] text-white rounded-md px-6 py-2' onClick={() => navigate('/donate')}>Donate Now</button>
                            </div>
                        </div>
                        {/*Competitive Exams */}
                        <div className="bg-orange-100 rounded-xl p-6 shadow-md flex flex-col">
                            <h3 className="text-lg font-semibold mb-3 text-[#1A237E]">3. Coaching for Competitive Exams</h3>
                            <div className='flex-grow'>
                                <ul className="list-disc ml-5 text-gray-800 space-y-2">
                                    <li>Support for Coaching classes for IAS , Banking , CA and Armed Forces Examination
                                        preparations</li>
                                    <li>Collaborate with other similar Societies to pool money / Education agenda</li>
                                </ul>
                            </div>

                            <div className='mt-4'>
                                <button className='bg-[#e87e00] text-white rounded-md px-6 py-2' onClick={() => navigate('/donate')}>Donate Now</button>
                            </div>
                        </div>
                        {/* skill development */}
                        <div className="bg-orange-100 rounded-xl p-6 shadow-md flex flex-col">
                            <h3 className="text-lg font-semibold mb-3 text-[#1A237E]">4. Skill Development</h3>
                            <div className='flex-grow'>
                                <ul className="list-disc ml-5 text-gray-800 space-y-2">
                                    <li>Support for students to sign up for courses to enable their skillful employment, like
                                        Design courses , Carpentry , Electrician , Plumbing, etc courses.</li>

                                </ul>
                            </div>

                            <div className='mt-4'>
                                <button className='bg-[#e87e00] text-white rounded-md px-6 py-2' onClick={() => navigate('/donate')}>Donate Now</button>
                            </div>
                        </div>
                        {/* health */}
                        <div className="bg-orange-100 rounded-xl p-6 shadow-md flex flex-col">
                            <h3 className="text-lg font-semibold mb-3 text-[#1A237E]">5. Health</h3>
                            <div className='flex-grow'>
                                <ul className="list-disc ml-5 text-gray-800 space-y-2">
                                    <li>Organise Health Camps (e.g.: Eyecare Camp , Health Check-up Camps etc) Here
                                        we provide money for specs and minor eye operations on subsidised cost</li>
                                    <li>On case-to-case basis we may provide financial assistance for healthcare to
                                        parents of students sponsored by our projects</li>
                                </ul>
                            </div>

                            <div className='mt-4'>
                                <button className='bg-[#e87e00] text-white rounded-md px-6 py-2' onClick={() => navigate('/donate')}>Donate Now</button>
                            </div>

                        </div>
                        {/* Others */}
                        <div className="bg-orange-100 rounded-xl p-6 shadow-md flex flex-col">
                            <h3 className="text-lg font-semibold mb-3 text-[#1A237E]">6. Other Welfare</h3>
                            <div className='flex-grow'>
                                <ul className="list-disc ml-5 text-gray-800 space-y-2">
                                    <li>Empowerment of women by providing skilled courses so that these women can earn to
                                        support their families</li>
                                    <li>On case-to-case basis we may support to provide ration to needy families for a short
                                        period of time in crisis (e.g.: COVID-19 , Floods , etc)</li>
                                </ul>
                            </div>

                            <div className='mt-4'>
                                <button className='bg-[#e87e00] text-white rounded-md px-6 py-2' onClick={() => navigate('/donate')}>Donate Now</button>
                            </div>

                        </div>
                        {/* <div className="bg-[#1A237E] text-white rounded-xl p-6 shadow-md">
                            <h3 className="text-lg font-semibold mb-3 text-orange-400">1. Education</h3>
                            <ul className="list-disc ml-5 space-y-2">
                                <li>Support Free Education till XII</li>
                                <li>Free Education for B.Com/BBA/BA</li>
                                <li>Loans for Higher Education for Engineering and other courses</li>
                                <li>Support for Coaching classes for IAS , Banking , CA and Armed Forces Examination
                                    preparations</li>
                                <li>Collaborate with other similar Societies to pool money / Education agenda</li>
                                <li>Financial assistance to teachers who teach in schools who support underprivileged
                                    students</li>
                            </ul>
                            <div className='mt-4'>
                                <button className='bg-[#e87e00] text-white rounded-md px-6 py-2' onClick={() => navigate('/donate')}>Donate Now</button>
                            </div>
                        </div> */}

                        {/* Health */}
                        {/* <div className="bg-white border border-orange-400 rounded-xl p-6 shadow-md">
                            <h3 className="text-lg font-semibold mb-3 text-orange-500">2. Health</h3>
                            <ul className="list-disc ml-5 text-gray-800 space-y-2">
                                <li>Organise Health Camps (e.g.: Eyecare Camp , Health Check-up Camps etc) Here
                                    we provide money for specs and minor eye operations on subsidised cost</li>
                                <li>On case-to-case basis we may provide financial assistance for healthcare to
                                    parents of students sponsored by our projects</li>

                            </ul>
                            <div className='mt-4'>
                                <button className='bg-[#e87e00] text-white rounded-md px-6 py-2' onClick={() => navigate('/donate')}>Donate Now</button>
                            </div>
                        </div> */}


                    </div>
                </div>
            </section>
        </>
    )
}

export default Programs
