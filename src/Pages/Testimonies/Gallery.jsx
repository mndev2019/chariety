import React from 'react'
import gallery1 from '../../assets/Image/gallery1.jpeg'
import gallery2 from '../../assets/Image/gallery2.jpeg'
import gallery3 from '../../assets/Image/gallery3.jpeg'
import gallery4 from '../../assets/Image/gallery4.jpeg'
import gallery5 from '../../assets/Image/gallery5.jpeg'
import gallery6 from '../../assets/Image/gallery6.jpeg'
import gallery7 from '../../assets/Image/gallery7.jpeg'
import gallery8 from '../../assets/Image/gallery8.jpeg'

const Gallery = () => {
    const gallery = [
        {
            image: gallery1,
        },
        {
            image: gallery2,
        },
        {
            image: gallery3,
        },
        {
            image: gallery4,
        },
        {
            image: gallery5,
        },
        {
            image: gallery6,
        },
        {
            image: gallery7,
        },
        {
            image: gallery8,
        },

    ]
    return (
        <>
            <section className='pb-10'>
                <div className="container mx-auto px-5 md:px-20">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <h2 className="md:text-4xl text-3xl font-bold text-center text-[#1A237E] mb-6">
                                Moments from <span className="text-orange-500">Our Journey</span>
                            </h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {
                            gallery.map((glry, index) => (
                                <div key={index} className="w-full">
                                    <img
                                        src={glry.image}
                                        alt='gallery'
                                        className='h-[300px] w-full object-cover rounded-[10px]'
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default Gallery
