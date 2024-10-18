import React from 'react';
import { FaCopyright, FaInbox, FaPhone, FaSearchLocation, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPinterest } from 'react-icons/fa';

function Footer() {
  return (
    <div className="text-white bg-[#1E3A8A] pt-[75px] pb-[40px] px-6 lg:h-[432px] lg:px-32 lg:space-x-20 md:h-[440px] md:px-28 md:space-x-16">
      <div className="gap-8 justify-center items-center flex flex-col lg:flex-row lg:justify-between lg:items-start md:flex-row md:justify-between md:items-start">
        <div className="text-center">
          <h3 className="font-semibold text-2xl mb-6">Contact Us</h3>
          <div className="space-y-3 justify-center items-center">
            <div className="flex gap-2 justify-center items-center">
              <FaSearchLocation />
              <p className="hover:text-[#F59E0B]">Location</p>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <FaPhone />
              <p className="hover:text-[#F59E0B]">Call 92+ 0300000000</p>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <FaInbox />
              <p className="hover:text-[#F59E0B]">stromsafe@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="text-center justify-center items-center">
          <h1 className="font-semibold text-3xl mb-6">StormSafe</h1>
          <p className="lg:text-[18px] text-[16px] lg:px-28 mb-6">Your trusted resource for hurricane preparedness and safety. Stay informed, stay safe.</p>
          <div className="flex justify-center gap-4 mb-6">
            <FaFacebook className='hover:text-[#F59E0B]' size="28" />
            <FaTwitter className='hover:text-[#F59E0B]' size="28" />
            <FaLinkedin className='hover:text-[#F59E0B]' size="28" />
            <FaInstagram className='hover:text-[#F59E0B]' size="28" />
            <FaPinterest className='hover:text-[#F59E0B]' size="28" />
          </div>
        </div>
        <div className="text-center justify-center items-center">
          <h1 className="font-semibold text-2xl mb-6">Opening Hours</h1>
          <div>
            <p className="text-base lg:text-[18px] text-[16px]">Everyday</p>
            <p className="text-sm mt-3">10.00 AM - 10.00 PM</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 mt-10 mb-4">
        <FaCopyright size="24" />
        <h1>2024 All Rights Reserved By StormSafe</h1>
      </div>
    </div>
  );
}

export default Footer;
