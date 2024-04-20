import React from 'react';
import img1 from '../assets/mail.png'
import img2 from '../assets/phone.png'
import img3 from '../assets/location.png'
import you from '../assets/you.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import insta from '../assets/insta.png'
import linkedin from '../assets/linkedin.png'

function Contact() {
    return (
        <div className="  p-6 bg-blue-600" style={{height:'70vh' ,width:'90%',borderRadius:'10px', backgroundColor: '#2C8DB6', }}>
            {/* Contact Us heading */}
            <div className="mb-2">
                <h1 className="text-white font-medium text-3xl">Contact Us</h1>
            </div>


            <div className="mb-10">
                <p className="text-gray-400 text-lg " style={{ color: "#C9C9C9" }}>Say something to start a live chat!</p>
            </div>

            {/* Phone number */}
            <div className="mb-5 flex items-center">
                <div className="w-6 h-6 mr-2  rounded-full"><img src={img2} alt="" /></div>
                <p className="text-white text-base">+91 9182384041</p>
            </div>

            {/* Email address */}
            <div className="mb-5 flex items-center">
                <div className="w-6 h-6 mr-2  rounded-full"><img src={img1} alt="" /></div>
                <p className="text-white text-base">info@excellenc.in</p>
            </div>

            {/* Exact address */}
            <div className="mb-28 flex items-start">
                <div className="w-6 h-6 mr-2 rounded-full"><img src={img3} alt="" className='w-6 h-6' /></div>
                <p className="text-white text-base w-80 text-wrap">EXcellenC - 3rd Floor, Gnana Towers,  Road no 13, Near DMart, Kavuri Hills,  Madhapur, Hyderabad, Telangana 500081.</p>
            </div>
<div style={{position:'absolute',height:'75px', width:'75px',background:'white',left:'100px'}}></div>
<div style={{position:'absolute', height:'100px',width:'100px',background:'black'}}></div>
            {/* Social media icons */}
            <div className="flex flex-row gap-1 ">
                <div className='h-7 w-7 rounded-full bg-black align-middle justify-center flex p-1'><img src={facebook} alt="" /></div>
                <div className='h-7 w-7 rounded-full bg-white align-middle justify-center flex p-2'><img src={insta} alt="" /></div>
                <div className='h-7 w-7 rounded-full bg-black align-middle justify-center flex p-2'><img src={twitter} alt="" /></div>
                <div className='h-7 w-7 rounded-full bg-white align-middle justify-center flex p-2'><img src={linkedin} alt="" /></div>
                <div className='h-7 w-7 rounded-full bg-black align-middle justify-center flex p-2'><img src={you} alt="" /></div>
            </div>
        </div>
    )
}

export default Contact;
