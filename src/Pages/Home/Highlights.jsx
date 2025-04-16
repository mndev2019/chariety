import React from 'react';
import img1 from '../../assets/Image/highlights.jpg';


const newsData = [
    {
        img: img1,
        title: "Baba Iqbal Singh ji conferred Padma Shri",
        desc: "President of The Kalgidhar Trust honored Baba Iqbal Singh Ji for his social work. A moment of pride for all.",
    },
    {
        img: img1,
        title: "Simrandeep Singh ranks 34th in UPSC",
        desc: "Mechanical engineer from Akal Academy Kauriwara secures 34th position in UPSC 2020.",
    },
    {
        img: img1,
        title: "Book on Drug-Addiction Launched",
        desc: "A global fight against drug abuse continues. A new book spreads awareness on this critical issue.",
    },
    {
        img: img1,
        title: "Canada Declares July 1 as ‘Sant Teja Singh Day’",
        desc: "British Columbia recognizes the contribution of Sant Teja Singh Ji to humanity and education.",
    },
];

const Highlights = () => {
    return (
        <section className="lg:py-16 py-10 ">
            <div className="container mx-auto px-5 lg:px-20">
                <h2 className="md:text-4xl text-3xl font-bold text-center  lg:mb-14 mb-5">
                   <span className='text-[#1A237E]'> Highlights </span> of Impact
                </h2>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                    {newsData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white col-span-1 p-5 rounded-xl border-t-4 border-[#e87e00] shadow-md hover:shadow-lg transition-shadow duration-300 group"
                        >
                            <div className="overflow-hidden rounded-lg mb-4">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-56  object-cover transform group-hover:scale-105 transition duration-300 rounded-md"
                                />
                            </div>

                            <h3 className="text-xl font-semibold text-[#1A237E] mb-2">{item.title}</h3>
                            <p className="text-gray-700 text-sm mb-5">{item.desc}</p>

                            <button className="inline-block mt-auto px-4 py-2 border border-[#e87e00] text-[#e87e00] font-medium rounded-md hover:bg-[#e87e00] hover:text-white transition-all duration-300">
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
