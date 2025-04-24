import React, { useState } from "react";
import { FaUsers, FaTasks, FaCogs } from "react-icons/fa";
import Team from "./Team";
import how from '../../assets/Image/How we work pic.jpeg'
import who from '../../assets/Image/Who are we pic.jpeg'

const About = () => {
    const [activeTab, setActiveTab] = useState("who");

    const tabClass = (tab) =>
        `flex-1 text-center md:py-3 py-1 md:px-4 px-0 cursor-pointer transition-all duration-300 font-semibold rounded-full
         ${activeTab === tab
            ? "bg-orange-500 text-white shadow-lg scale-105"
            : "bg-orange-100 text-[#1A237E] hover:bg-orange-200"
        }`;

    return (
        <>
            <section className="lg:p-8 p-5 text-[#1A237E] bg-gradient-to-b from-orange-50 to-white ">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex justify-between items-center md:gap-4 gap-1 bg-orange-100 md:p-2 p-0 rounded-full shadow-inner">
                        <div className={tabClass("who")} onClick={() => setActiveTab("who")}>Who we are</div>
                        <div className={tabClass("what")} onClick={() => setActiveTab("what")}>What we do</div>
                        <div className={tabClass("how")} onClick={() => setActiveTab("how")}>How we work</div>
                    </div>

                    <div className="mt-10 bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-xl border border-orange-100 transition-all duration-300">
                        {activeTab === "who" && (
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <FaUsers className="text-orange-500 text-2xl" />
                                    <h2 className="md:text-2xl text-xl font-bold">Who we are</h2>
                                </div>
                                <img src={who} alt="image" className="lg:h-[400px] h-auto w-full rounded-md object-cover" />
                                <p className="text-gray-700 leading-relaxed text-justify mt-4">
                                    We, the Likeminded Education &amp; Welfare Society is a society under the The Societies
                                    Registration Act, 1860.
                                </p>
                                <p className="text-gray-700 leading-relaxed text-justify">
                                    The primary goal of the Society is to contribute to our community that is “a just, equitable,
                                    humane and sustainable society” as envisaged in the Constitution of India. Towards this goal, we
                                    have identified education as a critical area that has direct impact on the economic, social and
                                    cultural development of the nation.
                                </p>
                                <p className="text-gray-700 leading-relaxed text-justify">
                                    Our endeavour is mainly to transform the lives of underprivileged children by providing school
                                    and higher Education, skill-based education assistance to the students so that they can be job
                                    ready, coaching assistance to the deserving students from underprivileged society for preparation
                                    of competitive exams like IIT,IIM,Army,MBBS,Civil Services.
                                </p>
                                <p className="text-gray-700 leading-relaxed text-justify">
                                    We also provide healthcare aid to the deprived families.
                                </p>
                            </div>
                        )}

                        {activeTab === "what" && (
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <FaTasks className="text-orange-500 text-2xl" />
                                    <h2 className="md:text-2xl text-xl font-bold">What we do</h2>
                                </div>
                                <ul className="list-decimal pl-6 space-y-3 text-gray-700 text-justify">
                                    <li>To undertake activities for the promotion of Education, Sports, Healthcare, and other welfare activities.</li>
                                    <li>To promote all types of formal and informal education such as primary, secondary, higher, technical, and medical education including physical training, handicrafts, fine arts, etc., through establishments like schools, colleges, training centers, etc.</li>
                                    <li>To obtain affiliation with various universities and institutes, in India or abroad, to undertake diverse educational programs and courses.</li>
                                    <li>To construct and manage labs and vocational training centers for underprivileged communities and support research in natural, applied, or social sciences.</li>
                                    <li>To grant scholarships or financial aid to deserving students, especially those from weaker sections, to support their education and related expenses.</li>
                                    <li>To award research grants to deserving scholars in various disciplines.</li>
                                    <li>To support students in pursuing overseas education including travel, accommodation, and fee assistance.</li>
                                    <li>To promote commercial, industrial, and technical education, and conduct exams, award certificates, diplomas, and prizes.</li>
                                    <li>To spread awareness and education about human values, peace, Indian culture, and spiritual heritage.</li>
                                    <li>To organize and participate in conferences, seminars, training, exhibitions, and awareness programs relevant to the Society’s goals.</li>
                                    <li>To donate to hospitals, orphanages, old age homes, and other institutions providing medical relief to the needy.</li>
                                    <li>To provide emergency relief like medical help, first aid, and essentials during calamities or crises.</li>
                                    <li>To establish and maintain hospitals, dispensaries, medical colleges, old age homes, and other health institutions.</li>
                                    <li>To organize medical camps/events for public health improvement.</li>
                                    <li>To assist people who are incapable or differently-abled with necessary support for survival and upliftment.</li>
                                    <li>To promote physical, mental, and spiritual growth of individuals, enabling self-employment and sustainable livelihoods.</li>
                                    <li>To carry out Corporate Social Responsibility (CSR) activities including rural development, women and elderly welfare, sports promotion, and environment conservation.</li>
                                    <li>To encourage sports and games and support physical fitness initiatives for the public.</li>
                                    <li>To help unmarried individuals, widows/widowers in need through social, moral, and financial support.</li>
                                    <li>To accept donations, gifts, and property for fulfilling the Society’s mission.</li>
                                    <li>To manage and develop Society-owned properties for the benefit of its objectives.</li>
                                    <li>To acquire land/buildings necessary for expanding the Society’s initiatives.</li>
                                    <li>To contribute to public institutions supporting charitable purposes.</li>
                                    <li>To support environmental sustainability through education, green energy, recycling, waste management, etc.</li>
                                    <li>To perform all related actions necessary to achieve the Society’s aims.</li>
                                </ul>
                            </div>
                        )}

                        {activeTab === "how" && (
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <FaCogs className="text-orange-500 text-2xl" />
                                    <h2 className="md:text-2xl text-xl font-bold text-[#1A237E]">How we work</h2>
                                </div>

                                {/* Circle design for 75-20-5 */}
                                {/* <div className="flex justify-center mb-8">
                                    <div className="relative w-48 h-48 rounded-full bg-[conic-gradient(#1A237E_0%_75%,#FB8C00_75%_95%,#FDD835_95%_100%)]">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center text-white font-semibold">
                                                <div className="text-lg">Focus</div>
                                                <div className="text-sm">on Impact</div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                {/* Legend */}
                                <img src={how} alt="image" className="lg:h-[400px] h-auto w-full rounded-md object-cover" />
                                <div className="flex flex-col md:flex-row justify-center md:gap-8 gap-4 my-6 text-sm md:text-base font-medium text-gray-700">
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 bg-[#1A237E] rounded-full"></div>
                                        Education (75%)
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 bg-[#FB8C00] rounded-full"></div>
                                        Health (20%)
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 bg-[#FDD835] rounded-full"></div>
                                        Welfare (5%)
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-700 leading-relaxed text-justify">
                                    In Education, we wish to support Free Education till XII, Free Education for B.Com/BBA/BA by providing financial assistance directly to the schools and colleges. Loans for Higher Education for Engineering and other courses, support for coaching classes for IAS, Banking, CA, and Armed Forces Exam preparation is also provided by directly supporting Institutions. We also collaborate with like-minded Societies to pool money and promote a shared Education agenda. <br /><br />
                                    Additionally, we aim to promote the Punjabi language up to Xth Class to help students read, write, and understand Gurbani—available for anyone interested.
                                </p>
                            </div>
                        )}

                    </div>
                </div>
            </section>
            <Team />
        </>
    );
};

export default About;
