import React, { useState } from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
import razorpay from '../../assets/Image/razorpay.svg'
import qrcode from '../../assets/Image/qr-code.png'
import qrcodeimg from '../../assets/Image/qrcodeimg.jpeg'
import { IoClose } from 'react-icons/io5';

const Donationform = () => {
    const [selectedAmount, setSelectedAmount] = useState('');
    const [selectedMethod, setSelectedMethod] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };
    return (
        <section className="bg-orange-50 lg:py-12 py-10">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="md:text-4xl text-3xl font-bold text-center text-[#1A237E] mb-10">
                    Make a <span className="text-[#e87e00]">Donation</span>
                </h2>
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6 border-t-5 border-[#e87e00]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className='col-span-1'>
                            <label className="block text-sm font-medium text-[#1A237E] mb-1">Your Name</label>
                            <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e87e00]" placeholder='Enter name' />
                        </div>
                        <div className='col-span-1'>
                            <label className="block text-sm font-medium text-[#1A237E] mb-1">Email ID</label>
                            <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e87e00]" placeholder='Enter email id' />
                        </div>
                        <div className='col-span-1'>
                            <label className="block text-sm font-medium text-[#1A237E] mb-1">Contact No.</label>
                            <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e87e00]" placeholder='Enter mobile no' />
                        </div>
                        <div className='col-span-1'>
                            <label className="block text-sm font-medium text-[#1A237E] mb-1">PAN No.</label>
                            <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e87e00]" placeholder='Enter pan no' />
                        </div>

                        <div className='col-span-1'>
                            <label className="block text-sm font-medium text-[#1A237E] mb-1">Address</label>
                            <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e87e00]" placeholder='Enter address' />
                        </div>

                        <div className='col-span-1'>
                            <label className="block text-sm font-medium text-[#1A237E] mb-1">City</label>
                            <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e87e00]" placeholder='Enter city' />
                        </div>

                        <div className='col-span-1'>
                            <label className="block text-sm font-medium text-[#1A237E] mb-1">State</label>
                            <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e87e00]" placeholder='Enter state' />
                        </div>

                        <div className='col-span-1'>
                            <label className="block text-sm font-medium text-[#1A237E] mb-1">Pincode</label>
                            <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e87e00]" placeholder='Enter pincode' />
                        </div>
                        <div className='md:col-span-2 col-span-1'>
                            <label className="block text-sm font-medium text-[#1A237E] mb-3">Select Amount</label>
                            <div className="flex flex-wrap gap-4">
                                {["₹ 500", "₹ 1000", "₹ 2500", "₹ 5000", "₹ 10000", "₹ 20000", "Other Amount"].map((amount) => (
                                    <label key={amount} className="inline-flex items-center bg-orange-100 text-[#1A237E] px-4 py-2 rounded-full cursor-pointer hover:bg-orange-200">
                                        <input
                                            type="radio"
                                            name="amount"
                                            value={amount}
                                            onChange={() => setSelectedAmount(amount)}
                                            className="mr-2 accent-[#e87e00]"
                                        />
                                        {amount}
                                    </label>
                                ))}
                            </div>
                        </div>
                        {
                            selectedAmount === "Other Amount" &&
                            <div className='md:col-span-2 col-span-1'>
                                <label className="block text-sm font-medium text-[#1A237E] mb-1">Other Amount</label>
                                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e87e00]" placeholder='Enter amount' />
                            </div>
                        }
                        <div className="md:col-span-2 col-span-1 flex flex-wrap  gap-4">
                            {/* Razorpay Payment Option */}
                            <label className="inline-flex items-center bg-blue-100 text-[#1A237E] px-4 py-2 rounded-full cursor-pointer hover:bg-blue-200">
                                <input type="radio" name="paymentmethod" value="razorpay" className="mr-2 accent-blue-600" />
                                <img src={razorpay} alt="Razorpay" className="h-5 w-auto mr-2" />
                                {/* Pay with Razorpay */}
                            </label>

                            {/* QR Code Payment Option */}
                            <label className="inline-flex items-center bg-blue-100 text-[#1A237E] px-4 py-2 rounded-full cursor-pointer hover:bg-blue-200">
                                <input type="radio" name="paymentmethod" value="qrcode" className="mr-2 accent-blue-600" onChange={() => setSelectedMethod('qrcode')}
                                    checked={selectedMethod === 'qrcode'} />
                                <img src={qrcode} alt="QR Code" className="h-5 w-auto mr-2" />
                                Pay via QR Code
                            </label>
                            {/* Show QR code image when selected */}
                            {selectedMethod === 'qrcode' && (
                                <div className="fixed inset-0 bg-[#000000c7] bg-opacity-50 flex items-center justify-center z-50">
                                    <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full text-center  relative">
                                        <button
                                            className="absolute top-0 right-1 text-gray-500 hover:text-red-500"
                                            onClick={() => setSelectedMethod('')}
                                        >
                                            <IoClose className="w-10 h-10" />
                                        </button>
                                        <img src={qrcodeimg} alt='qrcode' />

                                    </div>
                                </div>
                            )}

                        </div>


                    </div>


                    <div className="text-center">
                        <button type="submit" className="bg-[#1A237E] text-white px-6 py-2 rounded-full hover:bg-[#0f174c] transition">
                            Donate Now
                        </button>
                    </div>
                </form>
            </div>
            {/* Popup */}
            {showPopup && (
                <div className="fixed inset-0 bg-[#000000c7] bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center space-y-4 relative">
                        <FaCircleCheck className="text-green-500 text-4xl mx-auto" />
                        <h3 className="text-2xl font-semibold text-[#1A237E]">Thank You for Your Donation!</h3>
                        <p className="text-gray-600">
                            Your generous support helps us continue our mission. You will receive a confirmation email shortly.
                        </p>
                        <button
                            onClick={closePopup}
                            className="mt-4 bg-[#e87e00] text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Donationform;