import React from 'react';

const Donationform = () => {
    return (
        <section className="bg-orange-50 lg:py-12 py-10">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="md:text-4xl text-3xl font-bold text-center text-[#1A237E] mb-10">
                    Make a <span className="text-[#e87e00]">Donation</span>
                </h2>

                <form className="bg-white rounded-2xl shadow-lg p-8 space-y-6 border-t-5 border-[#e87e00]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-[#1A237E] mb-1">Your Name</label>
                            <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e87e00]" placeholder='Enter name' />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[#1A237E] mb-1">Email ID</label>
                            <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e87e00]" placeholder='Enter email id' />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#1A237E] mb-1">Contact No.</label>
                            <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e87e00]" placeholder='Enter mobile no' />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#1A237E] mb-1">PAN No.</label>
                            <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e87e00]" placeholder='Enter pan no' />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#1A237E] mb-1">Address</label>
                            <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e87e00]" placeholder='Enter address' />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#1A237E] mb-1">City</label>
                            <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e87e00]" placeholder='Enter city' />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#1A237E] mb-1">State</label>
                            <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e87e00]" placeholder='Enter state' />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#1A237E] mb-1">Pincode</label>
                            <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e87e00]" placeholder='Enter pincode' />
                        </div>
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-[#1A237E] mb-3">Select Amount</label>
                        <div className="flex flex-wrap gap-4">
                            {[500, 1000, 2500, 5000].map((amount) => (
                                <label key={amount} className="inline-flex items-center bg-orange-100 text-[#1A237E] px-4 py-2 rounded-full cursor-pointer hover:bg-orange-200">
                                    <input type="radio" name="amount" value={amount} className="mr-2 accent-[#e87e00]" />
                                    ₹{amount}
                                </label>
                            ))}
                        </div>
                    </div>
                    {/* <div>
                        <label className="block text-sm font-medium text-[#1A237E] mb-3">Select Frequency</label>
                        <div className="flex flex-wrap gap-4">
                            {["OneTime", " Monthly", "Quaterly", "Half-Yearly", "Yearly"].map((frequency) => (
                                <label key={frequency} className="inline-flex items-center bg-orange-100 text-[#1A237E] px-4 py-2 rounded-full cursor-pointer hover:bg-orange-200">
                                    <input type="radio" name="amount" value={frequency} className="mr-2 accent-[#e87e00]" />
                                    {frequency}
                                </label>
                            ))}
                        </div>
                    </div> */}
                    <div className="text-center">
                        <button type="submit" className="bg-[#1A237E] text-white px-6 py-2 rounded-full hover:bg-[#0f174c] transition">
                            Donate Now
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Donationform;
