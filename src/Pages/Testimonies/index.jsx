import React from 'react'

const Testimonies = () => {
    return (
        <>
            <section className="p-8 ">
                <div className="container mx-auto px-5 md:px-20">
                    <h2 className="md:text-4xl text-3xl font-extrabold text-center text-[#1A237E] mb-3">Testimonies</h2>
                    <p className="text-center text-lg text-[#e87e00] lg:mb-12 mb-5">Real stories from our community</p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((_, i) => (
                            <div
                                key={i}
                                className="relative backdrop-blur-md bg-white/70 border border-[#f0f0f0] rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-8 pt-12"
                            >
                                <span className="absolute top-6 left-6 text-5xl text-[#e87e00] font-serif opacity-20">“</span>

                                <p className="text-gray-700 text-[15px] leading-relaxed italic z-10 relative">
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet sapien a libero aliquet accumsan."
                                </p>

                                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-gray-200">
                                    <img
                                        src={`https://i.pravatar.cc/100?img=${i + 5}`}
                                        alt="avatar"
                                        className="w-14 h-14 rounded-full border-2 border-[#1A237E] shadow-sm"
                                    />
                                    <div>
                                        <h4 className="text-[#1A237E] font-bold">User</h4>
                                        <span className="text-sm text-[#e87e00]">Profession</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



        </>
    )
}

export default Testimonies
