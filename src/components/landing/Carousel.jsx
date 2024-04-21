import React, { useState } from 'react';
import img from "../../assets/banner.png"
import img2 from "../../assets/chennai.png"
import img3 from "../../assets/bangalore.png"
import bg from '../../assets/image 79.png'
import ul from '../../assets/wul.png'

// Array of programming language logos
const programmingLanguageLogos = [
    img,
    img2,
    img3,
    img,
    img2,
    img,
    img2,
    img3,
    img,
    img2,
    img,
    img2,
    img3,
    img,
    img2,
    img,
    img2,
    img3,
    img,
    img2,
    img,
    img2,
    img3,
    img,
    img2,
];

const itemsPerPage = 6; // Number of items to display per page

function Carousel() {
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(programmingLanguageLogos.length / itemsPerPage);

    const handlePrev = () => {
        setCurrentPage((prevPage) => (prevPage === 0 ? totalPages - 1 : prevPage - 1));
    };

    const handleNext = () => {
        setCurrentPage((prevPage) => (prevPage === totalPages - 1 ? 0 : prevPage + 1));
    };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, programmingLanguageLogos.length);

    const visibleLogos = programmingLanguageLogos.slice(startIndex, endIndex);

    return (
        <div className='w-full flex flex-col justify-center gap-3 h-64 items-center bg-mcolor bg-cover bg-no-repeat ' style={{ backgroundImage: `url(${bg})` }}>
            <div className='text-3xl text-white'>Tools coverd</div>
            <div className="">
                <img src={ul} alt="" className="" />
            </div>



            <div className="flex items-center justify-center bg-white rounded-lg h-36 w-3/4 overflow-hidden relative">
                <button className="absolute left-0 top-0 bottom-0 z-10 w-20 bg-white flex items-center justify-center text-black text-3xl" onClick={handlePrev}>
                    &lt;
                </button>
                <div className="flex gap-6 items-center">
                    {visibleLogos.map((logo, index) => (
                        <div key={index} className={`w-75 mx-1`}>
                            <img src={logo} alt={`Logo ${index + 1}`} height={"50px"} width={'50px'} className="max-w-full max-h-full" />
                        </div>
                    ))}
                </div>
                <button className="absolute right-0 top-0 bottom-0 z-10 w-20 bg-white flex items-center justify-center text-black text-3xl" onClick={handleNext}>
                    &gt;
                </button>
            </div>
        </div>
    );
}

export default Carousel;
