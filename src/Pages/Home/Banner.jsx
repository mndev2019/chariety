import React from 'react'
import banner1 from '../../assets/Image/banner1.webp'
import banner2 from '../../assets/Image/banner2.webp'
import banner3 from '../../assets/Image/banner3.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const Banner = () => {
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
           {/* <section className="pt-20 pb-10 bg-gradient-to-r from-[#fef3e7] via-[#f1e4fc] to-[#e8eaf6] rounded-bl-[150px]"></section> */}
            <section className="pt-20 pb-10 bg-gradient-to-r from-[#e8eaf6] to-[#ffe7d6] rounded-bl-[150px]">
                <div className="container mx-auto px-5 lg:px-20">
                    <Slider {...settings}>
                        {slides.map((slide, index) => (
                            <div key={index}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                                    {/* Left side: Text */}
                                    <div data-aos="fade-left">
                                        <h2 className="text-5xl font-bold leading-tight mb-4">
                                            <span className="text-[#1A237E]">{slide.title.split(' ')[0]}</span>{' '}
                                            <span className="text-[#e87e00]">
                                                {slide.title.split(' ').slice(1).join(' ')}
                                            </span>
                                        </h2>
                                        <div className="w-20 h-1 bg-[#e87e00] mb-4 rounded"></div>
                                        <p className="text-[#1A237E] text-lg leading-relaxed">
                                            {slide.description}
                                        </p>
                                    </div>


                                    {/* Right side: Image */}
                                    <div className="w-full justify-items-center" data-aos="fade-right">
                                        <img src={slide.image} alt={`Slide ${index + 1}`} className='h-[500px] object-cover rounded-xl' />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

        </>
    )
}

export default Banner
