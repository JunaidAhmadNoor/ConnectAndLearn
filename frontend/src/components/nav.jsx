import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="bg-white p-3 w-full fixed top-0">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left side: Logo */}
                <div className="flex items-center">
                    <Link to="/" className="text-white text-xl font-bold flex items-center">
                        <img src="/logo.png" alt="Logo" className=" px-4 h-8 w-auto mr-2" />
                    </Link>
                </div>

                {/* Right side: Signin and Signup */}
                <div className="flex items-center">
                    <Link to="/signin" className="px-4 text-black mr-4">
                        Signin
                    </Link>
                    <Link to="/signup" className="px-4 text-black">
                        Signup
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
