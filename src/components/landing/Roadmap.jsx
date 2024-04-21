import React from 'react'
import ul from '../../assets/underline.png'
import group from '../../assets/OBJECTS.png'
import group2 from '../../assets/group2.png'
import group3 from '../../assets/group3.png'
import group4 from '../../assets/group4.png'
import group5 from '../../assets/group5.png'
import group6 from '../../assets/group6.png'
import group7 from '../../assets/group7.png'
import group8 from '../../assets/group8.png'
import group9 from '../../assets/group9.png'
import group10 from '../../assets/group10.png'
import group11 from '../../assets/group11.png'
import group12 from '../../assets/group12.png'
import group13 from '../../assets/group13.png'
import group14 from '../../assets/group14.png'
import company1 from '../../assets/company1.png'
import company2 from '../../assets/company2.png'


function Roadmap() {
    return (
        <div className='flex flex-col gap-14'>
            <div className='flex flex-col gap-4 justify-center items-center'>
                <div className='text-3xl text-mcolor text-center'>What exactly will I learn that helps me build my portfolio and become a </div>
                <div className='text-3xl text-blue-700'>Business Analyst?</div>
                <div><img src={ul} alt="" /></div>
                <div className='text-2xl text-center text-gray-600'>Master the Concept of Business Analytics Hands-On</div>

                <div className='text w-4/5 flex justify-center text-gray-600 text-center'>
                    Learn, sharpen and perfect your skills with EXcellenC. Learn all the concepts hands-on by applying them to assignments and industry-relevant projects to build an irresistible portfolio and outshine your peers.
                </div>
            </div>

            <div className='flex flex-col md:flex-row w-4/5 mx-auto justify-center items-center'>
                <div className='w-full lg:w-7/12 order-last md:order-first'>
                    <div className='text-3xl text-mcolor'>Business Statistics</div>
                    <div className='mt-2'>Business statistics in data analytics provide crucial insights into market trends and consumer behavior, enabling informed decision-making for companies. By analyzing data, businesses can optimize operations, improve marketing strategies, and enhance overall performance.</div>
                    <div className='text-3xl underline mt-5 font-normal'>Objective</div>
                    <div className='mt-3'>Utilize quantitative techniques to extract actionable insights from data, facilitating informed decision-making and strategic planning in organizations.</div>
                </div>
                <div className='w-full lg:w-2/5 flex justify-center items-center order-first lg:order-last'>
                    <img src={group} width={'80%'} alt="" />
                </div>
            </div>

            <div className='flex flex-col md:flex-row w-4/5 mx-auto gap justify-center items-center'>
                <div className='w-full md:w-2/5 flex justify-center items-center'>
                    <img src={group2} width={'80%'} alt="" />
                </div>
                <div className='w-full md:w-7/12'>
                    <div className='text-3xl text-mcolor'>Excel(Basic to Advance)</div>
                    <div className='mt-2'>Excel is a powerful tool widely used in data analytics, offering versatile functions for data manipulation, analysis, and visualization, aiding in informed decisionmaking.</div>
                    <div className='text-3xl underline mt-5 font-normal'>Objective</div>
                    <div className='mt-3'>utilize its features for efficient data manipulation, analysis, and visualization to derive actionable insights for informed decision-making</div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row w-4/5 mx-auto gap justify-center items-center'>
                <div className='w-full lg:w-7/12 order-last md:order-first'>
                    <div className='text-3xl text-mcolor'>SQL</div>
                    <div className='mt-2'>SQL is a fundamental tool in data analytics, enabling users to manage, manipulate, and retrieve data from relational databases efficiently. It forms the backbone of data querying and analysis processes, essential for extracting valuable insights from large datasets.</div>
                    <div className='text-3xl underline mt-5 font-normal'>lObjective</div>
                    <div className='mt-3'>Efficiently query and manipulate large datasets in relational databases to extract valuable insights for informed decisionmaking</div>
                </div>
                <div className='w-full lg:w-2/5 flex justify-center items-center order-first lg:order-last'>
                    <img src={group3} width={'80%'} alt="" />
                </div>
            </div>

            <div className='flex flex-col md:flex-row w-4/5 mx-auto gap justify-center items-center'>
                <div className='w-full md:w-2/5 flex justify-center items-center'>
                    <img src={group4} width={'80%'} alt="" />
                </div>
                <div className='w-full md:w-7/12'>
                    <div className='text-3xl text-mcolor'>NoSQL</div>
                    <div className='mt-2'>NoSQL databases are pivotal in data analytics for handling unstructured or semi-structured data at scale, offering flexibility and scalability beyond traditional relational databases, thereby enabling efficient storage, retrieval, and analysis of diverse data types crucial for modern analytics applications.</div>
                    <div className='text-3xl underline mt-5 font-normal'>Objective</div>
                    <div className='mt-3'>Harness its capabilities in handling diverse and largescale datasets efficiently, enabling flexible storage, retrieval, and analysis of unstructured or semistructured data to derive valuable insights for decision-making</div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row w-4/5 mx-auto gap justify-center items-center'>
                <div className='w-full lg:w-7/12 order-last md:order-first'>
                    <div className='text-3xl text-mcolor'>Tableau</div>
                    <div className='mt-2'>Tableau is a leading data visualization tool used in data science, allowing users to create interactive and visually appealing dashboards and reports from various data sources, facilitating insights discovery and decision-making through intuitive visual representations of data.</div>
                    <div className='text-3xl underline mt-5 font-normal'>Objective</div>
                    <div className='mt-3'>Leverage its capabilities in creating interactive and visually compelling dashboards to effectively communicate insights derived from data, facilitating informed decision-making processes.</div>
                </div>
                <div className='w-full lg:w-2/5 flex justify-center items-center order-first lg:order-last'>
                    <img src={group5} width={'80%'} alt="" />
                </div>
            </div>

            <div className='flex flex-col md:flex-row w-4/5 mx-auto gap justify-center items-center'>
                <div className='w-full md:w-2/5 flex justify-center items-center'>
                    <img src={group6} width={'80%'} alt="" />
                </div>
                <div className='w-full md:w-7/12'>
                    <div className='text-3xl text-mcolor'>Power BI</div>
                    <div className='mt-2'>Power BI is a robust business analytics tool by Microsoft, enabling users to visualize and share insights from data through interactive dashboards and reports, fostering data-driven decision-making across organizations with ease.</div>
                    <div className='text-3xl underline mt-5 font-normal'>Objective</div>
                    <div className='mt-3'>Harness its functionalities in transforming raw data into meaningful insights, facilitating informed decision-making through interactive visualizations and reports.</div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row w-4/5 mx-auto gap justify-center items-center'>
                <div className='w-full lg:w-7/12 order-last md:order-first'>
                    <div className='text-3xl text-mcolor'>Python</div>
                    <div className='mt-2'>Python is a versatile programming language widely used in data science for its extensive libraries like Pandas and NumPy, enabling data manipulation, analysis, and machine learning tasks efficiently, making it a preferred choice for data professionals and researchers worldwide.</div>
                    <div className='text-3xl underline mt-5 font-normal'>Objective</div>
                    <div className='mt-3'>Utilize its powerful libraries and syntax to efficiently manipulate, analyze, and visualize data, enabling data-driven decisionmaking and advanced machine learning applications.</div>
                </div>
                <div className='w-full lg:w-2/5 flex justify-center items-center order-first lg:order-last'>
                    <img src={group7} width={'80%'} alt="" />
                </div>
            </div>

            <div className='flex flex-col md:flex-row w-4/5 mx-auto gap justify-center items-center'>
                <div className='w-full md:w-2/5 flex justify-center items-center'>
                    <img src={group8} width={'80%'} alt="" />
                </div>
                <div className='w-full md:w-7/12'>
                    <div className='text-3xl text-mcolor'>R</div>
                    <div className='mt-2'>R is a powerful programming language and software environment for statistical computing and graphics, widely used in data science for its extensive libraries and tools, facilitating advanced statistical analysis, visualization, and modeling tasks with ease.</div>
                    <div className='text-3xl underline mt-5 font-normal'>Objective</div>
                    <div className='mt-3'>Leverage its comprehensive statistical capabilities and libraries to efficiently analyze, visualize, and model data, empowering data-driven decisionmaking and insights generation.</div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row w-4/5 mx-auto gap justify-center items-center'>
                <div className='w-full lg:w-7/12 order-last md:order-first'>
                    <div className='text-3xl text-mcolor'>Google BigQuery and Cloud Platform</div>
                    <div className='mt-2'>Google BigQuery, a part of Google Cloud Platform, is a fully managed, serverless data warehouse solution designed for large-scale data analytics, offering high-speed querying and real-time insights generation capabilities, empowering businesses to unlock the full potential of their data.</div>
                    <div className='text-3xl underline mt-5 font-normal'>Objective</div>
                    <div className='mt-3'>leverage their fully managed, scalable infrastructure and advanced analytics tools to efficiently process large datasets, derive actionable insights, and drive informed decision-making.</div>
                </div>
                <div className='w-full lg:w-2/5 flex justify-center items-center order-first lg:order-last'>
                    <img src={group9} width={'80%'} alt="" />
                </div>
            </div>

            <div className='flex flex-col md:flex-row w-4/5 mx-auto gap justify-center items-center'>
                <div className='w-full md:w-2/5 flex justify-center items-center'>
                    <img src={group10} width={'80%'} alt="" />
                </div>
                <div className='w-full md:w-7/12'>
                    <div className='text-3xl text-mcolor'>Business Understanding and Story Telling</div>
                    <div className='mt-2'>Business understanding and storytelling in data science entail contextualizing data to organizational goals and presenting insights in compelling narratives, bridging data analysis with business strategy for impactful decision-making.</div>
                    <div className='text-3xl underline mt-5 font-normal'>Objective</div>
                    <div className='mt-3'>Effectively contextualize data to organizational objectives, craft compelling narratives, and bridge insights with strategic decision-making to drive impactful outcomes in business</div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row w-4/5 mx-auto gap justify-center items-center'>
                <div className='w-full lg:w-7/12 order-last md:order-first'>
                    <div className='text-3xl text-mcolor'>Exploratory Data Analysis</div>
                    <div className='mt-2'>Exploratory Data Analysis (EDA) is a foundational process in data analytics, employing techniques to summarize and visualize data, aiding in insights discovery before formal modeling, thereby informing decision-making across domains.</div>
                    <div className='text-3xl underline mt-5 font-normal'>Objective</div>
                    <div className='mt-3'>To summarize and visualize data to gain insights, identify patterns, and inform decision-making processes effectively.</div>
                </div>
                <div className='w-full lg:w-2/5 flex justify-center items-center order-first lg:order-last'>
                    <img src={group11} width={'80%'} alt="" />
                </div>
            </div>

            <div className='flex flex-col md:flex-row w-4/5 mx-auto gap justify-center items-center'>
                <div className='w-full md:w-2/5 flex justify-center items-center'>
                    <img src={group12} width={'80%'} alt="" />
                </div>
                <div className='w-full md:w-7/12'>
                    <div className='text-3xl text-mcolor'>IBM Cognus</div>
                    <div className='mt-2'>Learning IBM Cognos for business analytics opens doorsto mastering advanced data visualization and reportingtechniques, empowering professionals to extractactionable insights from complex datasets efficiently.With Cognos, you can streamline decision-makingprocesses, drive business growth, and stay ahead in thecompetitive landscape of data-driven industries.</div>
                    <div className='text-3xl underline mt-5 font-normal'>Objective</div>
                    <div className='mt-3'>Enabling effective data visualization, reporting, and decision-making inorder to drive organizational growth and competitiveness through informed insights and strategic actions.</div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row w-4/5 mx-auto gap justify-center items-center'>
                <div className='w-full lg:w-7/12 order-last md:order-first'>
                    <div className='text-3xl text-mcolor'>SAS</div>
                    <div className='mt-2'>Learning SAS for business analytics equips individualswith the essential skills to manipulate, analyze, andinterpret data efficiently, enabling informed decision-making and strategic planning. With SAS proficiency,professionals gain the ability to uncover valuableinsights, optimize processes, and drive business successin today's data-driven world.</div>
                    <div className='text-3xl underline mt-5 font-normal'>Objective</div>
                    <div className='mt-3'>Enabling proficiency in datamanipulation, analysis, andinterpretation, with the aimof utilizing data-driveninsights to optimize businessprocesses, enhance decision-making, and drive strategicinitiatives for organizationalgrowth and success.</div>
                </div>
                <div className='w-full lg:w-2/5 flex justify-center items-center order-first lg:order-last'>
                    <img src={group13} width={'80%'} alt="" />
                </div>
            </div>

            <div className='flex flex-col justify-center items-center md:flex-row w-4/5 mx-auto'>
                <div className='w-full md:w-2/5 flex justify-center items-center'>
                    <img src={group14} width={'80%'} alt="" />
                </div>
                <div className='w-full md:w-7/12'>
                    <div className='text-3xl text-mcolor'>Prompt Engineering</div>
                    <div className='mt-2'>Prompt engineering in data analytics entailsdesigning efficient algorithms for real-time insightgeneration and response to user queries,optimizing data processing and decision-making indynamic analytics environments.</div>
                    <div className='text-3xl underline mt-5 font-normal'>Objective</div>
                    <div className='mt-3'>Develop efficient
                        algorithms and
                        methodologies for real-
                        time insight generation
                        and response to user
                        queries, optimizing data
                        processing and decision-making in dynamic
                        analytics environments.</div>
                </div>
            </div>
            <div className='flex mx-auto flex-col justify-center items-center gap-3'>
                <div className='text-3xl text-mcolor'>Our Learners Works At</div>
                <div><img src={ul} alt="" /></div>
            </div>
            <div className='flex mx-auto flex-col justify-center items-center w-4/5 '>
                <div className=''><img src={company1} alt="" /></div>
                <div><img src={company2} alt="" /></div>
            </div>
            <div className='flex mx-auto flex-col justify-center items-center gap-3'>
                <div className='text-3xl text-mcolor text-center'>Am I Going to Get Interview Guidance & Job Assistance?</div>
                <div><img src={ul} alt="" /></div>
            </div>

            <div className='flex flex-col md:flex-row w-full mx-auto gap justify-center items-center'>
                <div className='w-full lg:w-4/12 order-last md:order-first'>

                    <div className='mt-2'>Absolutely! Our program guarantees <span className='text-blue-800 font-bold'>100 % job placement</span> with simple conditions aimed at enhancing your learning experience. This includes maintaining an 85% attendance, timely completion of assignments and projects, active participation in placement training, and applying for all job opportunities shared with you. Rest assured, if you aren't placed within 6 months post-course completion, you'll secure a position as a data analyst in our esteemed parent company, Analytics Space, with a Conditional Offer Letter provided upon enrollment.</div>

                </div>
                <div className='w-full lg:w-6/12 flex justify-center items-center '>
                    <img src={group13} width={'80%'} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Roadmap