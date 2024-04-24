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
        <nav className={` p-3 w-full fixed top-0 z-50 ${isScrolled ? 'ml-14 mt-4 w-11/12 rounded-full bg-gray-300' : ''}`}>
            <div className="container mx-auto flex justify-between items-center">
                {/* Left side: Logo */}
                <div className="flex items-center">
                    <Link to="/" className="text-black text-xl font-bold flex items-center">
                        <img src="/logo.png" alt="Logo" className="h-8 w-auto mr-2" />
                    </Link>
                </div>

                {/* Right side: Signin and Signup */}
                <div className="flex items-center">
                    <Link to="/signin" className="pr-2 text-black mr-4">
                        Signin
                    </Link>
                    <Link to="/signup" className="pr-10 text-black">
                        Signup
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
