import React from 'react'
import counciling from '../../assets/Image/activitycouncelling.jpeg'

const Studentcounsilingactivity = () => {
    return (
        <>
            <section className="lg:pb-16 pb-10">
                <div className="container mx-auto px-5 lg:px-20">
                    <h2 className="lg:text-4xl md:text-3xl text-xl font-bold text-center text-[#1A237E]  lg:mb-10 mb-5">
                        Student Counseling <span className='text-[#ff6900]'>Sessions</span>
                    </h2>
                    <div className="grid grid-cols-12 md:gap-8 gap-0 items-center py-10 px-5 xl:px-20 lg:px-10 bg-white">
                        <div className="col-span-12 md:col-span-5">
                            <div className="w-full overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                <img
                                    src={counciling}
                                    alt="Eye Camp"
                                    className="w-full md:h-[300px] h-auto object-cover transform hover:scale-105 transition duration-300"
                                />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-7">
                            <div className="w-full space-y-3">
                                <h2 className="md:text-2xl text-lg font-bold text-[#ff6900] md:pt-0 pt-4">
                                    Student Counseling Sessions
                                </h2>
                                <p className="text-justify xl:text-[18px] text-[15px] text-gray-700">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum excepturi earum ex soluta. Qui blanditiis dicta illo reprehenderit dolores corrupti ipsam, impedit nulla doloribus commodi fuga magni ex ad molestiae!
                                </p>
                                <p className="text-justify xl:text-[18px] text-[15px] text-gray-700">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad commodi quis aliquam aut sit pariatur eum facilis quidem adipisci aliquid amet laudantium voluptatem, iure libero culpa maxime ab iste excepturi!
                                    Laudantium dicta magnam quasi rerum minima optio nisi molestiae aperiam voluptatibus. Explicabo ut incidunt unde ex tempora ratione dignissimos at! Temporibus molestias nobis totam, officiis fugit voluptatum iure delectus beatae.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Studentcounsilingactivity
