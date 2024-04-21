import React from 'react'
import ul from '../../assets/underline.png'
import certificate1 from '../../assets/certificate1.png'

import certificate2 from '../../assets/certificate2.png'
import certificate3 from '../../assets/certificate3.png'
import certificate4 from '../../assets/certificate4.png'

function CertificateSection() {
    return (
        <div>
            <div className='flex flex-col justify-center gap-4 items-center text-center'>
                <div className='text-mcolor text-3xl font-medium mt-7 text-center '>During Placement Training, you'll receive comprehensive support:</div>
                <div className='text-xl font-medium mt'>During Placement Training, you'll receive comprehensive support:</div>
                <div className='mb-10'><img src={ul} alt="" /></div>
                <div className='w-10/12'>After completing your Data Analytics with AI Course you’ll earn a certificate of achievement from EXcellenC, IBM and Texas Tech University in addition to recognition and respect among your peers.</div>
                <div className='w-10/12'>Upon completing your Data Analytics with AI Project, you'll earn a prestigious certificate from Analytics Space, adding significant weight to your resume and garnering respect among your peers. This recognition will propel your career forward, opening doors to new opportunities.</div>
                <div className='flex flex-row w-11/12 gap-4  mt-5 '>
                    <div className='w-4/12 flex items-center '><img src={certificate1} alt="" /></div>
                    <div className='w-4/12  '>
                        <div className=' '><img src={certificate2} alt="" /></div>
                        <div className='  '><img src={certificate3} alt="" /></div>
                    </div>
                    <div className='w-5/12 flex items-center'><img src={certificate4}  alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default CertificateSection