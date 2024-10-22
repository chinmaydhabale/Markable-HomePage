import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPhoneAlt } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';

const Footer = () => {
    return (
        <div className=" bg-white px-10 py-8">


            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
                {/* Markerble Section */}
                <div>
                    <h1 className="font-bold text-lg bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
                        Markerble
                    </h1>
                    <p className='text-sm text-blue-800 cursor-pointer'>About Us</p>
                    <p className='text-sm text-blue-800 cursor-pointer'>Terms & Conditions</p>
                    <p className='text-sm text-blue-800 cursor-pointer'>Privacy & Cookies</p>
                </div>

                {/* Organisation Section */}
                <div>
                    <h1 className="font-bold text-lg">ORGANISATION</h1>
                    <p className='text-sm text-blue-800 cursor-pointer'>Control Panel</p>
                    <p className='text-sm text-blue-800 cursor-pointer'>Discover the Marketplace</p>
                    <p className='text-sm text-blue-800 cursor-pointer'>Create Organisation Account</p>
                </div>

                {/* Your Account Section */}
                <div>
                    <h1 className="font-bold text-lg">YOUR ACCOUNT</h1>
                    <p className='text-sm text-blue-800 cursor-pointer'>Library</p>
                    <p className='text-sm text-blue-800 cursor-pointer'>Profile</p>
                    <p className='text-sm text-blue-800 cursor-pointer'>Projects</p>
                    <p className='text-sm text-blue-800 cursor-pointer'>Helps</p>
                </div>

                {/* Explore Section */}
                <div>
                    <h1 className="font-bold text-lg">EXPLORE</h1>
                    <p className='text-sm text-blue-800 cursor-pointer'>Metrics</p>
                    <p className='text-sm text-blue-800 cursor-pointer'>Networks</p>
                    <p className='text-sm text-blue-800 cursor-pointer'>Strategies</p>
                    <p className='text-sm text-blue-800 cursor-pointer'>Projects</p>
                    <p className='text-sm text-blue-800 cursor-pointer'>Studies</p>
                    <p className='text-sm text-blue-800 cursor-pointer'>Survey</p>
                    <p className='text-sm text-blue-800 cursor-pointer'>Tips</p>
                    <p className='text-sm text-blue-800 cursor-pointer'>Vouchers</p>
                </div>

                {/* Follow Us Section */}
                <div>
                    <h1 className="font-bold text-lg">FOLLOW THE MARKERBLE STORY</h1>
                    <div className="flex space-x-4 mt-4">
                        <FaFacebookF size={20} className="cursor-pointer text-blue-600" />
                        <FaTwitter size={20} className="cursor-pointer text-blue-400" />
                        <FaInstagram size={20} className="cursor-pointer text-pink-600" />
                        <FaLinkedin size={20} className="cursor-pointer text-blue-700" />
                        <FaYoutube size={20} className="cursor-pointer text-red-600" />
                    </div>
                </div>
            </div>

            {/* Contact Us Section */}
            <div className="flex justify-between items-center border-t pt-4 flex-wrap gap-4">
                <div className="flex gap-4 lg:gap-8 flex-wrap">
                    <div className="flex items-start gap-2 items-center">
                        <FiMessageCircle className='text-blue-500' size={50} />
                        <div>
                            <h1 className="font-bold">Contact Us</h1>
                            <p>contact@markerble.com</p>
                            <p>© Markerble 2023</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        {/* Placeholder for Phone Icon */}

                        <FaPhoneAlt /> 020 8123 6253
                    </div>
                </div>

                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Request Support
                </button>
            </div>
        </div>
    );
};

export default Footer;
