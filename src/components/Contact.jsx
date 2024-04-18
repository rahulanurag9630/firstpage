import React from 'react';
import img1 from '../assets/mail.png'
import img2 from '../assets/phone.png'
import img3 from '../assets/location.png'

function Contact() {
    return (
        <div className="h-850 w-450 p-6 bg-blue-600" style={{ height: "600px", width: "450px", backgroundColor: '#2C8DB6' }}>
            {/* Contact Us heading */}
            <div className="mb-2">
                <h1 className="text-white font-medium text-3xl">Contact Us</h1>
            </div>


            <div className="mb-20">
                <p className="text-gray-400 text-lg " style={{ color: "#C9C9C9" }}>Say something to start a live chat!</p>
            </div>

            {/* Phone number */}
            <div className="mb-5 flex items-center">
                <div className="w-6 h-6 mr-2  rounded-full"><img src={img2} alt="" /></div>
                <p className="text-white text-base">Phone Number</p>
            </div>

            {/* Email address */}
            <div className="mb-5 flex items-center">
                <div className="w-6 h-6 mr-2  rounded-full"><img src={img1} alt="" /></div>
                <p className="text-white text-base">Email Address</p>
            </div>

            {/* Exact address */}
            <div className="mb-3 flex items-center">
                <div className="w-6 h-6 mr-2 rounded-full"><img src={img3} alt="" /></div>
                <p className="text-white text-base">Exact Address</p>
            </div>

            {/* Social media icons */}
            <div className="flex">
                {/* Add more social media icons here */}
            </div>
        </div>
    )
}

export default Contact;
