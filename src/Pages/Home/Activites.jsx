import React from 'react';
import eyecamp from '../../assets/Image/Eye Camp.jpeg'
import stucounciling from '../../assets/Image/Students Counseling Session for Highlights.jpeg'
import ias from '../../assets/Image/Sponsored Students for IAS.jpeg'
import meet from '../../assets/Image/Educational Meet.jpeg'
import { useNavigate } from 'react-router-dom';


const newsData = [
    {
        img: eyecamp,
        title: "Eye Camp",
        desc: "President of The Kalgidhar Trust honored Baba Iqbal Singh Ji for his social work. A moment of pride for all.",
        path: '/eye-camp'
    },
    {
        img: stucounciling,
        title: "Sponsored Student counceling sessions",
        desc: "Mechanical engineer from Akal Academy Kauriwara secures 34th position in UPSC 2020.",
        path: '/student-council'
    },
    {
        img: ias,
        title: "Sponsored Students for IAS",
        desc: "A global fight against drug abuse continues. A new book spreads awareness on this critical issue.",
        path: '/ias'
    },
    {
        img: meet,
        title: "Educational Meet",
        desc: "British Columbia recognizes the contribution of Sant Teja Singh Ji to humanity and education.",
        path: '/educational-meet'
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
