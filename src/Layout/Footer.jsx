import React from 'react'
// import logo from '../assets/Image/logo.jpg'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'


const Footer = () => {
  return (
    <>
      <section className='lg:py-15 py-10 bg-black/80' >
        <div className="container mx-auto md:px-20 px-5">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            <div className="col-span-1">
              <div className="w-full">
                <h2 className='text-white fw-bold '>
                  Logo
                </h2>
                {/* <img src={logo} alt='image' className=' rounded-[5px] lg:h-[100px] h-[80px] ' /> */}
                <p className='text-white lg:text-[16px] text-[12px] lg:pt-4 pt-2 hover:text-[#e87e00]'>
                  1, Nivan, Plot No.96, S.V. Road
                </p>
                <p className='text-white lg:text-[16px] text-[12px] hover:text-[#e87e00]'>
                  Khar West, Mumbai - 400052
                </p>
              </div>
            </div>
            <div className="col-span-1 lg:p-0 pt-3">
              <h3 className='text-white font-[600] lg:text-[25px] text-[15px]'>
                Our Company
              </h3>
              <ul className='*:text-white *:hover:text-[#e87e00] *:lg:text-[16px] text-[12px] lg:pt-4 pt-2 '>
                <li className='pb-3 cursor-pointer'>
                  Home
                </li>
                <li className='pb-3 cursor-pointer'>About Us</li>
                <li className='pb-3 cursor-pointer'>Programs</li>
                <li className='pb-3 cursor-pointer'>How to Help</li>
              </ul>
            </div>
            <div className="col-span-1 lg:p-0 pt-3">
              {/* <h3 className='text-white font-[600] lg:text-[25px] text-[15px]'>
                Our Product
              </h3> */}
              <ul className='*:text-white *:hover:text-[#e87e00] *:lg:text-[16px] text-[12px] lg:pt-10 pt-2 '>

                <li className='pb-3 cursor-pointer'>Donate</li>
                <li className='pb-3 cursor-pointer'>Testimonies</li>
                <li className='pb-3 cursor-pointer'>Contact Us</li>
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
                <div className='md:h-[40px] h-[30px] md:w-[40px] w-[30px] rounded-[50%] bg-[#ff6900] hover:bg-[#e0b076f2] items-center justify-center flex'>
                  <FaLinkedinIn className='text-white   md:text-[20px] text-[15px] cursor-pointer' />
                </div>
              </div>
            </div>

          </div>
          <div className="grid grid-cols-1">
            <div className="col-span-1 pt-10 text-center ">
              <p className='text-white lg:text-[16px] text-[11px] font-[100] border-t border-[#bcafaf] pt-5'>© Copyright The Kalgidhar Society, Baru Sahib. All Rights Reserved.</p>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
