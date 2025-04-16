import React from 'react'

const Team = () => {
    return (
        <>
            <section className="lg:py-16 py-10 bg-gradient-to-b from-orange-50 to-white" id="team">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-center md:text-4xl text-3xl font-bold text-[#1A237E] mb-4">
                        Our <span className="text-gray-800">Team</span>
                    </h2>
                    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                        The Kalgidhar Trust/Society Board includes visionary leaders from across the world, united in their mission to empower communities through education, health, and social reform.
                    </p>

                    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {[
                            "Mr Surinderpal Singh Bright",
                            "Mr Jitender Singh Sethi",
                            "Mr Satnam Singh Kohli",
                            "Mr Pritam Sanmukh Singh",
                            "Mr Paramjit Singh Sachar",
                            "Mr Rajinder Singh Khurana",
                            "Mr Rachhpal Singh Kohli",
                            "Mr Harpreet Singh"
                        ].map((name, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 hover:shadow-2xl transition duration-300 border-t-4 border-orange-500"
                            >
                                {/* Avatar with gradient background or initials */}
                                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-tr from-orange-500 to-orange-600 text-white flex items-center justify-center text-2xl font-bold shadow-md">
                                    {name
                                        .split(" ")
                                        .filter(word => word.length > 2)
                                        .map(word => word[0])
                                        .slice(0, 2)
                                        .join("")}
                                </div>
                                <h3 className="text-lg font-semibold text-[#1A237E]">{name}</h3>
                                <p className="text-sm text-orange-500 mt-1">Board Member</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </>
    )
}

export default Team
