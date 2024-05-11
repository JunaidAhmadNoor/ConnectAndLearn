import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={` p-3 w-full fixed bg-gray-200 top-0 z-50 ${isScrolled ? 'w-10/12 mt-4 rounded-full bg-gray-300' : ''}`}>
            <div className="container mx-auto flex justify-between items-center">
                {/* Left side: Logo */}
                <div className="flex items-center">
                    <Link to="/" className="text-black text-xl font-bold flex items-center">
                        <img src="/logo.png" alt="Logo" className="h-8 w-auto mr-2" />
                    </Link>
                </div>

                {/* Right side: Signin and Signup */}
                <div className="flex items-center">
                    <Link to="/SignIn" className="pr-3 pl-3 pb-2 pt-1 text-black mr-3  hover:bg-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        SignIn
                    </Link>
                    <Link to="/SignUp" className="pr-3 pl-3 pb-2 pt-1 text-black mr-3  hover:bg-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        SignUp
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;