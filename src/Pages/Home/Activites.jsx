import React from 'react';
import Student from '../../assets/Image/activitycouncelling.jpeg'
import Gurpurab from '../../assets/Image/Gurupurab Celebration.jpg'
import Interaction from '../../assets/Image/Interaction With Industry Experts.jpeg'
import meet from '../../assets/Image/Educational Meet.jpeg'
import { useNavigate } from 'react-router-dom';


const newsData = [
    {
        img: Student,
        title: "Student Counseling Sessions",
        desc: "Guiding students to make informed academic and career choices with confidence.",
        path: '/activity-counciling'
    },
    {
        img: Gurpurab,
        title: "Gurpurab Celebrations",
        desc: "A spiritual and joyous occasion marked with prayers, kirtan, and community service. A moment of devotion and unity for all.",
        path: '/gurupurab-celebration'
    },
    {
        img: Interaction,
        title: "Interaction with Industry Experts",
        desc: "Providing students with real-world insights through engaging sessions with industry professionals—bridging the gap between academics and the workplace.",
        path: '/industry-intraction'
    },
    {
        img: meet,
        title: "Sponsored Student Activities",
        desc: "Encouraging talent and creativity through funded programs that support student participation in cultural, academic, and sports events.",
        path: '/student-activities'
    },
];

const Highlights = () => {
    const navigate = useNavigate();
    return (
        <section className="lg:py-16 py-10">
            <div className="container mx-auto px-5 xl:px-20 lg:px-10">
                <h2 className="md:text-4xl text-3xl font-bold text-center text-[#1A237E]  lg:mb-14 mb-5">
                    Activities
                </h2>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                    {newsData.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col bg-white col-span-1 p-5 rounded-xl border-t-4 border-[#e87e00] shadow-md hover:shadow-lg transition-shadow duration-300 group"
                        >
                            <div className="overflow-hidden rounded-lg mb-4">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-300 rounded-md"
                                />
                            </div>
                            <div className="flex-grow">
                                <h3 className="xl:text-xl text-lg font-semibold text-[#1A237E] mb-2">{item.title}</h3>
                                <p className="text-gray-700 text-sm mb-5">{item.desc}</p>
                            </div>
                            <button className="inline-block mt-auto py-2 border border-[#e87e00] text-[#e87e00] font-medium rounded-md hover:bg-[#e87e00] hover:text-white transition-all duration-300 cursor-pointer" onClick={() => navigate(item.path)}>
                                Read More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Highlights;
