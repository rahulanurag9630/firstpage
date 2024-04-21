import React from 'react'
import ul from '../../assets/underline.png'
import support1 from '../../assets/support1.png'

import support2 from '../../assets/support2.png'

import support3 from '../../assets/support3.png'

import support4 from '../../assets/support4.png'

function Support() {
    return (
        <div>
            <div className='w-full  bg-cyan-100 flex-col justify-center items-center flex gap-3 p-8 '>
                <div className='text-mcolor text-3xl font-medium mt-7 text-center '>During Placement Training, you'll receive comprehensive support:</div>
                <div className='text-xl font-medium'>During Placement Training, you'll receive comprehensive support:</div>
                <div className='mb-10'><img src={ul} alt="" /></div>
                <div className="flex gap-5 w-full flex-wrap items-center justify-center ">
                    <div className="bg-white h-80 w-80 flex border shadow-md  flex-col p-2 rounded-xl ">
                        <div className="bg-white h-52 w-full rounded-xl flex flex-col pt-3 justify-center items-center">
                            <img
                                src={support1}
                                height={"150px"}
                                alt="hy"
                                style={{ height: "130px" }}
                            />{" "}
                            <br />

                        </div>
                        <div className='text-xl'>Resume Building Session</div>

                        <div className="font-normal text-sm w-11/12 p-2">
                            EXcellenC - 3rd Floor, Gnana Towers, Road no 13, Near DMart, Kavuri
                            Hills, Madhapur, Hyderabad, Telangana 500081.
                        </div>{" "}
                        <br />

                    </div>
                    <div className="bg-white h-80 w-80 flex border shadow-md  flex-col p-2 rounded-xl ">
                        <div className="bg-white h-52 w-full rounded-xl flex flex-col pt-3 justify-center items-center">
                            <img
                                src={support2}
                                width={"130px"}
                                alt="hy"
                                style={{ height: "130px" }}
                            />{" "}
                            <br />
                        </div>
                        <div className='text-xl'>Interview Preparation Session</div>

                        <div className="font-normal text-sm w-11/12 p-2">
                           Benefit from insights and experiences shared by our Trainers, Mentors, and Alumni, helping you prepare effectively for interviews.
                        </div>{" "}
                        <br />

                    </div>
                    <div className="bg-white h-80 w-80 flex border shadow-md  flex-col p-2 rounded-xl ">
                        <div className="bg-white h-40 w-full rounded-xl flex flex-col pt-3 justify-center items-center">
                            <img
                                src={support3}
                                height={"70px"}
                                width={"130px"}
                                alt="hy"
                                style={{ height: "130px" }}
                            />{" "}
                            <br />
                        </div>
                        <div className='text-xl'>LinkedIn Profile Optimization</div>

                        <div className="font-normal text-sm w-11/12 p-2">
                        Our dedicated team will assist you in creating and optimizing your LinkedIn profile, a crucial step in today's job market
                        </div>{" "}
                        <br />

                    </div>
                    <div className="bg-white h-80 w-80 flex border shadow-md  flex-col p-3 rounded-xl ">
                        <div className="bg-white h-40 w-full rounded-xl flex flex-col pt-3 justify-center items-center">
                            <img
                                src={support4}

                                width={"130px"}
                                alt="hy"
                                style={{ height: "130px" }}
                            />{" "}
                            <br />
                        </div>
                        <div className='text-xl'>Mock Interviews</div>

                        <div className="font-normal text-sm w-11/12 p-2">
                        Our dedicated team will assist you in creating and optimizing your LinkedIn profile, a crucial step in today's job market
                        </div>{" "}
                        <br />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support