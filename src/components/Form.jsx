import React from 'react';

function Form() {
    return (
        <div>
            <form className="w-full lg:px-4">
                {/* First line */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
                    {/* Company name field */}
                    <div className="flex flex-col">
                        <label htmlFor="companyName" className="mb-1 text-xs font-semibold text-black">Company Name *</label>
                        <div className="relative">
                            <input
                                id="companyName"
                                className="appearance-none bg-transparent border-b border-black w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                                type="text"
                                aria-label="Company Name"
                            />
                        </div>
                    </div>
                    {/* Phone number field */}
                    <div className="flex flex-col">
                        <label htmlFor="phoneNumber" className="mb-1 text-xs font-semibold text-black">Phone Number*</label>
                        <div className="relative">
                            <input
                                id="phoneNumber"
                                className="appearance-none bg-transparent border-b border-black w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                                type="text"
                                aria-label="Phone Number"
                            />
                        </div>
                    </div>
                </div>
                {/* Second line */}
                <div className="flex flex-col items-start py-2">
                    {/* Email field */}
                    <label htmlFor="email" className="mb-1 text-xs font-semibold text-black">Email*</label>
                    <div className="relative w-full">
                        <input
                            id="email"
                            className="appearance-none bg-transparent border-b border-black w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                            type="email"
                            aria-label="Email"
                        />
                    </div>
                </div>
                {/* Third line */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
                    {/* Current course field */}
                    <div className="flex flex-col">
                        <label htmlFor="currentCourse" className="mb-1 text-xs font-semibold text-black">Current Course*</label>
                        <div className="relative">
                            <input
                                id="currentCourse"
                                className="appearance-none bg-transparent border-b border-black w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                                type="text"
                                aria-label="Current Course"
                            />
                        </div>
                    </div>
                    {/* Select course field */}
                    <div className="flex flex-col">
                        <label htmlFor="selectCourse" className="mb-1 text-xs font-semibold text-black">Select Course</label>
                        <div className="relative">
                            <select
                                id="selectCourse"
                                className="appearance-none bg-transparent border-b border-black w-full text-gray-700 py-1 px-2 pr-8 leading-tight focus:outline-none"
                                aria-label="Select Course"
                            >
                                <option value="">Select Course</option>
                                {/* Add options here */}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Checkbox */}
                <div className="flex items-center mb-6">
                    <label className="flex items-center block text-black">
                        <input className="mr-2 leading-tight h-5 w-5" type="checkbox" />
                        <span className="text-lg">
                            Send me your newsletter!
                        </span>
                    </label>
                </div>

                {/* Sign Up button */}
                <div className="flex justify-center md:justify-end mt-4">
                    <button
                        className="flex-shrink-0 text-sm text-white py-1 px-2 rounded"
                        style={{background:'#2C8DB6'}}
                        type="submit"
                    >
                        Enroll Now
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form;
