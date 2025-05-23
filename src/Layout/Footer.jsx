import React from 'react'
// import logo from '../assets/Image/logo.jpg'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import logo from '../assets/Image/logo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <section className='lg:py-15 py-10 bg-black/80' >
        <div className="container mx-auto md:px-20 px-5">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            <div className="col-span-1">
              <div className="w-full">
                {/* <h2 className='text-white fw-bold'>
                  Logo
                </h2> */}
                <img src={logo} alt='image' className=' rounded-[5px] lg:h-[100px] h-[80px] bg-white p-2' />
                <p className='text-white lg:text-[16px] text-[12px] lg:pt-4 pt-2 hover:text-[#e87e00]'>
                  1 NIVAN Plot no 96 Opp. Podar International School, Swami Vivekananda Rd
                </p>
                <p className='text-white lg:text-[16px] text-[12px] hover:text-[#e87e00]'>
                  Khar West, Mumbai, Maharashtra 400052
                </p>
              </div>
            </div>
            <div className="col-span-1 lg:p-0 pt-3">
              <h3 className='text-white font-[600] lg:text-[25px] text-[15px]'>
                Our Company
              </h3>
              <ul className='*:text-white *:hover:text-[#e87e00] *:lg:text-[16px] text-[12px] lg:pt-4 pt-2'>
                <li className='pb-3 cursor-pointer'><Link to="/">Home</Link></li>
                <li className='pb-3 cursor-pointer'><Link to="/about">About Us</Link></li>
                <li className='pb-3 cursor-pointer'><Link to="/programs">Programs</Link></li>
              </ul>
            </div>
            <div className="col-span-1 lg:p-0 md:pt-3 pt-0">
              {/* <h3 className='text-white font-[600] lg:text-[25px] text-[15px]'>
                Our Product
              </h3> */}
              <ul className='*:text-white *:hover:text-[#e87e00] *:lg:text-[16px] text-[12px] lg:pt-10 pt-2 '>
                <li className='pb-3 cursor-pointer'><Link to="/donate">Donate</Link></li>
                <li className='pb-3 cursor-pointer'><Link to="/testimonies">Testimonies</Link></li>
                <li className='pb-3 cursor-pointer'><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div className="col-span-1 lg:p-0 pt-3">
              <h3 className='text-white font-[600] lg:text-[25px] text-[15px]'>
                Social Icons
              </h3>
              <div className='lg:pt-4 pt-2 flex gap-3'>
                <div className='md:h-[40px] h-[30px] md:w-[40px] w-[30px] rounded-[50%] bg-[#ff6900] hover:bg-[#e0b076f2] items-center justify-center flex '>
                  <FaTwitter className='text-white  md:text-[20px] text-[15px] cursor-pointer' />
                </div>
                <div className='md:h-[40px] h-[30px] md:w-[40px] w-[30px] rounded-[50%] bg-[#ff6900] hover:bg-[#e0b076f2] items-center justify-center flex'>
                  <FaFacebookF className='text-white   md:text-[20px] text-[15px] cursor-pointer' />
                </div>
                <a href="https://wa.me/919821420556" target="_blank" rel="noopener noreferrer">
                  <div className='md:h-[40px] h-[30px] md:w-[40px] w-[30px] rounded-[50%] bg-[#ff6900] hover:bg-[#e0b076f2] items-center justify-center flex'>
                    <FaWhatsapp className='text-white md:text-[25px] text-[15px] cursor-pointer' />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="col-span-1 pt-10 text-center ">
              <p className='text-white lg:text-[16px] text-[11px] font-[100] border-t border-[#bcafaf] pt-5'>© Copyright Likeminded Education & Welfare Society. All Rights Reserved.</p>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
