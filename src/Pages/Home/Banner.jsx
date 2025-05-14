import React from 'react'
import banner1 from '../../assets/Image/banner1.webp'
import banner2 from '../../assets/Image/banner2.webp'
import banner3 from '../../assets/Image/banner3.webp'
// import bannerstats from '../../assets/Image/bannerstats.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();
    var settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    const slides = [
        {
            isStats: true,
        },
        {
            title: "Delivering Quality Healthcare",
            description: "Free-of-cost healthcare facilities are provided to underprivileged rural and hilly people, virtually at their doorsteps.",
            image: banner1
        },
        {
            title: "Bringing Grace to Human Race",
            description: "Founded in 1956, The Kalgidhar Trust/Society — Baru Sahib has been working tirelessly towards transforming the lives of rural children through the tool of value-based education.",
            image: banner2
        },
        {
            title: "Educate Enshrine Empower",
            description: "Providing value-based quality education and spiritual uplift to underprivileged and deprived rural masses in far-flung rural areas of North India.",
            image: banner3
        }
    ];
    return (
        <>

            <section className="pt-20 pb-10 bg-gradient-to-r from-[#e8eaf6] to-[#ffe7d6] rounded-bl-[150px]">
                <div className="container mx-auto px-5 lg:px-20 ">
                    <Slider {...settings}>
                        {/* {slides.map((slide, index) => (
                            <div key={index}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:pt-0 pt-6">
                                    
                                    <div data-aos="fade-left">
                                        <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold leading-tight mb-4">
                                            <span className="text-[#1A237E]">{slide.title.split(' ')[0]}</span>{' '}
                                            <span className="text-[#e87e00]">
                                                {slide.title.split(' ').slice(1).join(' ')}
                                            </span>
                                        </h2>
                                        <div className="w-20 h-1 bg-[#e87e00] mb-4 rounded"></div>
                                        <p className="text-[#1A237E] md:text-lg text-sm leading-relaxed pb-3">
                                            {slide.description}
                                        </p>
                                        <button className='bg-[#e87e00] text-white rounded-md px-6 py-2' onClick={() => navigate('/donate')}>Donate Now</button>
                                    </div>


                                
                                    <div className="w-full justify-items-center" data-aos="fade-right">
                                        <img src={slide.image} alt={`Slide ${index + 1}`} className='md:h-[500px] h-auto object-cover rounded-xl' />
                                    </div>
                                </div>
                            </div>
                        ))} */}
                        {slides.map((slide, index) => (
                            <div key={index}>
                                {slide.isStats ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:pt-0 pt-6">
                                        {/* Stats Text Side */}
                                        <div data-aos="fade-left">
                                            <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold leading-tight mb-4">
                                                <span className="text-[#1A237E]">Our</span>{' '}
                                                <span className="text-[#e87e00]">Impact</span>
                                            </h2>
                                            <div className="w-20 h-1 bg-[#e87e00] mb-4 rounded"></div>
                                            <div className="grid grid-cols-2 gap-6 text-[#1A237E] text-lg font-medium">
                                                <div>
                                                    <h3 className="md:text-4xl text-2xl font-bold text-[#ff6900]">120+</h3>
                                                    <p className='md:text-lg text-sm'>Students</p>
                                                </div>
                                                <div>
                                                    <h3 className="md:text-4xl text-2xll font-bold text-[#ff6900]">32+</h3>
                                                    <p className='md:text-lg text-sm'>Higher Education</p>
                                                </div>
                                                <div>
                                                    <h3 className="md:text-4xl text-2xl font-bold text-[#ff6900]">5</h3>
                                                    <p className='md:text-lg text-sm'>IAS Coaching</p>
                                                </div>
                                                <div>
                                                    <h3 className="md:text-4xl text-2xl font-bold text-[#ff6900]">15+</h3>
                                                    <p className='md:text-lg text-sm'>Districts</p>
                                                </div>

                                            </div>
                                            <div className='mt-3 '>
                                                <button className='bg-[#e87e00] text-white md:rounded-md rounded-[5px] md:text-[15px] text-[12px] px-6 md:py-2 py-1 ' onClick={() => navigate('/donation-form')}>Donate Now</button>
                                            </div>
                                        </div>

                                        {/* Empty Image Side to match layout */}
                                        <div className="w-full justify-items-center" data-aos="fade-right">
                                            <img src={banner2} alt={`Slide ${index}`} className='md:h-[500px] h-auto object-cover rounded-xl' />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:pt-0 pt-6">
                                        <div data-aos="fade-left">
                                            <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold leading-tight mb-4">
                                                <span className="text-[#1A237E]">{slide.title.split(' ')[0]}</span>{' '}
                                                <span className="text-[#e87e00]">
                                                    {slide.title.split(' ').slice(1).join(' ')}
                                                </span>
                                            </h2>
                                            <div className="w-20 h-1 bg-[#e87e00] mb-4 rounded"></div>
                                            <p className="text-[#1A237E] md:text-lg text-sm leading-relaxed pb-3">
                                                {slide.description}
                                            </p>
                                            <button className='bg-[#e87e00] text-white md:rounded-md rounded-[5px] md:text-[15px] text-[12px] px-6 md:py-2 py-1' onClick={() => navigate('/donation-form')}>Donate Now</button>
                                        </div>

                                        <div className="w-full justify-items-center" data-aos="fade-right">
                                            <img src={slide.image} alt={`Slide ${index}`} className='md:h-[500px] h-auto object-cover rounded-xl' />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                    </Slider>
                </div>
            </section>

        </>
    )
}

export default Banner
