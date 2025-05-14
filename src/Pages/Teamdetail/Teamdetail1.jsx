import React from 'react';
import { useLocation } from 'react-router-dom';

const Teamdetail1 = () => {
    const { state } = useLocation(); 

    if (!state) {
        return <div>No team member data available</div>;
    }

    const { name, role, image } = state; 

    return (
        <section className="lg:pb-16 pb-10 pt-5">
            <div className="container mx-auto px-5 xl:px-20 lg:px-10">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 items-center">
                    {/* Image Section */}
                    <div className="col-span-1">
                        <div className="w-full mb-6 lg:mb-0">
                            <img
                                src={image}
                                alt={name}
                                className="w-full lg:h-[400px] h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
                            />
                        </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="col-span-1">
                        <div className="w-full">
                            <h2 className="md:text-3xl text-2xl font-semibold text-[#1A237E] lg:mb-4 mb-2">{name}</h2>
                            <p className="text-xl text-[#ff6900] lg:mb-4 mb-2">{role}</p>
                            
                            <p className="text-base text-gray-700 text-justify mb-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dignissimos in debitis molestias iusto. Dolor, at sequi non quis commodi corrupti sed numquam perspiciatis reprehenderit voluptates maiores reiciendis, asperiores deserunt.
                            </p>
                            <p className="text-base text-gray-700 text-justify">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dignissimos in debitis molestias iusto. Dolor, at sequi non quis commodi corrupti sed numquam perspiciatis reprehenderit voluptates maiores reiciendis, asperiores deserunt.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Teamdetail1;
