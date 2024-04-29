import React from 'react';
import Nav from '../components/nav'; // Import the Nav component
import { Link } from 'react-router-dom';

const LandingPage = () => {


    return (
        <div>
            <Nav /> {/* Include the Nav component */}
            <div className="mt-14 relative h-screen bg-cover bg-center flex items-start justify-center">
                {/* <!-- Background Image --> */}
                <img src="/landingPageFirstImage.jpeg" alt="Background Image" className="absolute inset-0 w-full h-full object-cover" />

                {/* <!-- Content --> */}
                <div className="absolute top-0 text-white w-96 left-32">
                    <p className="text-2xl md:text-4xl mt-32">
                        Empowering Minds, Connecting Skills, Fostering Collaboration -
                        Where Knowledge Meets Innovation
                    </p>
                    <button className='mt-8'>
                        <Link to="/signup" className="mt-8 px-6 py-2 bg-slate-600 text-white rounded hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            Sign Up
                        </Link>
                    </button>
                </div>

            </div>


            {/* First module */}
            <div className="flex mt-8 h-auto">
                {/* Left side: Text */}
                <div className="w-1/2 p-4">
                    <h2 className="text-xl font-semibold mb-2 mt-10 ml-20">GROUP STUDY</h2>
                    <p className='mt-10 ml-20 mr-52'>
                        Collaborative learning experience where individuals study together,
                        sharing knowledge and insights for mutual academic growth
                    </p>
                </div>

                {/* Right side: Image */}
                <div className="w-1/2">
                    <img
                        src="2divimage.jpeg"
                        alt="Description"
                        // style={{ marginLeft: '30rem' }}
                        className="w-96 ml-44"
                    />
                </div>
            </div>

            {/* Second module  */}

            <div className="flex mt-4 h-auto">
                {/* Left side: Image */}

                <div className="w-1/2">
                    <img
                        src="3divimage.jpeg"
                        alt="Description"
                        // style={{ marginLeft: '30rem' }}
                        className="w-96 ml-20"
                    />
                </div>


                {/* Right side: Text */}

                <div className="w-1/2 p-4">
                    <h2 className="text-xl font-semibold mb-2 mt-10 ml-44">Skill Exchange</h2>
                    <p className='mt-10 ml-44 mr-28'>
                        A platform facilitating the reciprocal sharing of expertise,
                        enabling individuals to trade skills and broaden their capabilities
                    </p>
                </div>

            </div>

            {/* Third Module */}

            <div className="flex mt-4 h-auto">
                {/* Left side: Text */}
                <div className="w-1/2 p-4">
                    <h2 className="text-xl font-semibold mb-2 mt-10 ml-20">Hire A Tutor</h2>
                    <p className='mt-10 ml-20 mr-52'>
                        Engaging a knowledgeable professional to provide personalized guidance
                        and instruction in a specific subject or skill.
                    </p>
                </div>

                {/* Right side: Image */}
                <div className="w-1/2">
                    <img
                        src="4divimage.jpeg"
                        alt="Description"
                        // style={{ marginLeft: '30rem' }}
                        className="w-96 ml-44"
                    />
                </div>
            </div>

            {/* Fourth module  */}

            <div className="flex mt-4 h-auto">
                {/* Left side: Text */}
                <div className="w-1/2">
                    <img
                        src="5divimage.jpeg"
                        alt="Description"
                        // style={{ marginLeft: '30rem' }}
                        className="w-96 ml-20"
                    />
                </div>


                {/* Right side: Text */}

                <div className="w-1/2 p-4">
                    <h2 className="text-xl font-semibold mb-2 mt-10 ml-44">Freelance Market Place</h2>
                    <p className='mt-10 ml-44 mr-28'>
                        A platform where students list projects, accept tasks, and earn money upon completion
                    </p>
                </div>

            </div>


            {/* Fifth Module */}

            <div className="flex mt-4 h-auto">
                {/* Left side: Text */}
                <div className="w-1/2 p-4">
                    <h2 className="text-xl font-semibold mb-2 mt-10 ml-20">Innovative Ideas</h2>
                    <p className='mt-10 ml-20 mr-52'>
                        A collaborative platform where students propose innovative ideas, enlist peers for collaborative efforts,
                        and collectively work on bringing these ideas to fruition, fostering teamwork and creativity.
                    </p>
                </div>

                {/* Right side: Image */}
                <div className="w-1/2">
                    <img
                        src="6divimage.jpeg"
                        alt="Description"
                        // style={{ marginLeft: '30rem' }}
                        className="w-96 ml-44"
                    />
                </div>
            </div>

            {/* Footer */}

            <div className="flex mt-4 h-10 bg-gray-300">
                {/* Left side: Text */}
                <div className="w-1/2 ">
                    <p className='mt-2 ml-20 '>
                        Connect and Learn
                    </p>
                </div>

                {/* Right side: Text */}
                <div className="w-1/2">
                    <p className='mt-4 ml-80 text-xs'>
                        Copyright ©2024 Educative, Inc. All rights reserved
                    </p>
                </div>
            </div>



        </div>
    );
};

export default LandingPage;
