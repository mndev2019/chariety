import React from 'react';
import { useNavigate } from 'react-router-dom';
import team from '../../assets/Image/team.jpg'

const Team = () => {
    const navigate = useNavigate();

    const teamMembers = [
        {
            name: "Mr Surinderpal Singh Bright",
            role: "Board Member",
            image: team,
        },

        { name: "Mr Jitender Singh Sethi", role: "Board Member", image: team, },
        { name: "Mr Satnam Singh Kohli", role: "Board Member", image: team, },
        { name: "Mr Pritam Sanmukh Singh", role: "Board Member", image: team, },
        { name: "Mr Paramjit Singh Sachar", role: "Board Member", image: team, },
        { name: "Mr Rajinder Singh Khurana", role: "Board Member", image: team, },
        { name: "Mr Rachhpal Singh Kohli", role: "Board Member", image: team, },
        { name: "Mr Harpreet Singh", role: "Board Member", image: team, },
    ];

    const handleClick = (member) => {
        navigate('/team-detail', { state: member }); 
    };

    return (
        <section className="lg:py-16 py-10" id="team">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-center md:text-4xl text-3xl font-bold text-[#1A237E] mb-4">
                    Our <span className="text-[#ff6900]">Team</span>
                </h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                    The Kalgidhar Trust/Society Board includes visionary leaders from across the world, united in their mission to empower communities through education, health, and social reform.
                </p>

                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 hover:shadow-2xl transition duration-300 border-t-4 border-orange-500"
                            onClick={() => handleClick(member)} 
                        >
                            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-tr from-orange-500 to-orange-600 text-white flex items-center justify-center text-2xl font-bold shadow-md">
                                {member.name.split(" ").filter(word => word.length > 2).map(word => word[0]).slice(0, 2).join("")}
                            </div>
                            <h3 className="text-lg font-semibold text-[#1A237E]">{member.name}</h3>
                            <p className="text-sm text-orange-500 mt-1">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
