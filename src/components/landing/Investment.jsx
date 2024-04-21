import React from 'react'
import wul from '../../assets/wul.png'
import cross from '../../assets/cross.png'
import bul from '../../assets/bul.png'
import b1 from '../../assets/111.png'

function Investment() {
    return (
        <div>
            <div className=' h-auto  bg-gradient-to-r from-ic1 to-ic2 flex flex-col justify-center gap-4 items-center'>
                <div className='w-10/12 text-3xl text-center text-orange-500 mt-3'>How Much Money do i need to invest?</div>
                <div className='w-10/12 text-xl text-center text-white'>"ExcellenC was founded with a vision to democratize upskilling, providing top-quality training accessible to all at an affordable price without compromise."</div>
                <div className='mt-4 mb-8'><img src={wul} alt="" /></div>
                <div className='flex w-3/4 justify-center items-center h-auto border-white border-4 rounded-3xl'>
                    <div className='w-5/12 flex text-lg flex-col   p-4 justify-center items-center text-center text-white'>
                        <div>Our regular course fee is INR</div>
                        <div><img src={cross} alt="" /></div>
                    </div>
                    <div className='w-7/12 flex flex-col text-lg  p-4 gap-4 text-white'>
                        <div>But we're currently offering it at an unbeatable price of INR</div>
                        <div className='text-orange-500 text-5xl'> 27,000 + <span className='text-xl'>18% GST</span></div>
                        <div className='w-full'><img src={bul} alt="" /></div>
                        <div>This special offer brings the total to just INR</div>
                        <div className='text-orange-500 text-5xl'> 31,860 + <span className='text-xl'>inclusive of GST</span></div>
                    </div>
                </div>
                <div className='w-3/12 flex items-end h-2  mt-8'><img src={b1} alt="" style={{ height: '40px' }} /></div>
                <div className='w-auto ml-1  items-end text-xl text-white' style={{ marginTop: '-25px' }}> Don't miss out on this</div>
                <div className='w-auto ml-32 text-orange-400 text-2xl text-center  items-end text-white' style={{ marginTop: '-25px' }}> Amazing Deal!</div>
                <div className='w-4/12 h-2 flex items-end transform rotate-180' style={{marginTop:'-20px'}}>
                    <img src={b1} style={{height:'40px',}} alt="" />
                </div>
                <div className='w-10/12 mt-14 text-white text-center'>Exciting news! We offer a hassle-free loan option with 0% interest for working professionals, requiring minimal documentation. Additionally, for those with credit cards from leading banks including Axis Bank, Bank of Baroda, Citi Bank, HDFC Bank, HSBC Bank, ICICI Bank, Kotak Mahindra Bank, RBL Bank, Standard Chartered Bank, and Yes Bank, enjoy 0% interest EMI for up to 6 months. Don't let finances hold you back from seizing this opportunity to upskill!</div>


            </div>

        </div>
    )
}

export default Investment