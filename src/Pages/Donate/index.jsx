import React from 'react';
import india from '../../assets/Image/flag.png';
import { useNavigate } from 'react-router-dom';
const stats = [
    { value: '129', label: 'Schools' },
    { value: '2', label: 'Universities' },
    { value: '5', label: 'States' },
    { value: '33', label: 'Districts' },
    { value: '6450', label: 'Villages' },
    { value: '1.95M', label: 'Rural Population Impacted' },
];
const countries = [
    { name: 'India', image: india },

];
const Donate = () => {
    const navigate = useNavigate();
    return (
        <section className="lg:py-16 py-10">
            <div className="container mx-auto px-5 md:px-20">

                <h2 className="md:text-4xl text-3xl font-bold text-center  mb-4">
                    <span className='text-[#1A237E]'>Be a Part of </span> Transformation
                </h2>


                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center mt-10">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-white rounded-lg shadow-md py-6 px-4 hover:shadow-lg transition">
                            <h3 className="text-2xl font-bold text-[#1A237E]">{stat.value}</h3>
                            <p className="text-sm text-[#e87e00] mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>


                <div className="text-center mt-12 max-w-4xl mx-auto text-gray-700 text-md leading-relaxed">
                    <p className="mb-4">
                        Donate to The Kalgidhar Society – Baru Sahib supporting <span className="text-[#e87e00] font-semibold">Education, Healthcare, Social Welfare, Rehabilitation</span> and <span className="text-[#e87e00] font-semibold">Women Empowerment</span> for remote, rural and underprivileged people of India.
                    </p>
                    <p className="mb-4">
                        Make a secure, tax-deductible donation to The Kalgidhar Society, Baru Sahib.
                    </p>
                    <p>
                        For any information, contact our volunteers: <br />
                        <strong>Gurpartap Singh</strong> – +91 98713 12313, <strong>Simir Kaur</strong> – +91 97111 93846.
                    </p>
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 pt-10">
                        {countries.map((country, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 px-8 py-10"
                            >
                                <img
                                    src={country.image}
                                    alt={country.name}
                                    className="h-24 w-24 object-cover rounded-full border-4 border-orange-100 shadow-sm mb-4"
                                />
                                <h4 className="text-xl font-semibold text-[#1A237E] mb-3">
                                    {country.name}
                                </h4>
                                <button className="text-sm font-medium text-white bg-[#e87e00] hover:bg-[#cc6e00] px-5 py-2 rounded-full transition" onClick={() => navigate('/donation-form')}>
                                    Click to Donate
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Donate;
